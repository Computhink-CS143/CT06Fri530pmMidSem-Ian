let xpos = 50
let ypos = 50
function setup() {
    createCanvas(600, 400);
    background("gray")
    fill(0, 0, 0)
    circle(xpos, ypos, 50)
    xpos += 50
    ypos += 50
}

function draw() {
    for (let i = 1; count < 1; count++) { 
    circle(xpos+i*50, ypos+i*50, 50)
    }

}