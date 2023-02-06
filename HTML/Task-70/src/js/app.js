import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", (ev) => {
  // This block will be executed once the page is loaded and ready
  ev.stopImmediatePropagation();

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  const mainDiv = document.querySelector('.main');
  const imageDiv = document.createElement('div');
  imageDiv.classList.add('image');

  const imgElement = document.createElement('img');
  imgElement.setAttribute('image', 'profile-icon');
  imgElement.setAttribute('src', 'images/user-icon.jpg');

  imageDiv.appendChild(imgElement);
  mainDiv.appendChild(imageDiv);

  imageDiv.addEventListener('click', () => {
    imageDiv.style.transform = 'scale(2,2)';
  });
});
