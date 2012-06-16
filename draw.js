var canvas;
var ctx;
var x = 400;
var y = 200;
var mx = 2;
var my = 0;
var WIDTH = 620;
var HEIGHT = 800;

var a = 300;
var b = 200;


function init() {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  return setInterval(draw, 30);
}
init();


function square(x,y,s)
{
	ctx.beginPath();
	ctx.fillRect(x,y,s,s)
}

function draw() {
  //circle(x, y, 5);
  square(x, y, 5)
  square(a, b, 5)

  /*
  if (x + mx > WIDTH || x + mx < 0)
    mx = -mx;
  if (y + my > HEIGHT || y + my < 0)
    my = -my;
  */
  if (x + mx >= WIDTH )
  {
  	mx = 0;
  	my = 2;
  }
 
  if ( y + my >= HEIGHT)
  {
  	mx =0; 
  	my = 0;
  }
  a -= mx;
  b += my;

  x += mx;
  y += my;
 
}
