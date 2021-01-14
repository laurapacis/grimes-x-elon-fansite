//* set up the canvas
const canvas = document.querySelector('canvas')

// make the canvas cover the entire screen + multiply by 2 to set up for retina as well
canvas.width = window.innerWidth * 2
canvas.height = window.innerHeight * 2

// canvas is really big so we change the CSS style to be able to fit it exactly in the window + we need a unit for the CSS so we add 'px'
canvas.style.width = window.innerWidth + 'px'
canvas.style.height = window.innerHeight + 'px'

// create context to draw in two-dimensions
const context = canvas.getContext('2d')

// define scale based on retina, which is double the pixel density
context.scale(2, 2)
//* end set up canvas

// change color of the background with a click
canvas.addEventListener("click", function () {
    const curColor = document.body.style.backgroundColor;
    if (curColor === 'orangered' || curColor === "") {
        document.body.style.backgroundColor = "palegreen";
        }
    else {
        document.body.style.backgroundColor = "orangered";
    }
    // document.body.style.backgroundColor = curColour === 'orangered' ? 'palegreen' : 'orangered';
});


let aimX = null
let aimY = null
let currentX = null
let currentY = null

// set up images
let i = 0
const images = ['/grimes-x-elon-fansite/images/grimes.png', '/grimes-x-elon-fansite/images/elon.png'].map(src => {
    const image = document.createElement('img')
    image.src = src
    return image
})

// show images when mousemove
document.addEventListener('mousemove', function (event) {
    aimX = event.pageX
    aimY = event.pageY
    if (currentX === null) {
        currentX = event.pageX
        currentY = event.pageY
    }
})

// change image with click
canvas.addEventListener('click', function () {
    i = i + 1
    if (i >= images.length) {
        i = 0
    }
})

// // for mobile 
// canvas.addEventListener('touchmove', function (event) {
//   event.preventDefault();
//   aimX = event.pageX
//   aimY = event.pageY
//   if (currentX === null) {
//     currentX = event.pageX
//     currentY = event.pageY
//   }
// })

// // start drawing
// const draw = function () {
//     if (currentX) {
//         if (image.complete) {
//             let x = window.innerWidth > 800 ? 100 : 50;
//             let y = window.innerWidth > 800 ? 150 : 75;
//             context.drawImage(image, currentX - 100, currentY - 100, x, y)
//         }
//         currentX = currentX + (aimX - currentX) * 0.10;
//         currentY = currentY + (aimY - currentY) * 0.10;
//     }
//     requestAnimationFrame(draw)
// }
    
// start drawing
const draw = function () {
    if (currentX) {
        if (images[i].complete) {
        context.drawImage(images[i], currentX - 50, currentY - 50, 100, 150)
        }
        currentX = currentX + (aimX - currentX) * 0.10
        currentY = currentY + (aimY - currentY) * 0.10
    }

    requestAnimationFrame(draw)
}
draw()