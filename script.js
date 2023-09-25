const grid = document.getElementById("grid");

const items = [
    "Scripting.png",
    "image2.jpg",
    "image3.jpg",
    "Smooth First Person System.mp4", // Video file is in the same directory
    "Mutli Speaker Sound System.mp4",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
];

items.forEach(item => {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    if (item.endsWith(".jpg") || item.endsWith(".png")) {
        const image = document.createElement("img");
        image.src = item;
        gridItem.appendChild(image);
    } else if (item.endsWith(".mp4")) {
        const video = document.createElement("video");
        video.src = item;
        video.controls = true;
        gridItem.appendChild(video);
    }

    grid.appendChild(gridItem);
});





const canvas = document.getElementById("sphereCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = 600;

const sphereRadius = 200;
const sphereCenterX = canvas.width / 2;
const sphereCenterY = canvas.height / 2;
const dotCount = 300;
const dotRadius = 2;
const dotColor = "#fff";
const maxSpeed = 1;

const dots = [];
const lines = [];

function drawDot(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
    ctx.fillStyle = dotColor;
    ctx.fill();
}

function drawLine(startX, startY, endX, endY) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = dotColor;
    ctx.stroke();
}

function getRandomVelocity() {
    return (Math.random() - 0.5) * maxSpeed;
}

function getRandomDirection() {
    return Math.random() * Math.PI * 2;
}

function getRandomSphereCoordinates() {
    const u = Math.random() * 2 - 1; // Random number between -1 and 1
    const theta = Math.random() * Math.PI * 2; // Random angle between 0 and 2*PI

    const x = sphereCenterX + sphereRadius * Math.sqrt(1 - u * u) * Math.cos(theta);
    const y = sphereCenterY + sphereRadius * Math.sqrt(1 - u * u) * Math.sin(theta);
    
    const speed = maxSpeed; // Constant speed
    const direction = getRandomDirection();
    const dx = speed * Math.cos(direction);
    const dy = speed * Math.sin(direction);

    return { x, y, dx, dy };
}

for (let i = 0; i < dotCount; i++) {
    dots.push(getRandomSphereCoordinates());
}

// Define 10 words and their positions
const words = [
    { text: "Word 1", x: 100, y: 100 },
    { text: "Word 2", x: 200, y: 150 },
    { text: "Word 3", x: 300, y: 200 },
    { text: "Word 4", x: 400, y: 250 },
    { text: "Word 5", x: 500, y: 300 },
    { text: "Word 6", x: 600, y: 350 },
    { text: "Word 7", x: 700, y: 400 },
    { text: "Word 8", x: 800, y: 450 },
    { text: "Word 9", x: 900, y: 500 },
    { text: "Word 10", x: 1000, y: 550 },
];

// Create lines connecting dots to words
for (let i = 0; i < 10; i++) {
    lines.push({ dotIndex: i, wordIndex: i });
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw lines connecting dots to words
    for (const line of lines) {
        const dot = dots[line.dotIndex];
        const word = words[line.wordIndex];
        drawLine(dot.x, dot.y, word.x, word.y);
    }

    // Draw dots
    for (const dot of dots) {
        drawDot(dot.x, dot.y);
        dot.x += dot.dx;
        dot.y += dot.dy;

        // Check if the dot hits the sphere's border
        const distanceToCenter = Math.sqrt((dot.x - sphereCenterX) ** 2 + (dot.y - sphereCenterY) ** 2);
        if (distanceToCenter > sphereRadius) {
            // Bounce off the sphere's border
            const angle = Math.atan2(dot.y - sphereCenterY, dot.x - sphereCenterX);
            dot.dx *= -1; // Reverse the horizontal velocity
            dot.dy *= -1; // Reverse the vertical velocity
            // Move dot back to the sphere's border
            dot.x = sphereCenterX + sphereRadius * Math.cos(angle);
            dot.y = sphereCenterY + sphereRadius * Math.sin(angle);
        }
    }

    // Draw words
    for (const word of words) {
        ctx.fillStyle = dotColor;
        ctx.fillText(word.text, word.x, word.y);
    }
}

// Start the animation
animate();





const videoIds = ["BrfoYZQSwTw", "RsaOvQVFYKI", "MthZZEg_pek"]; // Replace with your video IDs
let currentVideoIndex = 0;

const youtubeIframe = document.getElementById("youtube-iframe");
const prevButton = document.getElementById("prev-video");
const nextButton = document.getElementById("next-video");

function loadVideo(index) {
    const videoId = videoIds[index];
    youtubeIframe.src = `https://www.youtube.com/embed/${videoId}`;
}

prevButton.addEventListener("click", () => {
    currentVideoIndex = (currentVideoIndex - 1 + videoIds.length) % videoIds.length;
    loadVideo(currentVideoIndex);
});

nextButton.addEventListener("click", () => {
    currentVideoIndex = (currentVideoIndex + 1) % videoIds.length;
    loadVideo(currentVideoIndex);
});

// Load the initial video
loadVideo(currentVideoIndex);

