const downloadbtn = document.querySelector("#downloadbtn");

downloadbtn.addEventListener("click", () => download());
function download() {
  const imgLink = document.createElement("a");
  const canvas = document.querySelector("#canvas");
  imgLink.download = "image1.png";
  imgLink.href = canvas.toDataURL("image/png", 1);
  imgLink.click();
}
