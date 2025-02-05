import Sunflower from './sunflower.js';
import Peashooter from './peashooter.js';
import IcePea from './icepea.js';
import Wallnut from './wallnut.js';
import Zombie from './zombie.js';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let background = new Image();
background.src = './assets/Sprites/General/Background.jpg';

let lawnmowerPosition = [
    { x: 0, y: 145 },
    { x: 0, y: 245 },
    { x: 0, y: 345 },
    { x: 0, y: 445 },
    { x: 0, y: 545 }
];

let lawnmowerImg = new Image();
lawnmowerImg.src = './assets/Sprites/General/lawnmowerIdle.gif';
let lawnmowerLoaded = false;

lawnmowerImg.onload = () => {
    lawnmowerLoaded = true;
};

let plants = [];
let zombies = [];
let sunCollected = 0; // Jumlah Sun yang dikumpulkan

// Inisialisasi Sunflower di posisi tertentu
plants.push(new Sunflower(120, 145));

// Inisialisasi Peashooter di posisi tertentu
plants.push(new Peashooter(220, 245));

plants.push(new IcePea(320, 345));

// Inisialisasi Wallnut di posisi tertentu
plants.push(new Wallnut(530, 145));

// Inisialisasi Zombie di posisi awal
zombies.push(new Zombie(1000, 300, 0.5, 14));

// Event listener untuk klik Sun
canvas.addEventListener("click", (event) => {
    let rect = canvas.getBoundingClientRect();
    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;

    plants.forEach(plant => {
        if (plant instanceof Sunflower) {
            plant.suns.forEach(sun => {
                if (sun.isClicked(mouseX, mouseY)) {
                    sun.alive = false;
                    sunCollected += 25;
                    console.log(`Sun dikumpulkan! Total: ${sunCollected}`);
                }
            });
        }
    });
});

// Fungsi utama game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
    // Update & Draw Plants
    plants.forEach(plant => {
        plant.update(zombies);
        plant.draw(ctx);
    });
    
    // Update & Draw Zombies
    zombies.forEach(zombie => {
        zombie.update(plants);
        zombie.draw(ctx);
    });
    
    // Draw lawnmowers if image is loaded
    if (lawnmowerLoaded) {
        lawnmowerPosition.forEach(pos => {
            ctx.drawImage(lawnmowerImg, pos.x, pos.y, 100, 100);
        });
    }

    requestAnimationFrame(gameLoop);
}

background.onload = () => {
    // Mulai game loop
    gameLoop();
}

canvas.addEventListener('click', (e) => {
    let x = e.clientX;
    let y = e.clientY;

    console.log(`x: ${x}, y: ${y}`);
    
})