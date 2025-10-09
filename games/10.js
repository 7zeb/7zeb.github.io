//global variables
let askBackground;
let askSnowman;
let backgroundButton;
let snowmanButton;
let backgroundVal;
let snowmanVal = "white";
let askSnowmanTwo;
let snowmanButtonTwo;
let snowmanValTwo = "white";

function setup() {
    //setting up stuff
    createCanvas(400,400);
    background("lightgray");
    
    //making the input fields.
    askBackground = createInput();
    askSnowman = createInput();
    askBackground.position(50,40)
    askSnowman.position(50,70);
    askSnowmanTwo = createInput();
    askSnowmanTwo.position(50,100);
    
    //the background button
    backgroundButton = createButton("Change Background");
    backgroundButton.style("background-color", "darkRed");
    backgroundButton.style("color","white");
    backgroundButton.position(220,40)
    backgroundButton.mousePressed(backgroundChanger);
    
    //the snowman button
    snowmanButton = createButton("Change Snowman 1")
    snowmanButton.style("background-color", "blue");
    snowmanButton.style("color", "white");
    snowmanButton.position(220,70);
    snowmanButton.mousePressed(snowmanChanger)
    
    //the 2nd snowman button
    snowmanButtonTwo = createButton("Change Snowman 2");
    snowmanButtonTwo.style("background-color", "lime");
    snowmanButtonTwo.style("color","white");
    snowmanButtonTwo.position(220,100);
    snowmanButtonTwo.mousePressed(snowmanChangerTwo)
    
    
    //calling the snowman
    snowman("white")
    snowmanTwo("white");
}


function backgroundChanger() {
    //this makes the background actually change.
    backgroundVal = askBackground.value();
    
    background(backgroundVal);
    snowman(snowmanVal);
    snowmanTwo(snowmanValTwo)
}

function snowman(color) {
    //creating the snowman
    fill(color);
    circle(80,190,40); //the smallest circle
    circle(80,240,70); //the 2nd biggest circle
    circle(80,320,100); //biggest circle
    
}

function snowmanTwo(color) {
    //creating the snowman
    fill(color);
    circle(280,190,40); //the smallest circle
    circle(280,240,70); //the 2nd biggest circle
    circle(280,320,100); //biggest circle
    
}

function snowmanChanger() {
    //this will make the snowman change color
    snowmanVal = askSnowman.value();
    
    
    snowman(snowmanVal)
}

function snowmanChangerTwo() {
    //this will make the 2nd snowman change color
    snowmanValTwo = askSnowmanTwo.value();
    
    snowmanTwo(snowmanValTwo)
}
