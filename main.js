var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

var car1_width = 120;
var car1_height = 70;
var car1_image = "car1.png";
var car1_x = 10;
var car1_y = 10;

var car2_width = 120;
var car2_height = 70;
var car2_image = "car2.png";
var car2_x = 10;
var car2_y = 100;

 var background_image = "racing.jpg";

function add() {
    background_imgTag = new Image(); //defining a new variable with a new image
    background_imgTag.onload = uploadBackground; //setting a function, onloading this variable
    background_imgTag.src = background_image;   // load image

    car1_imgTag = new Image(); //defining a new variable with a new image
    car1_imgTag.onload = uploadCar1; //setting a function, onloading this variable
    car1_imgTag.src = car1_image; // load image

    car2_imgTag = new Image(); //defining a new variable with a new image
    car2_imgTag.onload = uploadCar2; //setting a function, onloading this variable
    car2_imgTag.src = car2_image; // load image
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38')
    {
        car1_up();
        console.log("up arrow key");
    }

    if(keyPressed == '40')
    {
        car1_down();
        console.log("down arrow key");
    }

    if(keyPressed == '37')
    {
        car1_left();
        console.log("left arrow key");
    }

    if(keyPressed == '39')
    {
        car1_right();
        console.log("right arrow key");
    }

    if(keyPressed == '87')
    {
        car2_up();
        console.log("key w");
    }

    if(keyPressed == '65')
    {
        car2_down();
        console.log("key a");
    }

    if(keyPressed == '83')
    {
        car2_left();
        console.log("key s");
    }
    
    if(keyPressed == '68')
    {
        car2_right();
        console.log("key d");
    }
}

