import Plant from "./plant.js";

class Wallnut extends Plant {
    constructor(x, y) {
        super('WallNut', 32, x, y, 0.12, 50);
    }

    update() {
        super.update();
    }
}

export default Wallnut;