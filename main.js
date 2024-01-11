// square

var sq = document.getElementById("square").getContext("2d");

sq.fillStyle = "red";
sq.rect(50, 50, 200, 200);
sq.fill();

// rectangle

var rc = document.getElementById("rectangle").getContext("2d");

rc.fillStyle = "blue";
rc.rect(50, 100, 200, 100);
rc.fill();

// circle

var cir = document.getElementById("circle").getContext("2d");

cir.fillStyle = "green";
cir.arc(150, 150, 100, 0, 2 * Math.PI);
cir.fill();

// triangle

var tri = document.getElementById("triangle").getContext("2d");

tri.fillStyle = "purple";
tri.beginPath();
tri.moveTo(150, 50);
tri.lineTo(50, 250);
tri.lineTo(250, 250);
tri.fill();// square

var sq = document.getElementById("square").getContext("2d");

sq.fillStyle = "red";
sq.rect(50, 50, 200, 200);
sq.fill();

// rectangle

var rc = document.getElementById("rectangle").getContext("2d");

rc.fillStyle = "blue";
rc.rect(50, 100, 200, 100);
rc.fill();

// circle

var cir = document.getElementById("circle").getContext("2d");

cir.fillStyle = "green";
cir.arc(150, 150, 100, 0, 2 * Math.PI);
cir.fill();

// triangle

var tri = document.getElementById("triangle").getContext("2d");

tri.fillStyle = "purple";
tri.beginPath();
tri.moveTo(150, 50);
tri.lineTo(50, 250);
tri.lineTo(250, 250);
tri.fill();

var Thun = document.getElementById("thunder").getContext("2d");

Thun.fillStyle = '#f00';
Thun.beginPath();
Thun.moveTo(0, 0);
Thun.lineTo(100,50);
Thun.lineTo(50, 100);
Thun.lineTo(250, 250);
Thun.fill();
 
var Hr = document.getElementById("heart").getContext("2d");
 
Hr.beginPath();
Hr.moveTo(75, 40);
Hr.bezierCurveTo(75, 37, 70, 25, 50, 25);
Hr.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
Hr.bezierCurveTo(20, 80, 40, 102, 75, 120);
Hr.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
Hr.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
Hr.bezierCurveTo(85, 25, 75, 37, 75, 40);
Hr.fill();

var Ln = document.getElementById("line").getContext("2d");
 
    Ln.beginPath();
    Ln.moveTo(0, 0);
    Ln.lineTo(200, 200);
    Ln.strokeStyle = 'purple';
    Ln.lineWidth = 5;
    Ln.stroke();
 
var Hex = document.getElementById("hexagon").getContext("2d");
     
    Hex.beginPath();
    var sides = 6; 
    var centerX = 100;
    var centerY = 100;
    var radius = 80;
    for (let i = 0; i < sides; i++) {
        var  angle = (i / sides) * Math.PI * 2;
        var  x = centerX + radius * Math.cos(angle);
        var  y = centerY + radius * Math.sin(angle);
      if (i === 0) {
        Hex.moveTo(x, y);
      } else {
        Hex.lineTo(x, y);
      }
    }
    Hex.closePath();
    Hex.fillStyle = 'yellow';
    Hex.fill();
    
    var St = document.getElementById("star").getContext("2d");
    
    St.beginPath();
    var numberOfPoints = 5;
    var outerRadius = 100;
    var innerRadius = 50;
    for (let i = 0; i < numberOfPoints * 2; i++) {
        var radius = i % 2 === 0 ? outerRadius : innerRadius;
        var angle = (i / numberOfPoints) * Math.PI;
        var x = 150 + radius * Math.cos(angle - Math.PI / 2);
        var y = 150 + radius * Math.sin(angle - Math.PI / 2);
      if (i === 0) {
        St.moveTo(x, y);
      } else {
        St.lineTo(x, y);
      }
    }
    St.closePath();
    St.fillStyle = 'purple';
    St.fill();

    var Ob= document.getElementById("oblong").getContext("2d");

    Ob.beginPath();
    Ob.ellipse(100, 100, 100, 30, 0, 0, Math.PI * 2);
    Ob.fillStyle = 'orange';
    Ob.fill();
   
    var Tr= document.getElementById("triangular").getContext("2d");

    Tr.beginPath();
    Tr.moveTo(20,20);
    Tr.lineTo(100,20);
    Tr.lineTo(175,100);
    Tr.lineTo(20,100);
    Tr.lineTo(20,20);
    Tr.stroke();

    var Sp= document.getElementById("spiral").getContext("2d");

    Sp.beginPath();
      var x = 150;
      var y = 150;
      var laps = 5; // Number of laps for the spiral
      var segmentsPerLap = 360; // Number of segments per lap
      var startRadius = 5;
      var endRadius = 150;
      var radiusIncrement = (endRadius - startRadius) / (laps * segmentsPerLap);
    for (let i = 0; i < laps * segmentsPerLap; i++) {
        var radius = startRadius + i * radiusIncrement;
        var angle = (i / segmentsPerLap) * 2 * Math.PI;
        var x = centerX + radius * Math.cos(angle);
        var y = centerY + radius * Math.sin(angle);
      if (i === 0) {
        Sp.moveTo(x, y);
      } else {
        Sp.lineTo(x, y);
      }
    }
    Sp.strokeStyle = 'green';
    Sp.lineWidth = 2;
    Sp.stroke();