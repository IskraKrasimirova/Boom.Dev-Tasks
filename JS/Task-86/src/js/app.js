import "../scss/app.scss";
//const R = require("ramda");
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  const numbersArray = [1, 3, 4, 5, 6, 7];
  const isEven = (n) => n % 2 === 0;
  //const filteredArray = R.filter(isEven, numbersArray);
  const filteredArray = numbersArray.filter(isEven);
  //console.log(filteredArray);
  filteredArray.forEach(n => {
    const li = document.createElement('li');
    li.textContent = n;
    ul.appendChild(li);
  });
});
