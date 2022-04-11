const contentContainer = document.querySelector("#content");
const templateHome = document.getElementById(
  "homeContent"
) as HTMLTemplateElement;
const templateMenu = document.getElementById(
  "menuContent"
) as HTMLTemplateElement;

const templateContact = document.getElementById(
  "contactContent"
) as HTMLTemplateElement;

export function addHomeContent() {
  const contentHome = templateHome!.content.cloneNode(true);
  contentContainer?.appendChild(contentHome);
}

export function addMenuContent() {
  const contentMenu = templateMenu!.content.cloneNode(true);
  contentContainer?.appendChild(contentMenu);
}

export function addContactContent() {
  const contentContact = templateContact!.content.cloneNode(true);
  contentContainer?.appendChild(contentContact);
}
