console.log(
  "%c=> frist code [YT Banner] 2023-3-7 11:48 pm <=",
  "color:#f00055;font-size:1.4rem"
);
// ------------------------------------------ //

let myCanvas: any = document.querySelector("#canvas");
const ctx = myCanvas.getContext("2d");

let color1 = "#55009950";
// let color2 = "#00000000";
let color2 = "#000000";
// linear Gradient1
let gradient = ctx.createLinearGradient(
  0,
  -myCanvas.height,
  0,
  myCanvas.height / 2
);
gradient.addColorStop(0, color1);
gradient.addColorStop(1, color2);

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, myCanvas.width, myCanvas.height / 2);

// linear Gradient2

gradient = ctx.createLinearGradient(
  0,
  myCanvas.height / 2,
  0,
  myCanvas.height * 2
);
gradient.addColorStop(0, color2);
gradient.addColorStop(1, color1);

ctx.fillStyle = gradient;
ctx.fillRect(0, myCanvas.width / 2, myCanvas.width, myCanvas.height / 2);

// /////////////////////

// drawImage
let imgage = document.querySelector("#alexImg");
ctx.drawImage(
  imgage,
  myCanvas.width / 4,
  myCanvas.height / 4,
  myCanvas.width / 2,
  myCanvas.width / 2
);
// /////////////////////
