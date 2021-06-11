
let ball = document.querySelector(".y-2");
let ballwrap = document.querySelector(".y-1");
ballwrap.onmousemove = function (event) {
    let YEvent = event.clientY+202.5-(window.innerHeight/2)
        let xEvent = event.clientX+202.5-(window.innerWidth/2)
        let x = xEvent * 100 / ballwrap.clientWidth + "%";
        let y = YEvent * 100 / ballwrap.clientWidth + "%";

ball.style.cssText = "left:" + x + "; top:" + y + "; transform: translate(-" + x + ", -" + y + ");"  
}



// document.querySelector('.y-1').onmousemove = function (event) {
//     let x = event.x-202.5;
//     let y = event.y-202.5;
//     document.querySelector(".y-1").style.transform = "rotate(" + 57.2958 * arcctg(x, y) + "deg)";
// }


// function arcctg (x, y) {
//     if (x > 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
//     if (x < 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
//     if (x < 0 && y < 0) return Math.PI + Math.atan(y / x);
//     if (x > 0 && y < 0) return 3 * Math.PI / 2 + Math.abs(Math.atan(x / y));
// }




// let ball = document.querySelector('.ball');
// let mouseX = 0;
// let mouseY = 0; 

// let ballX = 1123;
// let ballY = 884; 

// let speed = 0.0005;


// function animate() {
//     let distX = mouseX - ballX;
//     let distY = mouseY - ballY;

//     ballX = ballX + (distX * speed);
//     ballY = ballY + (distY * speed);

//     if (ballX > 1432) ballX = 1432;
//     if (ballX < 823) ballX = 823;
//     if (ballY > 1184) ballY = 1184;
//     if (ballY < 584) ballY = 584;
    

//     ball.style.cssText = "left:" + (ballX-823) + "px; top:" + (ballY -584) + "px;"
//     requestAnimationFrame(animate);
// }



// document.querySelector('.wrap').addEventListener("mousemove", function(event){
//     mouseX = event.pageX;
//     mouseY = event.pageY;
//     animate();
// })

// const eye1 = document.querySelector('.ball');
// document.querySelector(".wrap").addEventListener('mousemove', (evt) => {
//     const x = -(window.innerWidth / 2 - evt.pageX) / 10;
//     const y = -(window.innerHeight / 2 - evt.pageY) / 10;
//     eye1.style.transform = `translateY(${y}px) translateX(${x}px)`;
// });  