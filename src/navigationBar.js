export { navigationBar };

const navigationBar = () => {
  const container = document.createElement("div");
  container.setAttribute("id", "container");

  const header = document.createElement("header");

  //page name
  const pageTitle = document.createElement("div");
  pageTitle.setAttribute("id", "page-title");

  const pageTitleText = document.createElement("h1");
  pageTitleText.textContent = "Restaurant page";

  //navbar
  const navbarDiv = document.createElement("div");
  navbarDiv.setAttribute("id", "navbar");

  const navBarUl = document.createElement("ul");
  navBarUl.setAttribute("id", "nav-bar");

  let listNavbarLi = [];

  for (let i = 0; i < 4; i++) {
    let liItem = document.createElement("li");
    let link = document.createElement("a");
    liItem.appendChild(link);

    switch (i) {
      case 0:
        link.textContent = "Home";
        break;
      case 1:
        link.textContent = "About";
        break;
      case 2:
        link.textContent = "Menu";
        break;
      case 3:
        link.textContent = "Contact";
        break;
    }
    listNavbarLi.push(liItem);
  }

  // Append everything to header...
  
  container.appendChild(header);
  header.appendChild(pageTitle);
  pageTitle.appendChild(pageTitleText);
  header.appendChild(navbarDiv);
  navbarDiv.appendChild(navBarUl);
  listNavbarLi.forEach((li) => navBarUl.appendChild(li));

  return container;
};


