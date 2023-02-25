const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const handleFontSize = function (event) {
    text.style.fontSize = event.currentTarget.value + 'px';
};

input.addEventListener('input', handleFontSize);


