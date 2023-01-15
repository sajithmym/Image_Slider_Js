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
    "Pic/untitled.png",
    "Pic/Tower.jpg",
    "Pic/Super Man.jpg",
    "Pic/soider man.jpg",
    "Pic/Flash.jpg",
    "Pic/Wallpaper 327.jpg",
    "Pic/Batman.jpg",
    "Pic/Batman s.jpg",
    "Pic/1.jpg",
    "Pic/2.jpg",
    "Pic/3.jpg",
    "Pic/4.jpg",
    "Pic/5.jpg",
    "Pic/6.jpg",
    "Pic/7.jpg",
    "Pic/8.jpg",
    "Pic/9.jpg"
]

let num = 0
let autoplay
let Photo = document.querySelector(".img-fluid")
let playing = document.getElementById("ok")
