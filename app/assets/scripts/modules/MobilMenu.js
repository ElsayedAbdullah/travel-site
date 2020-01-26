import $ from "jquery"; // import jquery form node_modules

class MobilMenu {
  // constructor function is the first thing which run when call the class
  constructor() {
    this.siteHeader = $(".site-header");
    this.MenuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }

  events() {
    this.MenuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.siteHeader.toggleClass("site-header--is-expanded");
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    this.MenuIcon.toggleClass("site-header__menu-icon--close-x");
  }
}

export default MobilMenu;
