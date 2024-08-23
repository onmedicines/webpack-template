export default class Dropdown {
  constructor(container) {
    this._dropdownContainer = container;

    this.#addEventListeners(this._dropdownContainer);
  }

  #addEventListeners(container) {
    const dropdownMenu = container.querySelector(".dropdown-menu");

    // initially hide dropdown menu
    dropdownMenu.style.display = "none";

    // toggle dropdown menu on clicking the dropdown button
    container.addEventListener("click", (event) => {
      if (event.target.classList.contains("dropdown-button")) {
        if (dropdownMenu.style.display === "none") {
          dropdownMenu.style.display = "block";
        } else {
          dropdownMenu.style.display = "none";
        }
      }
    });
  }
}
