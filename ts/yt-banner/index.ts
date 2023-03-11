console.log(
  "%c=> frist code [YT Banner] 2023-3-7 11:48 pm <=",
  "color:#f00055;font-size:1.4rem"
);
// ------------------------------------------ //

let canvasPC: any = document.querySelector("#canvasPC");
const ctx = canvasPC.getContext("2d");
//-------
ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, canvasPC.width, canvasPC.height);
//-------
//
//

//  linear Gradient 1  //
let color1 = "#44004499";
let color2 = "#00000000";
let gradient = ctx.createLinearGradient(0, 0, 0, canvasPC.height / 4);

gradient.addColorStop(0, color1);
gradient.addColorStop(1, color2);
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvasPC.width, canvasPC.height / 4);

// linear Gradient 2  //
let color1b = "#00000000";
let color2b = "#44004499";
let gradientb = ctx.createLinearGradient(
  0,
  canvasPC.height - canvasPC.height / 4,
  0,
  canvasPC.height
);

gradientb.addColorStop(0, color1b);
gradientb.addColorStop(1, color2b);
ctx.fillStyle = gradientb;
ctx.fillRect(
  0,
  canvasPC.height - canvasPC.height / 4,
  canvasPC.width,
  canvasPC.height / 4
);

// ICONS
let imgage: any = document.querySelector("#alexImg");
ctx.drawImage(
  imgage,
  canvasPC.width / 2 - imgage.width / 2,
  canvasPC.height / 4,
  170,
  170
);

let THMlogo: any = document.querySelector("#THMlogo");
ctx.drawImage(
  THMlogo,
  canvasPC.width / 2 - imgage.width / 2 - 200,
  canvasPC.height / 2 - 50,
  140,
  80
);

let HTB: any = document.querySelector("#htb");
ctx.drawImage(
  HTB,
  canvasPC.width / 2 - imgage.width / 2 - 320,
  canvasPC.height / 2 - 50,
  80,
  80
);

let cssbattel: any = document.querySelector("#cssbattel");
ctx.drawImage(
  cssbattel,
  canvasPC.width / 2 - imgage.width / 2 + 250,
  canvasPC.height / 2 - 50,
  80,
  80
);

let codewarLogo: any = document.querySelector("#codewar");
ctx.drawImage(
  codewarLogo,
  canvasPC.width / 2 - imgage.width / 2 + 370,
  canvasPC.height / 2 - 50,
  80,
  80
);
// /////////////////////
// /////////////////////
// /////////////////////

//  CANVAS TV main banner
let canvasTV: any = document.querySelector("#canvasTV");
const ctxTV = canvasTV.getContext("2d");
//-------
ctxTV.fillStyle = "#0f0f0f";
ctxTV.fillRect(0, 0, canvasTV.width, canvasTV.height);
//-------
//
//

// drawImage

let imgageTV = document.querySelector("#canvasPC");

ctxTV.drawImage(
  imgageTV,
  0,
  canvasTV.height / 2 - canvasPC.height / 2,
  canvasTV.width,
  canvasPC.height
);
// /////////////////////
