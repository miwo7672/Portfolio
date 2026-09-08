const row = document.querySelector(".menu-row");
const illustImage = document.querySelector("#illustImage");

const frames = [
    "../images/398.1.png",
    "../images/398.2.png",
    "../images/398.3.png",
    "../images/398.4.png",
    "../images/398.5.png",
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