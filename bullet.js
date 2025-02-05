class Bullet {
    constructor(x, y, img, damage) {
        this.x = x;
        this.y = y;
        this.img = img;
        this.speed = 5;
        this.alive = true;
        this.width = 28;
        this.height = 30;
        this.damage = damage;
    }

    update(zombies) {
        if (!this.alive) return;

        this.x += this.speed;

        zombies.forEach((zombie) => {
            if (this.x >= zombie.x &&
                this.x <= zombie.x + zombie.width &&
                this.y >= zombie.y &&
                this.y <= zombie.y + zombie.height &&
                zombie.alive
            ) {
                zombie.takeDamage(this.damage);
                this.alive = false
            }
        })
    }

    draw(ctx) {
        if (this.alive) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }
}

export default Bullet;