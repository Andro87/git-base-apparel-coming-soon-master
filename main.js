const form = document.getElementById("form");
const email = document.getElementById("email");
const message = document.getElementById("message");
const arrow = document.getElementById("arrow");
const error = document.getElementById("error");

const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;


const doSomething = e => {
    e.preventDefault();
    console.log("hello",email.value);

    if (email.value === ""){
        message.textContent = ("Please provide a valid email");
        message.classList.add("message");
        form.classList.add("interaction--error");
        arrow.classList.add("arrow--error");
        error.classList.add("icon--error");

    }else if (!email.value.match(re)){
        message.textContent = ("Please provide a valid email");
        message.classList.add("message");
        form.classList.add("interaction--error");
        arrow.classList.add("arrow--error");
        error.classList.add("icon--error");

    }else {
        message.textContent = ("Valid email");
        error.classList.remove("icon--error");
    }
};



form.addEventListener("submit",doSomething);