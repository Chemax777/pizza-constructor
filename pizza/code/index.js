import { clickInputSize, clickSauceAdd, clickToppingAdd } from "./functionEvent.js"
import { clearUserForm, submitUserForm, moveBanner, checkUserForm } from "./functions.js";
import {dropZone, saucesImg, toppingsImg} from "./dragndrop.js"

document.getElementById("pizza")
    .addEventListener("click", clickInputSize);

document.querySelectorAll(".topping")
    .forEach((div) => {
        div.addEventListener("mousedown", clickToppingAdd)
    })

document.querySelectorAll(".sauce")
    .forEach((div) => {
        div.addEventListener("mousedown", clickSauceAdd)
    })

export const pizzaSelectUser = {
    size: "",
    topping: [],
    sauce: "",
    price: 0
}

export const user = {
    username: "",
    phone: "",
    email: ""
}

export const userForm = document.querySelector('.grid')

userForm.addEventListener("change", checkUserForm)

document.querySelector('input[type=reset]').addEventListener('click', clearUserForm)

document.querySelector('#btnSubmit').addEventListener('click', submitUserForm)

document.querySelector('#banner button').addEventListener('click', moveBanner)