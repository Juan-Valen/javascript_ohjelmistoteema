// Open t7 folder in your IDE/editor. Make a hover effect with JavaScript. (2p)

//     when user mouses over <p id="trigger"> change the picture of <img id="target"> form picA.jpg to picB.jpg
//     when user mouses off, change the picture back to original


const target = document.getElementById("target")
const trigger = document.getElementById("trigger")
function changeImage(inside, evt) {
    if (inside) {
    } else {
    }
}

trigger.addEventListener("mouseover", function (evt) {
    target.setAttribute("src", "img/picB.jpg")
})
trigger.addEventListener("mouseleave", function (evt) {
    target.setAttribute("src", "img/picA.jpg")
});



