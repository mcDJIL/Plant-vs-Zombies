import Sprites from "./Sprite.js";

class Zombie extends Sprites {
    constructor(x, y, speed, health) {
        super('Zombie', 33, x, y, speed, 0.05, 92, 138, health);
    }

    update(plants) {
        if (!this.alive) return;

        this.x -= this.speed;

        plants.forEach((plant) => {
            if (
                this.x <= plant.x + plant.width &&
                this.y <= plant.y + plant.height &&
                this.y >= plant.y &&
                this.x >= plant.x &&
                plant.alive
            ) {
                plant.takeDamage(1);
            }
        });

        super.update();
    }
}

export default Zombie;