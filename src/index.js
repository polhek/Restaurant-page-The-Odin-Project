// Imports ...
import "./style.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import { navigationBar } from "./navigationBar";
import { mainContent } from "./homePageMain";
import { aboutUs } from "./aboutUs";
import { restaurantMenu } from "./restaurantMenu";
import { contactUs } from "./contactUs";

// First load of the page...
const contentPage = document.getElementById("content");
contentPage.appendChild(navigationBar());
mainContent();

const navBar = document.querySelector("ul");
const main = document.querySelector("main");

for (let i = 0; i < navBar.children.length; i++) {
  let li = navBar.children[i];

  li.addEventListener("click", (event) => {
    let text = li.textContent;
    const main = document.querySelector("main");

    switch (text) {
      case "Home":
        main.innerHTML = "";
        main.remove();
        mainContent();
        deleteBorder();
        li.style.borderBottom = "solid 3px green";
        break;
      case "About":
        main.innerHTML = "";
        main.remove();
        aboutUs();
        deleteBorder();
        li.style.borderBottom = "solid 3px green";
        break;
      case "Menu":
        main.innerHTML = "";
        main.remove();
        restaurantMenu();
        deleteBorder();
        li.style.borderBottom = "solid 3px green";
        break;
      case "Contact":
        main.innerHTML = "";
        main.remove();
        contactUs();
        deleteBorder();
        li.style.borderBottom = "solid 3px green";
        break;
    }
  });
}

const deleteBorder = () => {
  for (let i = 0; i < navBar.children.length; i++) {
    navBar.children[i].style.borderBottom = "solid 3px transparent";
  }
};
