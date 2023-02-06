import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const priceElements = document.querySelectorAll('.price.hot');
  for (let i = 0; i < priceElements.length; i++) {
    priceElements[i].innerHTML += ' &#128293;';
    //priceElements[i].innerHTML = `&#128293; ${priceElements[i].textContent}`;
    //priceElements[i].textContent = String.fromCodePoint(0x1F525) + priceElements[i].textContent;
    //priceElements[i].textContent += String.fromCodePoint(0x1F525);
    //priceElements[i].innerHTML += String.fromCodePoint(0x1F525);

  }
});
