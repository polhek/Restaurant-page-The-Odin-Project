export { aboutUs };
import aboutUsImg from "./about-us.jpg";

const aboutUs = () => {
  const main = document.createElement("main");

  const mainPhoto = document.createElement("div");
  mainPhoto.setAttribute("id", "home-main-photo");

  const photoMain = document.createElement("img");
  photoMain.setAttribute("src", aboutUsImg);
  photoMain.setAttribute("id", "landing-page-foto");

  const aboutUsMessage = document.createElement("div");
  aboutUsMessage.setAttribute("id", "about-us-message");

  const left = document.createElement("div");
  left.setAttribute("class", "left");

  const right = document.createElement("div");
  right.setAttribute("class", "right");

  left.innerHTML = `<h3 class="header3">FRESHEST INGREDIENTS</h3><p class="text-about">We make our famous food fresh by hand every day, we choose the best toppings and spices and mix just the right amount of them. Crazy good.</p>`;

  right.innerHTML = `<h3 class="header3">BEST FOOD ON THE WORLD</h3>
  <p class="text-about">For almost 20 years polhs restaurant has been making greatest food. We are back to our original recipes and we serve the best Food in the world</p>`;
  
  
  const container = document.getElementById('container')
  container.appendChild(main);
  main.appendChild(mainPhoto);
  mainPhoto.appendChild(aboutUsMessage);
  mainPhoto.appendChild(photoMain);
  aboutUsMessage.appendChild(left);
  aboutUsMessage.appendChild(right);

  return main;


};
