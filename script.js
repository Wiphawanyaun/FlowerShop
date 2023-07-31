const leftBtn = document.querySelector('.left-btn')
const rightBtn = document.querySelector('.right-btn')
const catalogContainer = document.querySelector('.box-catalog')
let slideTranslate = 0;
const slideAmount = 1856;



leftBtn.addEventListener("click", () => {
     if (slideTranslate < 0) {
        slideTranslate += slideAmount;
        catalogContainer.style.transform = `translateX(${slideTranslate}px)`;
    }
   

})

rightBtn.addEventListener("click", () => {
    if (slideTranslate > -1856) {
        slideTranslate -= slideAmount;
        catalogContainer.style.transform = `translateX(${slideTranslate}px)`;
    }
    else if (slideTranslate = -1856) {
        slideTranslate = 0;
        catalogContainer.style.transform = `translateX(${slideTranslate}px)`;
    }
})





