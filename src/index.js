import { registerImage } from "./lazy";
const btnGetImage = document.getElementById("btnGetImages");
const mountNode = document.querySelector(".images");
const btnDelete = document.getElementById("btnDelete");
const minimun = 1;
const maximun = 121;

const random = () => Math.floor(Math.random() * (maximun - minimun) + minimun);

const createImages = () => {
  let container = document.createElement("div");
  let img = document.createElement("img");
  container.className = "p-4";
  img.className = "mx-auto imagen";
  img.width = "320";
  img.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
  container.append(img);
  return container;
};

const addImage = () => {
  const newImage = createImages();
  mountNode.append(newImage);
  registerImage(newImage);
};

const resetImages = () => {
  mountNode.replaceChildren();
};

btnGetImage.addEventListener("click", addImage);
btnDelete.addEventListener("click", resetImages);
