const contentContainer = document.querySelector("#content");

const templateHome = document.getElementById(
  "homeContent"
) as HTMLTemplateElement;

export function addHomeContent() {
  const contentHome = templateHome!.content.cloneNode(true);
  contentContainer?.appendChild(contentHome);
}
