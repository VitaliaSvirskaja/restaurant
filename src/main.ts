import "./style.css";
import { addHomeContent } from "./homepageRestaurant";

const homeButton = document.querySelector(".homeBtn");
homeButton?.addEventListener("click", () => {
  console.log("Test");
  addHomeContent();
});
