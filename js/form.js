const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input')

const expresiones = {
    company: /^[a-zA-Z0-9\_\-]{4,500}$/, // Letras, numeros, guion y guion_bajo
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	number: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    name:false,
    lastname:false,
    company:false,
    mail: false,
    number: false,
    sector:false,
    comment: false,
}

const validateForm = (e) => {
   switch (e.target.name) {
    case "name":
        validateField(expresiones.name, e.target, 'name');
    break;
    case "lastname":
        validateField(expresiones.name, e.target, 'lastname');
    break;
    case "company":

    break;
    case "mail":
        validateField(expresiones.mail, e.target, 'mail');
    break;
    case "number":
        validateField(expresiones.number, e.target, 'number');
    break;
    case "sector":

    break;
    case "comment":

    break;
   }
}

const validateField = (expresion, input, campo) => {
    if(expresion.test(input.value)) {
        document.getElementById(`group__${campo}`).classList.remove('form__group-incorrect');
        document.getElementById(`group__${campo}`).classList.add('form__group-correct');
        document.querySelector(`#group__${campo} img`).classList.add('square_check');
        document.querySelector(`#group__${campo} img`).classList.remove('square_x');
        document.querySelector(`#group__${campo} .form__input-error`).classList.remove('form__input-error-active');
        campos[campo] = true;
    } else {
        document.getElementById(`group__${campo}`).classList.add('form__group-incorrect');
        document.getElementById(`group__${campo}`).classList.remove('form__group-correct');
        document.querySelector(`#group__${campo} img`).classList.add('square_x');
        document.querySelector(`#group__${campo} img`).classList.remove('square_check');
        document.querySelector(`#group__${campo} .form__input-error`).classList.add('form__input-error-active');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terms');

    if(campos.name && campos.lastname && campos.mail && campos.number && terminos.checked) {
        form.reset();

        document.getElementById('form__message-succes').classList.add('form__message-succes-active');
        setTimeout(()=> {
            document.getElementById('form__message-succes').classList.remove('form__message-succes-active');
        }, 5000)

        document.querySelectorAll('.form__group-correct').forEach((icon)=> {
            icon.classList.remove('form__group-correct');
        });
    } else {
        document.getElementById('form__message').classList.add('form__message-active');
    }
});