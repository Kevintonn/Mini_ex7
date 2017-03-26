var mSlider
var sVal


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    mSlider = createSlider(0, 190, 0);
    mSlider.position(window.innerWidth/2-100, window.innerHeight/2+100);
    mSlider.style('width', '200px');

}

function draw() {
    var val = mSlider.value();
    background (255);
    stroke(0);
    noFill();
    ellipse(window.innerWidth/2, window.innerHeight/2-100, 0+val, 0+val);
    ellipse(window.innerWidth/2, window.innerHeight/2-100, -40+val, -40+val);
    ellipse(window.innerWidth/2, window.innerHeight/2-100, -80+val, -80+val);
    ellipse(window.innerWidth/2, window.innerHeight/2-100, -120+val, -120+val);
    ellipse(window.innerWidth/2, window.innerHeight/2-100, -160+val, -160+val);
    ellipse(window.innerWidth/2, window.innerHeight/2-100, -200+val, -200+val);
  
}