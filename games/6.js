let gameState = "waiting";
let randomTime = Math.round(Math.random() * 3);
let startTime = 0; // Tracks when the timer starts.

function setup() {
    createCanvas(400, 400); // Canvas size.
    resetGame(); // Initialize the game visuals.
}

function resetGame() {
    background("lightGray");
    drawTrafficLight("grey", "red"); // Reset to initial state.
    gameState = "waiting";
    randomTime = Math.round(Math.random() * 3); // Generate a new random time.
    startTime = 0; // Reset start time.
}

function drawTrafficLight(greenColor, redColor) {
    fill("black");
    rect(150, 100, 100, 250, 10); // Black traffic light body with rounded corners.
    
    fill(redColor);
    ellipse(200, 150, 80, 80); // Red light (top).

    fill(greenColor);
    ellipse(200, 300, 80, 80); // Green light (bottom).
}

function draw() {
    let myTime = round(millis() / 1000);

    if (gameState === "waiting" && myTime === randomTime) {
        gameState = "ready";
        startTime = millis(); // Record the time when the green light appears.
        drawTrafficLight("green", "grey"); // Turn green light on.
    }
}

function keyPressed() {
    if (gameState === "ready" && key === ' ') {
        let reactionTime = (millis() - startTime) / 1000; // Calculate reaction time immediately.
        gameState = "finished"; // Transition to finished state.
        background("lightGray");
        drawTrafficLight("green", "grey");
        fill("black");
        textSize(20); // Larger text for clarity.
        textAlign(CENTER);
        text("Reaction time:\n" + nf(reactionTime, 1, 2) + " seconds", width / 2, 50);
    } else if (key === 'r') {
        resetGame(); // Full game reset on 'r' press.
    }
}
