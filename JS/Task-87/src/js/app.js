import "../scss/app.scss";
import * as R from 'ramda'

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];
  const articles = document.querySelectorAll("article");
  const getClass = R.pluck('class');
  const result = getClass(arrayToPluck);
  for (let i = 0; i < result.length; i++) {
    articles[i].classList.add(result[i]);
  }
});
