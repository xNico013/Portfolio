const grid = document.getElementById("grid");

// Example images and videos URLs
const items = [
    "image1.jpg",
    "image2.jpg",
    "video1.mp4",
    "image3.jpg",
    "video2.mp4",
    // Add more items here
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
