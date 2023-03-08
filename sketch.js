let texto1="Este es un ejemplo del texto que se puede agregar por medio de P5.js. Este puede contener diferentes líneas y puede ubicarse en el sepacio según la necesidad.Este es un ejemplo del texto que se puede agregar por medio de P5.js. Este puede contener diferentes líneas y puede ubicarse en el sepacio según la necesidad.";

let direccion1;

let imagen1;

let video1;

function preload(){
   direccion1=createA('https://www.youtube.com/watch?v=qtPi0JvmWbs','https://www.youtube.com/watch?v=qtPi0JvmWbs', 'visita una URL' );
  
  imagen1=loadImage("https://raw.githubusercontent.com/jjcadavid/pruebasP5/main/ceramica19.png");
  
  video1=createVideo(["video01.webm","video01.mp4"]);
  //video1.hide();
  video1.size(800,800);
}

function setup() {
  createCanvas(1000, 2000);
  
  //direccion1=createA('https://musiclab.chromeexperiments.com/Song-Maker', 'visita una URL' );
  video1.show();
 
}

function draw() {
  background(220);
  textSize(32);
  text(texto1,100,100,800,400);
  direccion1.position(100,380);
  image(imagen1,100,410,200,300);
  
  video1.position(0,800);
 // video1.show();

}

function mousePressed(){
    video1.play(); 
    video1.loop();
  window.open('https://www.youtube.com/watch?v=Q07CTj4fUeY&ab_channel=SmarterEveryDay');
}
