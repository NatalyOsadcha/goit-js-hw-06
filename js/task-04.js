const decrementBtn = document.querySelector('[data-action = "decrement"]');
const incrementBtn = document.querySelector('[data-action = "increment"]');
const value = document.querySelector('#value');

let counterValue = Number(value.textContent);

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
});

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
});
