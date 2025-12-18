let lists = document.querySelectorAll(".list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let fileBox = document.getElementById("files");

let selected = null;


lists.forEach(item => {
    item.addEventListener("dragstart", (e) => {
        selected = e.target;
    });
});

[rightBox, leftBox].forEach(box => {
    box.addEventListener("dragover", e => e.preventDefault());
    box.addEventListener("drop", () => {
        if (selected) {
            box.appendChild(selected);
            selected = null;
        }
    });
});


fileBox.addEventListener("dragover", (e) => {
    e.preventDefault();
});

fileBox.addEventListener("drop", (e) => {
    e.preventDefault();

    const files = e.dataTransfer.files;

    for (let file of files) {
        const div = document.createElement("div");
        div.className = "file-item";
        div.textContent = file.name;
        fileBox.appendChild(div);
    }
});
