const newParticlesPerFrame = 50;

const color = (hsl, o) => {
    return `hsla(${hsl.h | 0}, ${hsl.s}%, ${hsl.l}%, ${o})`;
};

class TextSparks {
    constructor() {
        this.opa = 0;
        this.tick = 0;
        this.drawCB = null;
        this.mask = null;
        this.canvas = window.document.querySelector('canvas');
        this.engine = this.canvas.getContext('2d');
        this.maskTick = 0;
        this.nextMaskCb = this.nextMask.bind(this);
        this.maskCache = [];
        this.resize();
        this.fetchData();
        this.buildStackCache();
        this.particleMap = new Map();
    }

    buildStackCache() {
        this.maskCache = this.stack.map((stack) => {
            return this.buildTextMask(stack.texts);
        });
    }

    fetchData() {
        this.stackId = -1;
        this.stack = [...document.querySelectorAll('div > ul')].map(ul => {
            return {
                ticks: 0.05 * (ul.hasAttribute('data-time') ? ul.getAttribute('data-time') : 0),
                fadeIn: ul.hasAttribute('data-fade-in') ? 50 / Number(ul.getAttribute('data-fade-in')) : 0,
                fadeOut: ul.hasAttribute('data-fade-out') ? 50 / Number(ul.getAttribute('data-fade-out')) : 0,
                texts: [...ul.querySelectorAll('li')].map(li => {
                    return {
                        text: li.innerHTML.trim(),
                        hsl: {
                            h: li.hasAttribute('data-hue') ? Number(li.getAttribute('data-hue')) : 0,
                            s: li.hasAttribute('data-saturation') ? Number(li.getAttribute('data-saturation')) : 100,
                            l: li.hasAttribute('data-lightness') ? Number(li.getAttribute('data-lightness')) : 50
                        }
                    };
                })
            };
        });
    }

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.setAttribute('width', this.width);
        this.canvas.setAttribute('height', this.height);
    }

    buildTextMask(texts) {
        const mask = [];
        const textAll = texts.reduce((all, textStack) => {
            return all.concat(textStack.text);
        }, '');
        const size = 0.5;
        const width = 200;
        const height = width / (this.width / this.height) | 0;
        const baseFontSize = 10;
        const canvas = document.createElement('canvas');
        const engine = canvas.getContext('2d');
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        const font = (size) => {
            return `bold ${size}px Arial`;
        };
        engine.font = font(baseFontSize);
        const m = engine.measureText(textAll);
        const rel = m.width / (width * size);
        const fSize = Math.min(height * 0.8, baseFontSize / rel | 0);
        engine.font = font(fSize);
        const fontWidth = engine.measureText(textAll).width;
        let left = (width - fontWidth) / 2;
        const bot = height / 2 + fSize * 0.35;
        texts.forEach(textStack => {
            engine.clearRect(0, 0, width, height);
            engine.fillText(textStack.text, left, bot);
            left += engine.measureText(textStack.text).width;
            const data = engine.getImageData(0, 0, width, height);
            const subStack = [];
            for (let i = 0, max = data.width * data.height; i < max; i++) {
                if (data.data[i * 4 + 3]) {
                    subStack.push({
                        x: (i % data.width) / data.width,
                        y: (i / data.width | 0) / data.height,
                        o: Math.random(),
                        t: Math.random(),
                    });
                }
            }
            mask.push({
                hsl: textStack.hsl,
                s: subStack,
            });
        });
        return mask;
    }

    createNewParticle() {
        for (let i = 0; i < newParticlesPerFrame; i++) {
            let main = Math.random() * this.mask.length | 0;
            let subMask = this.mask[main];
            let maskElement = this.mask[main].s[Math.random() * this.mask[main].s.length | 0];
            if (subMask && maskElement) {
                let particle = {
                    x: maskElement.x,
                    y: maskElement.y,
                    hsl: subMask.hsl,
                    c: this.prepareParticle
                };
                this.particleMap.set(particle, particle);
            }
        }
    }

    secLog(log, timesPerFrame) {
        if (Math.random() < 1 / 60 / timesPerFrame) {
            console.log(log);
        }
    }

    clear() {
        this.engine.clearRect(0, 0, this.width, this.height);
    }

    randFromList(...rands) {
        return rands.reduce((acc, rand) => {
            return acc + rand;
        }, 0) / rands.length;
    }

    prepareParticle(particle) {
        const r1 = Math.random();
        const r2 = Math.random();
        const r3 = Math.random();
        const rad = r3 * Math.PI * 2;
        particle.x += (-0.5 + r1) / 300;
        particle.y += (-0.5 + r2) / 300;
        particle.si = 1 + Math.random() * 4 | 0;
        particle.s = 0.003 + this.randFromList(r1, r2) / 10;
        particle.l = 0;
        particle.mx = Math.cos(rad) * (particle.s / (r1 < 0.05 ? 10 : 400));
        particle.my = Math.sin(rad) * (particle.s / (r1 < 0.05 ? 10 : 400));
        particle.c = this.drawParticle;
    }

    drawParticle(particle) {
        if (particle.l >= 1) {
            particle.c = null;
            return;
        }
        particle.l += particle.s;
        particle.x += particle.mx;
        particle.y += particle.my;
        this.engine.fillStyle = color(particle.hsl, this.opa * Math.sin(particle.l * Math.PI));
        this.engine.fillRect(particle.x * this.width, particle.y * this.height, particle.si, particle.si);
    }

    renderParticles() {
        this.particleMap.forEach((particle) => {
            particle.c.call(this, particle);
            if (!particle.c) {
                this.particleMap.delete(particle);
            }
        });
    }

    drawStatic() {
        let i = 0;
        const step = 0.01;
        this.mask.forEach(subMask => {
            subMask.s.forEach(pos => {
                i++;
                this.engine.fillStyle = color(subMask.hsl, (1 + Math.cos(pos.x * 5 * pos.y * 5 + this.tick / 10)) / 2 * this.opa * pos.t * 0.5);
                this.engine.fillRect(
                    pos.x * this.width,
                    pos.y * this.height,
                    this.width / 150,
                    this.width / 150
                );
                if (i % 2) {
                    return;
                }
                pos.o += step;
                const opa = Math.max(0, Math.sin(pos.o * Math.PI * 2));
                const padding = opa * this.width / 200;
                this.engine.fillStyle = color(subMask.hsl, this.opa * opa * 0.2);
                if (pos.t < 0.5) {
                    this.engine.beginPath();
                    this.engine.arc(
                        pos.x * this.width,
                        pos.y * this.height,
                        this.width / 500 + padding,
                        0,
                        Math.PI * 2
                    );
                    this.engine.fill();
                } else {
                    this.engine.fillRect(
                        pos.x * this.width - padding,
                        pos.y * this.height - padding,
                        this.width / 150 + padding * 2,
                        this.width / 150 + padding * 2
                    );
                }
            });
        });
    }

    draw() {
        this.tick++;
        this.nextMaskCb();
        this.createNewParticle();
        this.clear();
        this.engine.globalCompositeOperation = 'lighter';
        this.drawStatic();
        this.renderParticles();
        this.engine.globalCompositeOperation = 'source-over';
        requestAnimationFrame(this.drawCB);
    }

    fadeInMask() {
        this.opa += this.stack[this.stackId].fadeIn;
        if (this.opa >= 1) {
            this.opa = 1;
            this.afterFadeIn();
        }
    }

    afterFadeIn() {
        this.opa = 1;
        if (this.stack[this.stackId].ticks) {
            this.maskTick = 0;
            this.nextMaskCb = this.tickMask.bind(this);
        } else {
            this.nextMaskCb = () => {};
        }
    }

    fadeOutMask() {
        this.opa -= this.stack[this.stackId].fadeOut;
        if (this.opa <= 0) {
            this.opa = 0;
            this.afterFadeOut();
        }
    }

    afterFadeOut() {
        this.maskTick = 0;
        this.nextMaskCb = this.nextMask.bind(this);
    }

    tickMask() {
        this.maskTick += 0.01;
        if (this.maskTick >= this.stack[this.stackId].ticks) {
            this.nextMaskCb = this.fadeOutMask.bind(this);
        }
    }

    nextMask() {
        this.maskId = 0;
        this.stackId++;
        if (this.stackId >= this.stack.length) {
            this.stackId = 0;
        }
        this.mask = this.maskCache[this.stackId];
        if (!this.mask) {
            this.mask = this.buildTextMask(this.stack[this.stackId].texts);
        }
        if (this.stack[this.stackId].fadeIn) {
            this.nextMaskCb = this.fadeInMask.bind(this);
        } else {
            this.afterFadeIn();
        }
    }

    start() {
        this.drawCB = this.draw.bind(this);
        this.nextMask();
        this.draw();
    }
}

const effect = new TextSparks();
window.addEventListener('resize', () => {
    effect.resize();
});
window.requestAnimationFrame(() => {
    effect.start();
});



/* Boost testen*/
console.clear();

const { gsap } = window;

gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(CustomEase);

gsap.ticker.fps(24);

const morphs = {
    original: gsap.utils.toArray("#morph-original path"),
    stretched: gsap.utils.toArray("#morph-stretched path"),
    small: gsap.utils.toArray("#morph-small path")
};

const TL_DEFAULTS = {
    delay: 1,
    defaults: {
        duration: 1,
        stagger: {
            each: 0.038,
            from: "center"
        }
    },
    repeat: -1,
    repeatDelay: 1
};

const CUSTOM_EASE = {
    jump: CustomEase.create(
        "jump",
        "M0,0 C0.084,0.61 0.14,0.788 0.236,0.878 0.337,0.972 0.374,1 1,1 "
    ),
    drop: CustomEase.create(
        "drop",
        "M0,0,C0.25,0,0.258,0.024,0.314,0.07,0.399,0.14,0.466,0.292,0.498,0.502,0.532,0.73,0.552,0.992,0.604,0.998,0.613,0.999,0.698,1,1,1"
    )
};

function animate(el) {
    const tl = gsap.timeline(TL_DEFAULTS);

    tl.addLabel("start", 0).addLabel("upcoming", 0.8).addLabel("end", 1.35);
    tl.timeScale(1.15);

    tl
        .to(
            el,
            {
                duration: 0.8,
                morphSVG: (i) => morphs.small[i],
                stagger: null,
                ease: "none"
            },
            "start"
        )
        .to(
            el,
            {
                duration: 0.8,
                y: -60,
                ease: CUSTOM_EASE.jump,
                morphSVG: (i) => morphs.stretched[i]
            },
            "upcoming"
        )
        .to(
            el,
            {
                y: 0,
                ease: CUSTOM_EASE.drop
            },
            "end"
        )
        .to(
            el,
            {
                duration: 0.5,
                morphSVG: (i) => morphs.small[i],
                ease: CUSTOM_EASE.drop
            },
            "end+=0.2"
        )
        .to(
            el,
            {
                duration: 0.7,
                morphSVG: (i) => morphs.original[i],
                ease: "elastic.out(1, 1)"
            },
            "end+=.6"
        );
}

animate(".boost-1 path");
animate(".boost-2 path");