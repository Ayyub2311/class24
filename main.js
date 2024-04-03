// const wrapper = document.querySelector(".wrapper");
// const element = document.createElement("p");
// element.textContent = "Hello I am P element";
// element.





// const clock = document.querySelector(".clock");
// const element = document.createElement("span");
// const element2 = document.createElement("span");
// const element3 = document.createElement("span");
// element.textContent = "12";
// element2.textContent = ":";
// element3.textContent = "38";
// element.classList.add("hour");
// element2.classList.add("colon");
// element3.classList.add("minute");
// clock.append(element);
// clock.append(element2);
// clock.append(element3);
// console.log(element);
// console.log(element2);
// console.log(element3);


// const userName = "stepan";
// const userNameUpper = userName[0].toUpperCase();
// const userNameFinal = userNameUpper[0]+userName.slice(1);
// console.log(userNameFinal);


// const loginName = "Toby Martinov";
// const find = (loginName) => {
// if (loginName.endsWith("a")) {
// const name = ["Ms.", loginName];
// console.log(name);
// }
// else {
// const name = ["Mr.", loginName];
// console.log(name);
// }
// }
// find(loginName)



const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phoneNumber");
const password = document.querySelector("#password");
const btnSubmit = document.querySelector("#btnSubmit");

const info = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
};

firstName.addEventListener("change", (event) => {
    console.log(event);
    info.firstName = event.target.value;
    console.log(info);
});

lastName.addEventListener("change", (event) => {
    console.log(event);
    info.lastName = event.target.value;
    console.log(info);
});

email.addEventListener("change", (event) => {
    console.log(event);
    info.email = event.target.value;
    console.log(info);
});

phoneNumber.addEventListener("change", (event) => {
    console.log(event);
    info.phoneNumber = event.target.value;
    console.log(info);
});

password.addEventListener("change", (event) => {
    console.log(event);
    info.password = event.target.value;
    console.log(info);
});

const firstError = document.querySelector("#firstError");
const lastError = document.querySelector("#lastError");
const emailError = document.querySelector("#emailError");
const numberError = document.querySelector("#numberError");
const passwordError = document.querySelector("#passwordError");



const firstNameCheck = /^[a-z]{2,20}$/i;
const lastNameCheck = /^[a-z]{2,15}$/i;
const emailCheck = /^\w+@[a-z]{4,5}\.[a-z]{2,3}$/;
const phoneCheck = /^\+?998[0-9]{9}$/;
const passwordCheck = /^\w{5,}$/;

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    checkFirstName()
    checkLastName()
    checkEmail()
    checkNumber()
    checkPassword()

})

const checkFirstName = () => {
    if (firstNameCheck.test(info.firstName)){
        firstError.remove();
    } else {
        const p = document.createElement("p");
        p.textContent = "wrong name please try again";
        console.log(p);
        firstError.append(p);
    }
}

const checkLastName = () => {
    if (lastNameCheck.test(info.lastName)){
        lastError.remove();
    } else {
        const p = document.createElement("p");
        p.textContent = "wrong last name please try again";
        console.log(p);
        lastError.append(p);
    }
}

const checkEmail = () => {
    if (emailCheck.test(info.email)){
        emailError.remove();
    } else {
        const p = document.createElement("p");
        p.textContent = "wrong email please try again";
        console.log(p);
        emailError.append(p);
    }
}

const checkNumber = () => {
    if (numberCheck.test(info.number)){
        numberError.remove();
    } else {
        const p = document.createElement("p");
        p.textContent = "wrong number please try again";
        console.log(p);
        numberError.append(p);
    }
}

const checkPassword = () => {
    if (passwordCheck.test(info.password)){
        passwordError.remove();
    } else {
        const p = document.createElement("p");
        p.textContent = "wrong password please try again";
        console.log(p);
        passwordError.append(p);
    }
}








