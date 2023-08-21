const grid = document.getElementById("grid");
const items = [
    "Scripting.png",
    "image2.jpg",
    "image3.jpg",
    "video1.mp4",
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

    gridItem.addEventListener("transitionend", () => {
        gridItem.style.transition = "none"; // Temporarily remove transition to reset position instantly
        gridItem.style.transform = "translateX(100%)"; // Move item to the right side
        setTimeout(() => {
            gridItem.style.transition = ""; // Restore transition
            gridItem.style.transform = "translateX(0)"; // Reset item position for the next cycle
        }, 0);
    });

    grid.appendChild(gridItem);
});
