var imgsList = Array.from(document.getElementsByClassName("img-item"));
var lightBox = document.querySelector(".lightbox")
var lightImg = document.querySelector(".light-img")
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");
var currentIndex;
for (var i = 0; i < imgsList.length; i++) {
    imgsList[i].addEventListener("click", function (e) {
        lightBox.classList.replace("d-none", "d-flex");
        var src = e.target.getAttribute("src");
        currentIndex = imgsList.indexOf(e.target)
        lightImg.src = src;

    })
}
function slide(i) {
    currentIndex += i;
    if (currentIndex == imgsList.length) {
        currentIndex = 0;
    }
    if (currentIndex < 0) {
        currentIndex = imgsList.length - 1;
    }
    var nextSrc = imgsList[currentIndex].getAttribute("src");
    lightImg.src = nextSrc;
}
nextBtn.addEventListener("click", function () {
    slide(1)
});
prevBtn.addEventListener("click", function () {
    slide(-1)
});
function close() {
    lightBox.classList.replace("d-flex", "d-none");
}
closeBtn.addEventListener("click", close);
document.addEventListener("keydown", function (e) {
    if (e.key == "ArrowRight") {
        slide(1);
    }
    else if (e.key == "ArrowLeft") {
        slide(-1);
    }
    else if (e.key == "Escape") {
        close();
    }

})
// function prevSlide() {
//     currentIndex--;
//     if(currentIndex<0){
//         currentIndex=imgsList.length-1;
//     }
//     var nextSrc = imgsList[currentIndex].getAttribute("src");
//     lightImg.src = nextSrc;
// }
// prev.addEventListener("click",prevSlide);