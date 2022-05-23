const $$ = document.querySelectorAll.bind(document)
const $ = document.querySelector.bind(document)

const listImg = $$('.img-img')
const over = $(".over")
const close = $('.close')
const imgOver = $('.over-inner__img')
const next = $('.right')
const prev = $('.left')
var currentIndex = 0;
var listImgLength = listImg.length
var audio = $('.audio')
listImg.forEach((img, index) => {
    img.onclick = function(e) {
        currentIndex = index
        over.classList.add('show')
        imgOver.src = listImg[currentIndex].src
        if (currentIndex == 0) {
            prev.classList.add('hidden')
            next.classList.remove('hidden')

        } else if (currentIndex == listImg.length - 1) {
            prev.classList.remove('hidden')
            next.classList.add('hidden')

        } else {

            prev.classList.remove('hidden')
            next.classList.remove('hidden')
        }
        audio.play()
            // if (audio.pause()) {

        //     audio.load()
        // }


    }

    next.onclick = function() {
        currentIndex++
        prev.classList.remove('hidden')

        if (currentIndex >= listImg.length) {
            currentIndex = 0
            next.classList.remove('hidden')
        } else if (currentIndex >= listImg.length - 1) {
            next.classList.add('hidden')

        }
        imgOver.src = listImg[currentIndex].src
    }
    prev.onclick = function() {
        currentIndex--
        next.classList.remove('hidden')
        if (currentIndex <= 0) {
            prev.classList.add('hidden')
        }
        imgOver.src = listImg[currentIndex].src



    }

})
var imgAuto = function() {
    currentIndex++
    if (currentIndex >= listImg.length) {
        currentIndex = 0
    }
    imgOver.src = listImg[currentIndex].src
}
setInterval(imgAuto, 2000)

close.onclick = function() {
    over.classList.remove('show')
    audio.pause()
}