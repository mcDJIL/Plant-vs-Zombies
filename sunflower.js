import Plant from "./plant.js";
import Sun from "./sun.js";

class Sunflower extends Plant {
    constructor(x, y) {
        super("SunFlower", 24, x, y, 0.06, 10);

        this.sunInterval = 1000;
        this.lastSunUpdate = Date.now();
        this.suns = [];
        this.now = Date.now();
    }

    update() {
        let now = this.now;

        if (now - this.lastSunUpdate >= this.sunInterval) {
            this.produceSun();
            this.lastSunUpdate = now();
        }

        this.suns.forEach((sun) => sun.update());
        this.suns = this.suns.filter((s) => s.alive);

        super.update();
    }

    draw(ctx) {
        super.draw(ctx);
        this.suns.forEach((sun) => sun.draw(ctx));
    }

    produceSun() {
        let sun = new Sun(this.x, this.y);
        this.suns.push(sun);
    }
}

export default Sunflower;