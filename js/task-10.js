function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const container = document.querySelector('#boxes');

inputNum.addEventListener('input', getBoxesAmount);
function getBoxesAmount(event) {
  inputNum.setAttribute('amount', event.currentTarget.value);
};

btnCreate.addEventListener('click', createBoxes);
function createBoxes(amount) {
  let boxes =[];
  amount = Number(inputNum.getAttribute('amount'));

  for (let item = 0; item < amount; item += 1) {
  
  const box = document.createElement('div');
  box.style.background = getRandomHexColor();
  box.style.width = `${item *10 + 30}px`;
  box.style.height = `${item *10 + 30}px`;
  boxes.push(box);
}
  container.append(...boxes);
  inputNum.value = '';
}

btnDestroy.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  container.innerHTML = '';
}