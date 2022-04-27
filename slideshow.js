let i = 0;
let images = [];
const time = 2500;

//image list
const img = document.querySelector(".bgimg-1");

images.push("./img/background-1.png");
images.push("./img/background-2.jpg");

function changeImg() {
  img.style.backgroundImage = `url('${images[i]}')`;
  i = i < images.length - 1 ? i + 1 : 0;
  setTimeout("changeImg()", time);
}
window.onload = changeImg;
