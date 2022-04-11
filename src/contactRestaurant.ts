const contentContainer = document.querySelector("#content");

const templateContact = document.getElementById(
  "contactContent"
) as HTMLTemplateElement;

export function addContactContent() {
  const contentContact = templateContact!.content.cloneNode(true);
  contentContainer?.appendChild(contentContact);
}
