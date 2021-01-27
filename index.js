const burger = document.querySelector(".hamburger");
const menuShow = document.querySelector('.links');
const line2 = document.querySelector('.line2');
const line1 = document.querySelector('.line1');
const line3 = document.querySelector('.line3');
const link = document.querySelectorAll('.links a');

const toggle = () => {
    menuShow.classList.toggle('links-active')
    line2.classList.toggle('line2-active')
    line1.classList.toggle('line1-active')
    line3.classList.toggle('line3-active')
    link.forEach((linker, index) => {
        linker.classList.toggle('link-fade')
    })
}

link.forEach((linker) => {
    linker.addEventListener('click', toggle)
})

burger.addEventListener('click', toggle)