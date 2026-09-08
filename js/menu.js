const row = document.querySelector(".menu-row");
const image = document.querySelector(".illust img");

const frames = [
    "../images/398.1.png",
    "../images/398.2.png",
    "../images/398.3.png",
    "../images/398.4.png",
    "../images/398.5.png",
];

let timer;

row.querySelector(".cartoon").addEventListener("mouseenter", playAnimation);
row.querySelector(".etc").addEventListener("mouseenter", playAnimation);

function playAnimation() {
    clearInterval(timer);

    let frame = 0;

    timer = setInterval(() => {
        image.src = frames[frame];

        frame++;

        if (frame >= frames.length) {
            clearInterval(timer);
        }
    }, 100);
}
