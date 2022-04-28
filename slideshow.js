let i = 0;
let images = [];
const time = 2500;

//image list
const img = document.querySelector(".bgimg-1");

images.push(
  "https://boutiquestoredesign.com/wp-content/uploads/2018/09/fashion-retail-womens-clothing-stores-design-ideas-layout-6.jpg"
);
images.push(
  "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
);
images.push(
  "https://res.cloudinary.com/simpleview/image/upload/c_fill,w_840,h_400,q_auto:eco,f_auto,g_auto/crm/charleston/JordanLash110-c8b42aa15056a36_c8b42bed-5056-a36a-0684b396acf3ca59.jpg"
);
function changeImg() {
  img.style.backgroundImage = `url('${images[i]}')`;
  i = i < images.length - 1 ? i + 1 : 0;
  setTimeout("changeImg()", time);
}
window.onload = changeImg;
