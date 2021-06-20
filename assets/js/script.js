const menuButton = document.querySelector("#menu");
const menuLinks = document.querySelectorAll("header ul li");
const featureItem = document.querySelectorAll(".feature-item");
const kelas = document.querySelector("#kelas")
const leftSliderButton = document.querySelector(".left-button")
const rightSliderButton = document.querySelector(".right-button")
const cardContainer = document.querySelector(".card-container")
const daftarPertanyaan = document.querySelectorAll(".set-pertanyaan")

function toggleMenu() {
    if (screen.width <= 600) {
        const nav = document.querySelector("header nav");
        const menuImg = document.querySelector("#menu-img");
        const closeImg = document.querySelector("#close-img");
        nav.classList.toggle("show");
        menuImg.classList.toggle("hide");
        closeImg.classList.toggle("hide");
    }
}

// Attach Listener

menuButton.addEventListener("click", toggleMenu);

menuLinks.forEach((el) => {
    el.addEventListener("click", toggleMenu);
});

document.addEventListener("scroll", () => {
    const Y_AXIS = window.scrollY;
    const bodyOffset = document.body.getBoundingClientRect().top;

    featureItem.forEach((el) => {
        const deviceOffset = screen.width <= 600 ? 1 : 2.5
        const elBoundCliRect = el.getBoundingClientRect()
        const ypos = elBoundCliRect.top - bodyOffset - elBoundCliRect.height * deviceOffset;

        if (Y_AXIS >= ypos && !el.classList.contains("show")) {
            el.classList.add("show");
        } else if (Y_AXIS < ypos && el.classList.contains("show")) {
            el.classList.remove("show");
        }
    });
});

leftSliderButton.addEventListener("click", () => cardSlider(false))
rightSliderButton.addEventListener("click", () => cardSlider())

let cardPosition = 0;
function cardSlider(toRight = true) {
    const cardWidth = elementWidth(document.querySelector("#kelas .card"));
    const cardContainerWidth = elementWidth(cardContainer);

    if (toRight)
        cardPosition = Math.max(cardPosition - cardWidth - 40, screen.width - cardContainerWidth);
    else
        cardPosition = Math.min(cardPosition + cardWidth + 40, 0);

    cardContainer.style.transform = `translateX(${cardPosition}px)`
}

window.addEventListener("load", () => {
    const testimoniSlider = document.querySelector("#testimoni .slider");
    
    let sliderPos = 0;
    let isLast = false;
    
    setInterval(() => {
        const cardWidth = elementWidth(testimoniSlider.children[0]) + 10;
        const batas = screen.width - elementWidth(testimoniSlider) - 10;

        sliderPos -= cardWidth;

        if (isLast) {
            sliderPos = 0;
            isLast = false;
        }

        if (batas > sliderPos) {
            sliderPos = batas;
            isLast = true;
        }

        testimoniSlider.style.transform = `translateX(${sliderPos}px)`;
    }, 5000)
})

function elementWidth(el) {
    return el.getBoundingClientRect().width
}

daftarPertanyaan.forEach((el) => {
    const jawaban = el.querySelector(".jawaban")
    el.addEventListener("click", function(){
        this.classList.toggle("show")
        const contentHeight = jawaban.scrollHeight;

        if(this.classList.contains("show")){
            jawaban.style.maxHeight = `${contentHeight}px`;
        }else{
            jawaban.style.maxHeight = "0px";
        }
    })
})
