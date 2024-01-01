const form = document.getElementById('formulaire');
const emailInput = document.getElementById('Inputemail');
const mobileInput = document.getElementById('Mobile_number');
const sujetInput = document.getElementById('InputSujet');
const nameInput = document.getElementById('InputName');
const first_nameInput = document.getElementById('Input_firstName');
const messageInput = document.getElementById('InputMessage');

let emailValid = false;
let mobileValid = false;
let sujetValid = false;
let nameValid = false;
let first_nameValid = false;
let messageValid = false;

const UserRegex = /^[a-zA-Z-]{3,23}$/;
const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@&#$%]).{8,23}$/;
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PhoneNumberRegex = /^\+(?:\d{1,3})?\d{10}$/;
const SujetRegex = /^[^<>{}$]{3,200}$/;
const MessageRegex = /^[^<>{}$]{24,}$/;

function addClass(element,regex, value, valid){
    if(regex.test(value)){
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
        valid = true
    } else {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
        valid = false
    } 
}

// Lemotdep@ssequitue!!
// lasalledesport90gmail.com

messageInput.addEventListener('input', e=>addClass(messageInput, MessageRegex, e.target.value, messageValid));
nameInput.addEventListener('input', e=>addClass(nameInput, UserRegex, e.target.value, nameValid));
emailInput.addEventListener('input', e=>addClass(emailInput, EmailRegex, e.target.value, emailValid));
sujetInput.addEventListener('input', e=>addClass(sujetInput , SujetRegex, e.target.value, sujetValid));
first_nameInput.addEventListener('input', e=>addClass(first_nameInput, UserRegex, e.target.value, first_nameValid));
mobileInput.addEventListener('input',e=>{
    let tel = e.target.value;
    tel = tel.replace(/ /g,'');
    tel = tel.replace(/^0/, '+33');
    addClass(mobileInput, PhoneNumberRegex, tel, mobileValid)
})
form.addEventListener('submit',e=>{
    e.preventDefault();
    if (nameValid && first_nameValid && mobileValid && emailValid && sujetValid && messageValid){

    }
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "lasalle",
      Password : "Lemotdep@ssequitue!!",
      To : 'lasalledesport90gmail.com',
      From : "lasalledesport90gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body",
    }).then(
      alert(message),
      console.log('mail envoyer'),
    );
})





// emailInput.addEventListener('input', e=>{
//     if (EmailRegex.test(e.target.value)) {
//         emailInput.classList.add('is-valid');
//         emailInput.classList.remove('is-invalid');
//     } else {
//         emailInput.classList.add('is-invalid');
//         emailInput.classList.remove('is-valid');
//     }
// })

// mobileInput.addEventListener('input', e=>{
//     if (PhoneNumberRegex.test(e.target.value)) {
//         mobileInput.classList.add('is-valid');
//         mobileInput.classList.remove('is-invalid');
//     } else {
//         mobileInput.classList.add('is-invalid');
//         mobileInput.classList.remove('is-valid')
//     }
// })