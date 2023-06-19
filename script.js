const subscribeButton = document.querySelector(".sign-up-card-div__info-div__email-div__button");
const signUpCard = document.querySelector(".sign-up-card-div");
const confirmationCard = document.querySelector(".confirmation-card-div")

const confirmation = () => {
	signUpCard.classList.toggle("hidden");
    confirmationCard.classList.toggle("hidden");
};
