var sketch = function( p ) {

  var gray = 0; 

  p.setup = function() {
    p.createCanvas(400, 400);
  };

  p.draw = function() {
    p.background(gray);
    p.rect(p.width/2, p.height/2, 50, 50);
  }

  p.mousePressed = function() {
    gray += 10;
  }
  
};
  var myp5 = new p5(sketch, 'canvass');
  myp5.parent('canvass');
/*
       
function setup() {   
  var theCanvas = createCanvas(600, 400);
  $(document).ready( function {
  var canvasdiv = document.getElementById('canvass');
  });
  theCanvas.parent(canvasdiv);
}
function draw() 
{
  if (mouseIsPressed) {
    fill(0);
  } 
  else 
  {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

*/
/*
function setup() {  
  createCanvas(600, 400);

  
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}*/