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


// Get the canvas element and its 2d rendering context
const canvas = document.getElementById("sphereCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = 600;

// Sphere parameters
const sphereRadius = 180;
const sphereCenterX = canvas.width / 2;
const sphereCenterY = canvas.height / 2;
const dotCount = 25;
const dotRadius = 2;
const lineColor = "#fff";

// Function to draw a dot
function drawDot(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
    ctx.fillStyle = lineColor;
    ctx.fill();
}

// Function to draw a line between two dots
function drawLine(dot1, dot2) {
    ctx.beginPath();
    ctx.moveTo(dot1.x, dot1.y);
    ctx.lineTo(dot2.x, dot2.y);
    ctx.strokeStyle = lineColor;
    ctx.stroke();
}

// Function to generate random coordinates within the sphere
function getRandomSphereCoordinates() {
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.sqrt(Math.random()) * sphereRadius;
    const x = sphereCenterX + radius * Math.cos(angle);
    const y = sphereCenterY + radius * Math.sin(angle);
    return { x, y };
}

// Draw the sphere
for (let i = 0; i < dotCount; i++) {
    const dot = getRandomSphereCoordinates();
    drawDot(dot.x, dot.y);
    for (let j = i + 1; j < dotCount; j++) {
        const nextDot = getRandomSphereCoordinates();
        drawLine(dot, nextDot);
    }
}
