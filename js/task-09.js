function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector('body');
const bgColor = container.querySelector('.color');
const btn = container.querySelector('.change-color');

btn.addEventListener('click', handleColor);

function handleColor() {

  const createColor = getRandomHexColor();
  
  container.style.backgroundColor = createColor;
  bgColor.textContent = createColor;
};
  