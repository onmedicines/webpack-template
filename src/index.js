import "./styles.css";
import Dropdown from "./Dropdown.js";

const dropdownContainers = document.querySelectorAll(".dropdown-container");
console.log(dropdownContainers);
dropdownContainers.forEach((container) => {
  new Dropdown(container);
});
