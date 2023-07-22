# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Newsletter sign-up form with success message solution](#frontend-mentor---newsletter-sign-up-form-with-success-message-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/images/desktop-main.png)
![](./assets/images/desktop-success.png)
![](./assets/images/error.png)
![](./assets/images/mobile-main.png)
![](./assets/images/mobile-success.png)

### Links

- [Solution URL](https://github.com/danheecho1/FEM_results-summary-component)
- [Live Site URL](https://your-live-site-url.com)

## My process

### Built with

- Plain HTML, CSS, and JS.
- Mobile first


### What I learned

I learned two major lessons from this project. 

One is that I should think through the project and plan ahead. I thought I would use plain HTML, CSS and JS without realizing that I need to pass data submitted through a form. Not that I absolutely needed routing to accomplish this, but I would have definitely considered React js to utilize state and different components (for success page). By the time I realized this, I was already almost done with the project and did not want to start over. 

Another 'aha' moment came from my JavaScript code. I had written the following and could not figure out why it was not working: 

```js
let input = document.querySelector(".sign-up-card-div__info-div__email-div__input").value;
...
const dismiss = () => {
  ...
  input = "";
}
```

Even when ChatGPT corrected me to use the following instead, I had no idea: 

```js
let input = document.querySelector(".sign-up-card-div__info-div__email-div__input");
...
const dismiss = () => {
  ...
  input.value = "";
}
```
After a long thought, I realized that the first code didn't give the input variable a reference to the DOM object that I needed to manipulate; it simply copied the value of the DOM at the time and pasted it to the variable. In comparison, the second code stores a reference to the DOM so that I can access the DOM and manipulate its value. 

### Continued development

I will need to continue to work on: 1) consistent and clean method of naming and organizing variables and class names, 2) thinking about if my code is easy to follow and make changes to, and 3) start practicing Bootstrap or Tailwind to speed up the css development. 

## Acknowledgments

Stackoverflow, MDN and ChatGPT continue to be great sources of help in times of trouble. 