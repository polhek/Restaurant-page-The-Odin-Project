export { mainContent };
import homePageImg from "./home.jpg";

const mainContent = () => {
  const main = document.createElement("main");

  const mainPhoto = document.createElement("div");
  mainPhoto.setAttribute("id", "home-main-photo");

  const photoMain = document.createElement("img");
  photoMain.setAttribute("src", homePageImg);
  photoMain.setAttribute("id", "landing-page-foto");

  const welcomeMessageDiv = document.createElement("div");
  welcomeMessageDiv.setAttribute("id", "welcome-message");

  const welcomeMessageText = document.createElement("p");
  welcomeMessageText.setAttribute("id", "question");
  welcomeMessageText.textContent = "WELCOME TO THE POLH'S RESTAURANT PAGE!";

  const container = document.getElementById('container')
  container.appendChild(main);
  main.appendChild(mainPhoto);
  mainPhoto.appendChild(photoMain);
  mainPhoto.appendChild(welcomeMessageDiv);
  welcomeMessageDiv.appendChild(welcomeMessageText);

  return main;
};
