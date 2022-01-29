document.addEventListener('click', changeImg)

function changeImg(event) {
    if (!event.target.dataset.img) return;
    console.log(event.target.dataset.img)
    let numbImg = event.target.dataset.img;
    console.log(document.querySelector('.mainImg').firstElementChild.src)
    let mainImgSrc = document.querySelector('.mainImg').firstElementChild.src;
    let str = mainImgSrc.replace(/\d/gi, numbImg)
    document.querySelector('.mainImg').firstElementChild.src = str
    console.log(str)
}