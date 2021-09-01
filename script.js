const form = document.getElementById('form');
const email = document.getElementById('email');
const errorMsg = document.getElementById('error-msg');
const emptyMsg = document.getElementById('empty-msg');
const button = document.getElementById('btn');

button.addEventListener('click', (e)=> {

    e.preventDefault();

    if (email.value === ''){
        showError('empty');
    } else if (!isValidEmail(email.value)) {
        showError('error');
    } else {
        resetErrorStyles();
    }
});

function showError(str) {
    form.classList.add('wrong');
    if (str === 'empty') {
        emptyMsg.style.display = 'block';
    } else if (str === 'error') {
        errorMsg.style.display = 'block';
    }
    this.style.display= 'none';
}

function resetErrorStyles(){
    form.classList.remove('wrong');
    errorMsg.style.display= 'none';
    emptyMsg.style.display = 'none';
}

function isValidEmail(str) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(str).toLowerCase());
}