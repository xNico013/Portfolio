const grid = document.getElementById("grid");

const items = [
    "Scripting.png",
    "image2.jpg",
    "image3.jpg",
    "Smooth First Person System.mp4", // Video file is in the same directory
    "video2.mp4",
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

const sphereRadius = 180;
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

function getRandomSphereCoordinates() {
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.sqrt(Math.random()) * sphereRadius;
    const x = sphereCenterX + radius * Math.cos(angle);
    const y = sphereCenterY + radius * Math.sin(angle);
    return { x, y, dx: (Math.random() - 0.5) * maxSpeed, dy: (Math.random() - 0.5) * maxSpeed };
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

        // Constrain dots within the sphere
        const distanceToCenter = Math.sqrt((dot.x - sphereCenterX) ** 2 + (dot.y - sphereCenterY) ** 2);
        if (distanceToCenter > sphereRadius) {
            // Calculate angle between current position and the center
            const angle = Math.atan2(dot.y - sphereCenterY, dot.x - sphereCenterX);
            // Move dot back to the sphere boundary
            dot.x = sphereCenterX + sphereRadius * Math.cos(angle);
            dot.y = sphereCenterY + sphereRadius * Math.sin(angle);
        }
    }
}

animate();


