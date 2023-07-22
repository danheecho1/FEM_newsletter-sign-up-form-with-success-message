const subscribeButton = document.querySelector(".sign-up-card-div__info-div__email-form__button");
const signUpCard = document.querySelector(".sign-up-card-div");
const confirmationCard = document.querySelector(".confirmation-card-div");
const form = document.querySelector(".sign-up-card-div__info-div__email-form");
const input = document.querySelector(".sign-up-card-div__info-div__email-form__input");
const indicator = document.querySelector(".sign-up-card-div__info-div__email-form__label-div__invalid-indicator");
const email = document.querySelector(".confirmation-card-div__description span");
const regex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")

const toggle = () => {
	signUpCard.classList.toggle("hidden");
	confirmationCard.classList.toggle("hidden");
    input.classList.remove("error");
    indicator.classList.remove("error");
}

const indicateInvalidEmail = () => {
    input.classList.add("error");
    indicator.classList.add("error");
}

const subscribe = () => {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
    })
    let formData = new FormData(form)
    if(!formData.get("email") || !regex.test(formData.get("email"))) {
        indicateInvalidEmail();
    } else {
        email.innerHTML = formData.get("email");
        toggle();
    }
};

const dismiss = () => {
	toggle();
    input.value = "";
}