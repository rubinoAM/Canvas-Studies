const canvas = document.getElementById('canvas'); //Canvas by itself is just something to draw on. In JS we need a "context," which is like a paintbrush
let context = canvas.getContext('2d');

//.rect() takes 4 args: Upper X, Upper Y, Lower X, Lower Y
context.rect(100,100,300,300);
context.strokeStyle = "#ff0";
context.lineWidth = 10;
context.stroke();
context.fillStyle = "#c250ee";
context.fill();

// Make a line
context.moveTo(100,100);
context.lineTo(400,400);
context.lineTo(100,400);
context.lineTo(400,100);
context.lineWidth = 1;
context.stroke();

// Make a circle
context.beginPath();
context.arc(250,250,50,0,2 * Math.PI); // X Coord for Center, Y Coord for Center, Radius in Pixels, Place to Start (0 = 3:00), Place to End (Every 90° = PI/2) (OPTIONAL: Boolean for Counterclockwise)
context.fillStyle = "#a434b4";
context.fill();
context.strokeStyle = "#ff0";
context.lineWidth = 5;
context.stroke();

// Constructor (Code in JS for a class)
function Ball(x,y,r){
    // Inside a constructor, we get the keyword: "this"
    this.x = x;
    this.y = y;
    // sr = Starting Radians | er = Ending Radians
    this.sr = 0;
    this.er = Math.PI * 2;

    this.r = r;
    context.beginPath();
    context.arc(this.x,this.y,this.r,this.sr,this.er);
    context.fill();
}

aBall = new Ball(112,250,80);
anotherBall = new Ball(400,400,22);