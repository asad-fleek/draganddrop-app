let lists = document.querySelectorAll(".list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

lists.forEach(item => {
    item.addEventListener("dragstart", function (e) {
        selected = e.target;
    });
});
rightBox.addEventListener("dragover", function (e) {
    e.preventDefault();
});

leftBox.addEventListener("dragover", function (e) {
    e.preventDefault();
});
rightBox.addEventListener("drop", function (e) {
    rightBox.appendChild(selected);
    selected = null;
});

leftBox.addEventListener("drop", function (e) {
    leftBox.appendChild(selected);
    selected = null;
});