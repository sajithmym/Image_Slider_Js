let previous = () => {
    if (num == 0)
        num = img.length
    num-=1
    Photo.src = img[num]
}

let play = (i) => {
    console.log(playing.innerHTML);
    if (autoplay){
        clearInterval(autoplay)
        autoplay = null
        playing.innerHTML = `<i class="fa-solid fa-play"></i>`
    }else{
        autoplay = setInterval(() => {
            next()
        },500)
        playing.innerHTML = `<i class="fa-solid fa-pause"></i>`
    }
}

let next = () => {
    if (num == img.length-1)
        num = -1
    num+=1
    Photo.src = img[num]
}

let img = [
    "untitled.png",
    "Tower.jpg",
    "Super Man.jpg",
    "soider man.jpg",
    "Flash.jpg",
    "Wallpaper 327.jpg",
    "Batman.jpg",
    "Batman s.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg"
]

let num = 0
let autoplay
let Photo = document.querySelector(".img-fluid")
let playing = document.getElementById("ok")
