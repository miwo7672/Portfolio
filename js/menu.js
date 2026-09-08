const areas = {
    cartoon: {
        area: document.querySelector(".cartoon"),
        image: document.querySelector("#cartoonImage"),
        original: "images/cartoon_logo.png",

        frames: [
            "images/cartoon_1.png",
            "images/cartoon_2.png",
            "images/cartoon_3.png",
            "images/cartoon_4.png",
            "images/cartoon_5.png",
            "images/cartoon_6.png"
        ]
    },

    illust: {
        area: document.querySelector(".illust"),
        image: document.querySelector("#illustImage"),
        original: "images/illust_logo.png",

        frames: [
            "images/illust_1.png",
            "images/illust_2.png",
            "images/illust_3.png",
            "images/illust_4.png",
            "images/illust_5.png",
            "images/illust_6.png"
        ]
    },

    etc: {
        area: document.querySelector(".etc"),
        image: document.querySelector("#etcImage"),
        original: "images/etc_logo.png",

        frames: [
            "images/etc_1.png",
            "images/etc_2.png",
            "images/etc_3.png",
            "images/etc_4.png",
            "images/etc_5.png",
            "images/etc_6.png"
        ]
    }
};


// 각 영역의 타이머
const timers = {};


// 애니메이션 실행
function playAnimation(target) {

    clearInterval(timers[target]);

    const current = areas[target];

    let frame = 0;

    timers[target] = setInterval(() => {

        current.image.src = current.frames[frame];

        frame++;

        if (frame >= current.frames.length) {
            clearInterval(timers[target]);
        }

    }, 100);
}


// 원본 이미지로 복귀
function resetAnimation(target) {

    clearInterval(timers[target]);

    areas[target].image.src = areas[target].original;
}


// 각 영역에 이벤트 등록
Object.keys(areas).forEach((hoverTarget) => {

    areas[hoverTarget].area.addEventListener("mouseenter", () => {

        // 모든 영역 확인
        Object.keys(areas).forEach((target) => {

            // 현재 hover한 영역은 제외
            if (target !== hoverTarget) {
                playAnimation(target);
            }

        });

    });


    areas[hoverTarget].area.addEventListener("mouseleave", () => {

        // 모든 영역 원상복구
        Object.keys(areas).forEach((target) => {
            resetAnimation(target);
        });

    });

});
