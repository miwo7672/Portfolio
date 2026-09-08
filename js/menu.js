const row = document.querySelector(".menu-row");
const illustImage = document.querySelector("#illustImage");

const frames = [
    "images/illust_1.png",
    "images/illust_2.png",
    "images/illust_3.png",
    "images/illust_4.png",
    "images/illust_5.png",
];

const originalImage = "images/illust_logo.png"

let timer;

function playAnimation() {
    clearInterval(timer);

    let frame = 0;

    timer = setInterval(() => {
        illustImage.src = frames[frame];

        frame++;

        if (frame >= frames.length) {
            clearInterval(timer);
        }
    }, 100);
}

function resetAnimation() {
    clearInterval(timer);

    illustImage.src = originalImage;
}

const cartoon = document.querySelector(".cartoon");
const etc = document.querySelector(".etc");

cartoon.addEventListener("mouseenter", playAnimation);
cartoon.addEventListener("mouseleave", resetAnimation);

etc.addEventListener("mouseenter", playAnimation);
etc.addEventListener("mouseleave", resetAnimation);