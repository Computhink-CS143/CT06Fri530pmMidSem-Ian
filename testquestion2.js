let xpos = 50
let ypos = 50
function setup() {
    createCanvas(600, 400);
    background("gray")
   
}

function draw() {
    for (let i = 0; i < 10 ; i++) { 
        circle(xpos+i*50, ypos+i*50, 50);
    }

}