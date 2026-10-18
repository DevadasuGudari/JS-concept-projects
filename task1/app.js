let images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1020/600/400",
    "https://picsum.photos/id/1024/600/400"
];


let index = 0;

let image = document.getElementById("image");

let next = document.getElementById("next");
let prev = document.getElementById("prev");


for (let i = 0; i < images.length; i++) {

    let img = document.createElement("img");

    img.src = images[i];

    image.appendChild(img);

}


next.onclick = function () {

    index++;

    if (index == images.length) {
        index = 0;
    }

    image.style.transform = "translateX(-" + index * 600 + "px)";

};


prev.onclick = function () {

    index--;

    if (index < 0) {
        index = images.length - 1;
    }

    image.style.transform = "translateX(-" + index * 600 + "px)";

};


setInterval(function () {

    index++;

    if (index == images.length) {
        index = 0;
    }

    image.style.transform = "translateX(-" + index * 600 + "px)";

}, 5000);