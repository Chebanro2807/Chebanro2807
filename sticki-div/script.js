
// document.querySelector(".oreder-cleaning").onmousemove = function (event) {
//     let x = event.x - 100;
//     let y = event.y - 100;
//     console.log (x + " " + y);
//     document.querySelector(".oreder-cleaning").style.transform = "rotate(" + 57.2958 * arcctg(x, y) + "deg)";
//     document.querySelector(".oreder-cleaning__text").setAttribute("style", "top:" + y + "px; left:" + x + "px;")
// }


// function arcctg (x, y) {
//     if (x > 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
//     if (x < 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
//     if (x > 0 && y < 0) return Math.PI - Math.atan(y / x);
//     if (x < 0 && y < 0) return 3 * Math.PI / 2 - Math.abs(Math.atan(x / y));
// }


let ball = document.querySelector('.ball');
let mouseX = 0;
let mouseY = 0; 

let ballX = 1123;
let ballY = 884; 

let speed = 0.0005;


function animate() {
    let distX = mouseX - ballX;
    let distY = mouseY - ballY;

    ballX = ballX + (distX * speed);
    ballY = ballY + (distY * speed);

    if (ballX > 1432) ballX = 1432;
    if (ballX < 823) ballX = 823;
    if (ballY > 1184) ballY = 1184;
    if (ballY < 584) ballY = 584;
    

    ball.style.cssText = "left:" + (ballX-823) + "px; top:" + (ballY -584) + "px;"
    requestAnimationFrame(animate);
}



document.querySelector('.wrap').addEventListener("mousemove", function(event){
    mouseX = event.pageX;
    mouseY = event.pageY;
    animate();
})