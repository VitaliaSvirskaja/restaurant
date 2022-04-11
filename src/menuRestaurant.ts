import "./menuStyles.css";
const contentContainer = document.querySelector("#content");
const templateMenu = document.getElementById(
  "menuContent"
) as HTMLTemplateElement;

export function addMenuContent() {
  const contentMenu = templateMenu!.content.cloneNode(true);
  contentContainer?.appendChild(contentMenu);
}
