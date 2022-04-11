import "./style.css";
import {
  addContactContent,
  addHomeContent,
  addMenuContent,
} from "./homepageRestaurant";

const contentContainer = document.querySelector("#content");

function initPage() {
  addHomeContent();
}
initPage();

const homeButton = document.querySelector(".homeBtn");
homeButton?.addEventListener("click", () => {
  contentContainer!.innerHTML = "";
  addHomeContent();
});

const menuButton = document.querySelector(".menuBtn");
menuButton?.addEventListener("click", () => {
  contentContainer!.innerHTML = "";
  addMenuContent();
});

const contactButton = document.querySelector(".contactBtn");
contactButton?.addEventListener("click", () => {
  contentContainer!.innerHTML = "";
  addContactContent();
});
