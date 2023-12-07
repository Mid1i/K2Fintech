// Burger Menu functions
const popupIcon = document.querySelector(".main-header__top-burger");
const crossIcon = document.querySelector(".main-header__popup-cross");
const popupMenu = document.querySelector(".main-header__popup");

popupIcon.addEventListener("click", () => popupMenu.classList.add("active"));
crossIcon.addEventListener("click", () => popupMenu.classList.remove("active"));


// Sticky Header functions
const stickyHeader = document.querySelector(".main-header__sticky");

document.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 170) {
        stickyHeader.classList.remove("hidden");
    } else {
        stickyHeader.classList.add("hidden");
    }
})


// Accordion (Services section) functions
const accordionTitles = document.querySelectorAll(".accordion-item__top-text");
const accordionBtns = document.querySelectorAll(".accordion-item__top-btn");
const accordionContents = document.querySelectorAll(".accordion-item__content");

accordionBtns.forEach(item => item.addEventListener("click", () => {
    const activeContent = document.querySelector("#" + item.dataset.tab);
    const activeTitle = document.querySelector("#" + item.dataset.tab + "-title");

    if (activeContent.classList.contains("active")) {
        activeContent.classList.remove("active");
        activeTitle.classList.remove("active");
        item.classList.remove("active");
    } else {
        item.classList.add("active");
        activeTitle.classList.add("active");
        activeContent.classList.add("active");
    }
}))


// Main sections (For Banks, For Fintech, For Crypto) functions
const infoIcons = document.querySelectorAll(".section-list__icon");
const infoTriangles = document.querySelectorAll(".section-list__riangle");
const infoSections = document.querySelectorAll(".section-list__info");

infoIcons.forEach(item => item.addEventListener("click", () => {
    const activeSection = document.querySelector(`#${item.id}-data`);
    const activeTriangle = document.querySelector(`#${item.id}-tr`);
    
    if (item.classList.contains("active")) {
        activeSection.classList.remove("active");
        activeTriangle.classList.remove("active");
        item.classList.remove("active");
    } else {
        activeSection.classList.add("active");
        activeTriangle.classList.add("active");
        item.classList.add("active");
    }
}))


const infoIcon = document.querySelector(".section-text__icon");
const infoTriangle = document.querySelector(".section-text__triangle");
const infoSection = document.querySelector(".section-text__info");

infoIcon.addEventListener("click", () => {
    if (infoIcon.classList.contains("active")) {
        infoIcon.classList.remove("active");
        infoTriangle.classList.remove("active");
        infoSection.classList.remove("active");
    } else {
        infoIcon.classList.add("active");
        infoTriangle.classList.add("active");
        infoSection.classList.add("active");
    }
})


// People slider and Read more functions
const moreInfo = document.querySelectorAll(".people-card__btn");

moreInfo.forEach(item => item.addEventListener("click", () => {
    const activeSection = document.querySelector(`#${item.id}-info`);
    const activeSpan = document.querySelector(`#${item.id}-span`);
    const activeText = item.querySelector('span');
    
    if (item.classList.contains("active")) {
        item.classList.remove("active");
        activeSection.classList.add("hidden");
        activeSpan.classList.remove("hidden");
        activeText.innerHTML = 'Read more';
    } else {
        item.classList.add("active");
        activeSection.classList.remove("hidden");
        activeSpan.classList.add("hidden");
        activeText.innerHTML = 'Close';
    }
}))


// Hotspot functions
const hotspotIcons = document.querySelectorAll(".hotspot-item__icon");

hotspotIcons.forEach(item => item.addEventListener("click", () => {
    const activeSection = document.querySelector(`#${item.id}-section`);
    const activeContent = document.querySelector(`#${item.id}-info`);

    if (item.classList.contains("active")) {
        item.classList.remove("active");
        activeSection.classList.remove("active");
        activeContent.classList.remove("active");
    } else {
        item.classList.add("active");
        activeSection.classList.add("active");
        activeContent.classList.add("active");
    }
}))


// Navigation functions
document.addEventListener("click", (event) => {
    const arg = event.target;

    if (["home", "services", "banks", "fintech", "crypto", "about", "hotspot", "contacts"].includes(arg.id)) {
        $("html, body").animate({
            scrollTop: $(`#${arg.id}-section`).offset().top - 80
        }, 700);
    
        popupMenu.classList.remove("active");
    }
})


// Active navigation menu function
document.addEventListener("scroll", () => {
    const data = [
        {
            id: "home",
            topBorder: 0,
            bottomBorder: $("#banks-section").offset().top 
        },
        {
            id: "banks",
            topBorder: $("#banks-section").offset().top,
            bottomBorder: $("#fintech-section").offset().top 
        },
        {
            id: "fintech",
            topBorder: $("#fintech-section").offset().top,
            bottomBorder: $("#crypto-section").offset().top 
        },
        {
            id: "crypto",
            topBorder: $("#crypto-section").offset().top,
            bottomBorder: $("#about-section").offset().top 
        },
        {
            id: "about",
            topBorder: $("#about-section").offset().top,
            bottomBorder: $("#hotspot-section").offset().top 
        },
        {
            id: "hotspot",
            topBorder: $("#hotspot-section").offset().top,
            bottomBorder: $("#contacts-section").offset().top 
        },
    ];

    data.forEach(item => {
        if (document.documentElement.scrollTop > item.topBorder && document.documentElement.scrollTop < item.bottomBorder) {
            const section = document.querySelector(`.top-menu__list-el--${item.id}`);
            section.classList.add("top-menu__list-el--active");
            removeActiveClass(item.id);
        }
    })
})

function removeActiveClass(activeItem) {
    ["home", "banks", "fintech", "crypto", "about", "hotspot"]
        .filter(item => item !== activeItem) 
        .map(item => {
            const section = document.querySelector(`.top-menu__list-el--${item}`);
            section.classList.remove("top-menu__list-el--active");
        });
}


// Form sending functions
const form = document.querySelector(".section-form");
const notify = document.querySelector(".notify");
const contactBtn = document.querySelector("#contact-btn");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const checkbox = document.querySelector("#checkbox");

contactBtn.addEventListener("click", (event) => {
    event.preventDefault();

    if (nameInput.value === "") {
        const nameText = document.querySelector("#name-text");
        nameText.classList.add("active");
        nameInput.classList.add("empty");
    }

    if (emailInput.value === "") {
        const emailText = document.querySelector("#email-text");
        emailText.classList.add("active");
        emailInput.classList.add("empty");
    }

    if (!([nameInput.value, emailInput.value].includes("")) && (checkbox.checked)) {
        notify.classList.add("active");
        window.setTimeout(() => notify.classList.remove("active"), 1000);
        form.submit();

        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
        checkbox.checked = false;
    }
})

nameInput.addEventListener("focus", () => {
    const nameText = document.querySelector("#name-text");
    nameText.classList.remove("active");
    nameInput.classList.remove("empty");
})

emailInput.addEventListener("focus", () => {
    const emailText = document.querySelector("#email-text");
    emailText.classList.remove("active");
    emailInput.classList.remove("empty");
})
