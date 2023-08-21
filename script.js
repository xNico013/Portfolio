const grid = document.getElementById("grid");

const items = [
    "Scripting.png",
    "image2.jpg",
    "image3.jpg",
    "video1.mp4", // Video file is in the same directory
    "video2.mp4",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
];

const cycleDuration = 20; // in seconds
const itemDuration = cycleDuration * 1000 / items.length;
let currentItemIndex = 0;

function moveItems() {
    const gridItems = grid.getElementsByClassName("grid-item");
    const currentItem = gridItems[currentItemIndex];

    currentItem.style.transform = "translateX(-100%)";

    setTimeout(() => {
        currentItem.style.transform = "translateX(0)";
        currentItemIndex = (currentItemIndex + 1) % items.length;
    }, itemDuration - 50); // 50ms buffer for smooth transition

    currentItemIndex = (currentItemIndex + 1) % items.length;
}

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

setInterval(moveItems, itemDuration);
