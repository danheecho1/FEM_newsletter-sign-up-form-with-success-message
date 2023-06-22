const subscribeButton = document.querySelector(".sign-up-card-div__info-div__email-form__button");
const signUpCard = document.querySelector(".sign-up-card-div");
const confirmationCard = document.querySelector(".confirmation-card-div");
const form = document.querySelector(".sign-up-card-div__info-div__email-form");
let input = document.querySelector(".sign-up-card-div__info-div__email-form__input");
let email = document.querySelector(".confirmation-card-div__description span");

const toggle = () => {
	signUpCard.classList.toggle("hidden");
	confirmationCard.classList.toggle("hidden");
}

const subscribe = () => {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
    })
	toggle();
    let formData = new FormData(form)
    email.innerHTML = formData.get("email");
};

const dismiss = () => {
	toggle();
    input.value = "";
}