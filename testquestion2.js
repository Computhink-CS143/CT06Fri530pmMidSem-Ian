let xpos = 50
let ypos = 50
function setup() {
    createCanvas(600, 600);
    background("gray")
   
}

function draw() {
    fill(colour, colour, colour)
    for (let i = 0; i < 10 ; i++) { 
        circle(xpos+i*50, ypos+i*50, 50);
        colour
    }

}