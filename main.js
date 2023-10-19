var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")

var mouseEvent = "empty"
var lastPositionX, lastPositionY
color = "black"
widthline = 1
var width = screen.Width
novalargura = screen.width - 70;
novaaltura = screen.height - 300;

if (width < 992) {
  document.getElementById("myCanvas").width = novalargura  
  document.getElementById("myCanvas").height = novaaltura
  document.body.style.overflow = "hidden"
}

canvas.addEventListener("mousedown", mymousedown)
function mymousedown(e) {
    mouseEvent = "mousedown"
}

canvas.addEventListener("mouseup", mymouseup)
function mymouseup(e) {
    mouseEvent = "mouseup"
}
canvas.addEventListener("mouseleave", mymouseleave)
function mymouseleave(e) {
    mouseEvent = "mouseleave"
}
canvas.addEventListener("mousemove", mymousemove)
function mymousemove(e) {
    positionMouseX = e.clientX - canvas.offsetLeft
    positionMouseY = e.clientY - canvas.offsetTop
    if (mouseEvent == "mousedown") {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = widthline
        ctx.moveTo(lastPositionX, lastPositionY)
        ctx.lineTo(positionMouseX, positionMouseY)
        ctx.stroke()
    }
    lastPositionX = positionMouseX
    lastPositionY = positionMouseY
}
canvas.addEventListener("touchstart", myTouchStart)
function myTouchStart(e){
    lastPositionTouchX = e.touches[0].clientX - canvas.offsetLeft
    lastPositionTouchY = e.touches[0].clientY - canvas.offsetTop
}

canvas.addEventListener("touchmove", myTouchMove)
function myTouchMove(e){
    currentPositionTouchX = e.touches[0].clientX - canvas.offsetLeft
    currentPositionTouchY = e.touches[0].clientY - canvas.offsetTop
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = widthline
    ctx.moveTo(lastPositionTouchX, lastPositionTouchY)
    ctx.lineTo(currentPositionTouchX, currentPositionTouchY)
    ctx.stroke()
    lastPositionTouchX = currentPositionTouchX
    lastPositionTouchY = currentPositionTouchY
}