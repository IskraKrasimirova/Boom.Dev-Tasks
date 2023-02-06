import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", (e) => {
  // This block will be executed once the page is loaded and ready
  e.stopImmediatePropagation();
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  const bodyElement = document.getElementsByTagName('body')[0];
  bodyElement.addEventListener('click', (ev) => {
    ev.preventDefault();
    for (let i = 1; i <= 5; i++) {
      let element = document.createElement('article');
      //element.setAttribute('class','message');
      //element.className = 'message';
      element.classList.add('message');
      element.textContent = `Message${i}`;
      bodyElement.appendChild(element);
    }
  });

  // document.body.addEventListener('click', () => {
  //   for (let i = 1; i <= 5; i++) {
  //     let element = document.createElement('article');
  //     element.classList.add('message');
  //     element.textContent = `Message${i}`;
  //     document.body.appendChild(element);
  //   }
  // });
});
