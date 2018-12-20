const canvas = document.getElementById('canvas'); //Canvas by itself is just something to draw on. In JS we need a "context," which is like a paintbrush
let context = canvas.getContext('2d');

//.rect() takes 4 args: Upper X, Upper Y, Lower X, Lower Y
context.rect(100,100,300,300);
context.stroke();

// Make a line
context.moveTo(100,100);
context.lineTo(400,400);
context.lineTo(100,400);
context.lineTo(400,100);
context.stroke();
// Make a circle
context.beginPath();
context.arc(100,75,50,0,2* Math.PI);
context.fillStyle = "#a434b4";
context.fill();