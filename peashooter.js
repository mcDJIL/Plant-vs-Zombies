import Plant from "./plant.js";
import Bullet from "./bullet.js";

class Peashooter extends Plant {
    constructor(x, y) {
        super('PeaShooter', 30, x, y, 0.12, 10);
        
        this.bullets = [];
        this.shootInterval = 2000;
        this.lastShootTime = Date.now();
        this.bulletImg = new Image();
        this.bulletImg.src = './assets/Sprites/General/Pea.png';
    }

    update(zombies) {
        let now = Date.now();

        if (now - this.lastShootTime >= this.shootInterval) {
            this.shoot();
            this.lastShootTime = now;    
        }

        this.bullets.forEach((bullet) => bullet.update(zombies));
        this.bullets = this.bullets.filter((b) => b.alive);

        super.update();
    }

    draw(ctx) {
        super.draw(ctx);
        this.bullets.forEach((bullet) => bullet.draw(ctx))
    }

    shoot() {
        this.bullets.push(new Bullet(this.x + this.width, this.y + (this.height / 2 - 30), this.bulletImg, 3));
    }
}

export default Peashooter;