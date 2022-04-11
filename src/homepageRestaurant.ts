// <p>Best traditional sushi in your country.</p>
// <p>Every single sushi roll is prepared by our Japanese chef in the traditional way with
//     a lot of precision and love.</p>
// <p>Founded and managed by the Shisui family since 1920.</p>
// <div class="opening-hours">
//     <h3>Opening hours</h3>
// <p>Monday: 11am - 10pm</p>
// <p>Tuesday: 11am - 10pm</p>
// <p>Wednesday: 11am - 10pm</p>
// <p>Thursday: 11am - 10pm</p>
// <p>Friday: 11am - 10pm</p>
// <p>Saturday: 11am - 10pm</p>
// <p>Sunday: 11am - 10pm</p>
// </div>

const contentContainer = document.querySelector("#content");

export function addHomeContent() {
  const firstText = document.createElement("p");
  firstText.innerHTML = "Best traditional sushi in your country.";
  contentContainer?.appendChild(firstText);
}
