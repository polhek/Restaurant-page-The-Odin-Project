export { contactUs };
import contact from "./contact.jpg";

const contactUs = () => {
  const main = document.createElement("main");

  const mainPhoto = document.createElement("div");
  mainPhoto.setAttribute("id", "home-main-photo");

  const photoMain = document.createElement("img");
  photoMain.setAttribute("src", contact);
  photoMain.setAttribute("id", "landing-page-foto");

  const contactDiv = document.createElement('div');
  contactDiv.setAttribute('id', 'about-us-message');

  contactDiv.innerHTML=`<a class="contact-link" href="https://github.com/polhek/"><i class="fab fa-lg fa-github"></i></a>
  <a class="contact-link" href="https://twitter.com/zigagroselj"><i class="fab fa-lg fa-twitter-square"></i></a>
  <a class="contact-link" href="mailto:ziga.groselj@gmail.com"><i class="far fa-lg fa-envelope"></i></a>`;

  const container = document.getElementById('container');
  container.appendChild(main);
  main.appendChild(mainPhoto);
  mainPhoto.appendChild(photoMain);
  mainPhoto.appendChild(contactDiv);
};
