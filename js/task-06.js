const input = document.querySelector('#validation-input');

const handleValidator = function (event) {
    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        input.classList.add('valid')
        input.classList.remove('invalid')
        return;
    }
    input.classList.add('invalid');
    input.classList.remove('valid');
};

input.addEventListener('blur', handleValidator);