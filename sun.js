class Sun {
    constructor(x, y) {
        this.x = x + Math.random() * 30 - 15; // Random di sekitar Sunflower
        this.y = y;
        this.width = 40;
        this.height = 40;
        this.speed = 1; // Kecepatan jatuh
        this.alive = true;
        this.image = new Image();
        this.image.src = "./assets/Sprites/General/Sun.png";
    }

    update() {
        if (this.y < 400) { // Batas jatuh sebelum hilang
            this.y += this.speed;
        }
    }

    draw(ctx) {
        if (this.alive) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }

    isClicked(mouseX, mouseY) {
        return mouseX >= this.x && mouseX <= this.x + this.width &&
               mouseY >= this.y && mouseY <= this.y + this.height;
    }
}

export default Sun;