function setup() {
    createCanvas(400,400);
    background(21, 87, 194); //to see how big canvas is.
}

var sunX = 20;
var size = 50;

function draw() {
    background(21, 87, 194);
    sun(sunX,40,size);
    
    if (sunX >= 400) {
        sunX = 20;
    }
    
    increaseButton();
    decreaseButton();
}


function sun(x,y,size) {
    fill(224, 206, size);
    circle(x,y,size);
    sunX += 2;
    // console.log(mouseX,",",mouseY," is your cords");
}

function mousePressed() {
    
    if (mouseX > 152 && mouseY > 142 && mouseX < 249 && mouseY < 197) {
        sun(sunX,30,size);
        size += 2;
    }
    
    if (mouseX > 152 && mouseY > 227 && mouseX < 247 && mouseY < 272) {
        sun(sunX,30,size);
        size -= 2;
    }
}


//challange: change the size of the sun when we click on the button.
function increaseButton() {
    fill(130, 11, 227); //color for the button
    rect(150,150,100,50);
    fill(114, 10, 199);
    rect(150,140,100,50);
}

function decreaseButton() {
    fill(14, 237, 159); //color for decrease button
    rect(150,220,100,50);
    fill(10, 201, 134);
    rect(150,230,100,50);
}
