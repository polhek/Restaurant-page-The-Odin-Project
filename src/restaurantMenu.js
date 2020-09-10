export { restaurantMenu };
import menuPageImg from "./menu.jpg";

const restaurantMenu = () => {
  const main = document.createElement("main");

  const mainPhoto = document.createElement("div");
  mainPhoto.setAttribute("id", "home-main-photo");

  const photoMain = document.createElement("img");
  photoMain.setAttribute("src", menuPageImg);
  photoMain.setAttribute("id", "landing-page-foto");

  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");

  menu.innerHTML = `<section class="menu"><h2 class="menu_title">Menu</h2><div class="menu_section menu_section_15996555380"><h3>Lorem ipsum</h3>
  <div class="menu_item menu_item_15996555778">
      <h4 class="name">Lorem ipsum</h4>
      <span class="price">4$</span>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit.</p>
      <hr>
  </div>

  <div class="menu_item menu_item_15996555836">
      <h4 class="name">Lorem ipsum</h4>
      <span class="price">5.44$</span>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit.</p>
      <hr>
  </div>

  <div class="menu_item menu_item_15996555996">
      <h4 class="name">Lorem ipsum</h4>
      <span class="price">4$</span>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit.</p>
      <hr>
  </div>

  <div class="menu_item menu_item_15996556017">
      <h4 class="name">Lorem ipsum</h4>
      <span class="price">5$</span>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit.</p>
      <hr>
  </div>

  <div class="menu_item menu_item_15996556084">
      <h4 class="name">Lorem ipsum</h4>
      <span class="price">6$</span>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit.</p>
      <hr>
  </div>

  <div class="menu_item menu_item_15996556100">
      <h4 class="name">Lorem ipsum</h4>
      <span class="price">30$</span>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit.</p>
      <hr>
  </div>
</div>`;

    const container = document.getElementById('container');
    container.appendChild(main);
    main.appendChild(mainPhoto);
    mainPhoto.appendChild(photoMain);
    mainPhoto.appendChild(menu);
    

};
