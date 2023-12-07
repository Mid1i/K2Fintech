function aboutSlider() {
    $(".about-section__people").not('.slick-initialized').slick({
        adaptiveHeight: true,
        arrows: false,
        centerMode: true,
        dots: true,
        easing: 'linear',
        infinite: true,
        mobileFirst: true,
        slidesToShow: 1,
        speed: 600,
        swipe: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    initialSlide: 1
                }
            },
            {
                breakpoint: 1600,
                settings: "unslick"
            }
        ]
    });
}

window.addEventListener("resize", () => aboutSlider());
window.addEventListener("load", () => {
    aboutSlider();
    window.setTimeout(() => {
        const section = document.querySelector(".about-section__people");
        section.classList.add("active");
    }, 1000);
});