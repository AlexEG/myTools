const downloadbtn = document.querySelector("#downloadbtn");

downloadbtn.addEventListener("click", () => download());
function download() {
  const imgLink = document.createElement("a");
  const canvas = document.querySelector("#canvasTV");
  imgLink.download = "Banner.png";
  imgLink.href = canvas.toDataURL("image/png", 1);
  imgLink.click();
}
