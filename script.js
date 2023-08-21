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

let currentItemIndex = 0;

function createGridItem(item) {
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

    return gridItem;
}

function animateGrid() {
    const gridItems = Array.from(grid.getElementsByClassName("grid-item"));

    // Remove the first item and add it to the end
    const firstItem = gridItems.shift();
    gridItems.push(firstItem);

    // Apply animation to the grid items
    gridItems.forEach((item, index) => {
        item.style.transition = "none"; // Temporarily remove transition
        item.style.transform = `translateX(-${100 * index}%)`; // Shift items to the left
    });

    // Re-apply transition and reset positions
    setTimeout(() => {
        gridItems.forEach(item => {
            item.style.transition = ""; // Restore transition
            item.style.transform = "translateX(0)"; // Reset position
        });
    }, 0);
}

// Initialize grid items
items.forEach(item => {
    const gridItem = createGridItem(item);
    grid.appendChild(gridItem);
});

// Animate the grid
setInterval(animateGrid, 3000); // Adjust the time interval as needed
