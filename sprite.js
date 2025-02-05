class Sprites {
    constructor(name, frameCount, x, y, speed, frameDelay, width, height, health) {
        this.name = name;
        this.frameCount = frameCount;
        this.frames = [];
        this.currentFrame = 0;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.frameDelay = frameDelay * 1000;
        this.lastUpdate = Date.now();
        this.width = width;
        this.height = height;
        this.health = health;
        this.alive = true;
        
        for (let i = 0; i < frameCount; i++) {
            let img = new Image();
            img.src = `./assets/Sprites/${name}/frame_${String(i).padStart(2, '0')}_delay-${frameDelay}s.gif`;
            this.frames.push(img);
        }
    }

    draw(ctx) {
        if (this.alive && this.frames.length > 0) {
            ctx.drawImage(this.frames[this.currentFrame], this.x, this.y, this.width, this.height);
        }
    }

    update() {
        let now = Date.now();
        if (now - this.lastUpdate >= this.frameDelay) {
            this.currentFrame = (this.currentFrame + 1) % this.frameCount;
            this.lastUpdate = now;
        }
    }

    takeDamage(amount) {
        this.health -= parseInt(amount);
        if (this.health <= 0) {
            this.alive = false;
        }
    }
}

export default Sprites;