canvas = document.getElementById('myCanvas');

ctx = canvas.getContext("2d");

mars_pics_array = ["Mars 1 real pic.jpg" , "Mars 2.jpg" , "Mars 3.jpg" , "Mars 4.jpg"];
random_number = Math.floor(Math.random() *4);
console.log(random_number);


rover_width = 100;
rover_height = 90;

rover_X =10;
rover_Y =10;

background_img=mars_pics_array[random_number];
console.log("background_image =" +background_img);
rover_image="rover.png";




function add()
{
background_imgTag = new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src= background_img;

rover_imgTag = new Image();
rover_imgTag.onload=uploadRover;
rover_imgTag.src= rover_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag , 0, 0 , canvas.width ,canvas.height); 

}

function uploadRover(){

    ctx.drawImage(rover_imgTag ,rover_X ,rover_Y  , rover_width , rover_height);

    
}

window.addEventListener("keydown " , my_keydown);

function my_keydown(e){
keyPressed= e.keyCode;
console.log(keyPressed);
if(keyPressed =='38')
{
    up();
    console.log("up");

 
}
if(keyPressed =='40')
{
    down();
    console.log("down");

 
}

if(keyPressed =='37')
{
    left();
    console.log("left");

 
}

if(keyPressed =='39')
{
    right();
    console.log("right");

 
}
}


function up()
{
    if(rover_Y >=0)

{
 rover_Y=rover_Y - 10;
 console.log("When up arrow is pressed , X =" +rover_X + "Y = " +rover_Y );
 uploadBackground();
 uploadRover();
}
}

function down()
{
    if(rover_Y <=500)

{
 rover_Y=rover_Y + 10;
 console.log("When down arrow is pressed , X =" +rover_X + "Y = " +rover_Y );
 uploadBackground();
 uploadRover();
}
}

function left()
{
    if(rover_X >=0)

{
 rover_X=rover_X - 10;
 console.log("When left arrow is pressed , X =" +rover_X + "Y = " +rover_Y );
 uploadBackground();
 uploadRover();
}
}

function right()
{
    if(rover_X <=700)

{
 rover_X=rover_X + 10;
 console.log("When up arrow is pressed , X =" +rover_X + "Y = " +rover_Y );
 uploadBackground();
 uploadRover();
}
}
