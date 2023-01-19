const body = document.querySelector("body");
const navBar = document.querySelector(".navBar");
const logo = document.querySelector(".logo");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancleBtn = document.querySelector(".cancle-btn");

menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    body.classList.add("disabledScroll");
}
cancleBtn.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    body.classList.remove("disabledScroll");
}

window.onscroll = () => {
    this.scrollY > 20 ? navBar.classList.add("sticky") : navBar.classList.remove("sticky");

    this.scrollY > 20 ? navBar.classList.add("guru") : navBar.classList.remove("guru");
}

// Video Player
const VideoPlayer = document.querySelector(".video-player");
const myVideo = document.querySelector(".my-video");

function stopeVideo() {
    VideoPlayer.style.display = "none";
}

function playVideo(file) {
    myVideo.src = file;
    VideoPlayer.style.display = "block";
}

// Preloader strats
const loader = document.getElementById("Preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
});
// Preloader ends