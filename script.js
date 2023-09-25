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

function drawDot(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
    ctx.fillStyle = dotColor;
    ctx.fill();
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

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

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
}

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

