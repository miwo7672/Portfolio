document.oncontextmenu = function (e) {
    alert('Right - click is disabled on this website.');
    return false;
}


document.addEventListener("DOMContentLoaded", function () {

    const track = document.querySelector(".slide-track");
    const slides = document.querySelectorAll(".slide");

    const prevButton = document.querySelector(".slide-prev");
    const nextButton = document.querySelector(".slide-next");
    const dotsContainer = document.querySelector(".slide-dots");

    let currentIndex = 0;

    // 슬라이드가 없으면 종료
    if (slides.length === 0) {
        return;
    }

    // 페이지 점 생성
    slides.forEach(function (slide, index) {

        const dot = document.createElement("button");

        dot.classList.add("slide-dot");
        dot.type = "button";

        if (index === 0) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", function () {
            currentIndex = index;
            updateSlide();
        });

        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".slide-dot");


    // 슬라이드 이동
    function updateSlide() {

        track.style.transform =
            `translateX(-${currentIndex * 100}%)`;

        // 현재 페이지 표시
        dots.forEach(function (dot, index) {

            if (index === currentIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }

        });
    }


    // 다음 슬라이드
    nextButton.addEventListener("click", function () {

        currentIndex++;

        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }

        updateSlide();
    });


    // 이전 슬라이드
    prevButton.addEventListener("click", function () {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }

        updateSlide();
    });


    // 자동 슬라이드
    setInterval(function () {

        currentIndex++;

        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }

        updateSlide();

    }, 5000);

});