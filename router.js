function trimUrl(path) {
  window.history.replaceState({}, "", "/" + path);
  return;
}
function show(...componentsToBeShown) {
  for (const key in paths) {
    if (componentsToBeShown.includes(key)) {
      paths[key].style.display = "block";
    } else {
      paths[key].style.display = "none";
    }
  }
}

let paths = {
  home: document.querySelector("#header-template"),
  "home-info": document.querySelector("#header-info-template"),
  catalog: document.querySelector("#catalog-template"),
  contact: document.querySelector("#contact"),
  gallery: document.querySelector("#work"),
  //info: document.querySelector("#info-template"),
  "about me": document.querySelector("#about-template"),
};
const navigation = Array.from(
  document.querySelector("#navigation-template").children
);
const keys = Object.keys(paths);

navigation.forEach((element) => {
  console.log(element.textContent.trim());
  element.addEventListener("click", (e) => {
    e.preventDefault();
    const text = element.textContent.trim().toLowerCase();
    if (text == "home") {
      show("home", "home-info");
      window.scrollTo(0, 0);
    } else {
      show(text);
      window.scrollTo(0, 0);
    }
  });
});
