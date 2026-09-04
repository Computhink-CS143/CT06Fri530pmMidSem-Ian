let xpos = 50
let ypos = 50
let colour = 0
function setup() {
    createCanvas(600, 600);
    background("gray")
    for (let i = 0; i < 10 ; i++) { 
        fill(colour, 0, 0);
        circle(xpos+i*50, ypos+i*50, 50);
        colour += 30;
    }
}

function draw() {
    
    for (let i = 0; i < 10 ; i++) { 
        fill(colour, 0, 0);
        circle(xpos+i*50, ypos+i*50, 50);
        colour += 30;
    }

}