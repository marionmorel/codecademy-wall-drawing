// TODO: Create setup() function
function setup() {
    
  // Inside the setup() function:
  // TODO: Create canvas 500px wide and 500px high
  createCanvas(500, 500);

  // TODO: Draw horizontal and vertical guidelines
  line(250, 0, 250, 500);
  line(0, 250, 500, 250);
}

// TODO: Create wall drawing inside draw() function
function draw() {

  // Inside the draw() function:
  // Draw parallel lines:
  // TODO: Set stroke color and weight
 stroke(127);
 strokeWeight(10);

  // TODO: Use a for loop to draw 10 vertical lines
  for (let posX = 0; posX < 10; posX++) {
    line(posX * 25, 0, posX * 25, 250);
  }


  // Draw polka dots:
  // TODO: Set no stroke and fill color
  fill('#ffd700');
  noStroke();

  // TODO: Use nested for loops to draw a grid of circles
  // TODO: Offset y positions of every other column by 10 pixels
  for (posX = 0; posX < 10; posX++) {
    for (posY = 0; posY < 10; posY++) {
        if (posX % 2 === 0) {
            circle(250 + posX * 25, posY * 25 + 10 , 10);
        } else {
        circle(250 + posX * 25, posY * 25, 10);
        }
    }
  }


  // Draw checkered squares:
  // TODO: Set fill color
  fill('red');

  // TODO: Use nested for loops to draw rows of squares
  // TODO: Offset y positions of every other column by 25 pixels
  for (posX = 0; posX < 10; posX++) {
    for (posY = 0; posY < 5; posY++) {
        if (posX % 2 === 0) {
            square(posX * 25, 250 + posY * 50 + 25, 25)
        } else {
            square(posX * 25, 250 + posY * 50, 25)
        }
    }
  }

  
  // Draw parallel diagonal lines:
  // TODO: Set stroke color and weight


  // TODO: Use a for loop to draw diagonal lines



  // Draw borders:
  // TODO: Set stroke color


  // TODO: Draw horizontal and vertical guidelines


  // TODO: Draw borders around canvas

}
