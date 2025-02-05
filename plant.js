import Sprites from "./Sprite.js";

class Plant extends Sprites {
    constructor(name, frameCount, x, y, frameDelay, health) {
        super(name, frameCount, x, y, 0, frameDelay, 100, 100, health);
    }

    update(zombies) {
        if (!this.alive) return;

        super.update();
    }
}

export default Plant;