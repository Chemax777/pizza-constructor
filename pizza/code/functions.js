import { pizzaSelectUser, user } from "./index.js";
import pizza from "./pizza.js";

function userSlectTopping(topping) {
    //size = "big"
    if ("smallmidbig".includes(topping)) {
        pizzaSelectUser.size = pizza.size.find((el) => {
            return el.name === topping
        })
    } else if ("moc1moc2moc3telyavetch1vetch2".includes(topping)) {
        pizzaSelectUser.topping.push(pizza.topping.find(el => el.name === topping))
    } else if ("sauceClassicsauceBBQsauceRikotta".includes(topping)) {
        pizzaSelectUser.sauce = pizza.sauce.find(el => el.name === topping)
    }
    pizzaSelectUser.price = show(pizzaSelectUser);
    // вывод цены
    document.querySelector('#price').textContent = pizzaSelectUser.price;
    // вывод названий соусов и топпингов
    document.querySelector('#sauce').textContent = pizzaSelectUser.sauce.productName;
    const toppingNames = pizzaSelectUser.topping.map(el => el.productName)
    document.querySelector('#topping').textContent = toppingNames.join(', ');
}

function show(pizza) {
    let price = 0;
    if (pizza.sauce !== "") {
        price += pizza.sauce.price;
    }
    if (pizza.topping.length > 0) {
        price += pizza.topping.reduce((a, b) => {
            return a + b.price
        }, 0)
    }
    if (pizza.size !== "") {
        price += pizza.size.price;
    }
    return price;
}

// валидация формы
function validate(pattern, value) {
    return pattern.test(value);
}

function checkUserForm(e) {
    if (e.target.name === "name" && validate(/^[а-яіїґє'-]{2,}$/gi, e.target.value)) {
        e.target.classList.remove('unvalidate');
        e.target.classList.add('validate');
        user.username = e.target.value;
    } else if (e.target.name === "phone" && validate(/^\+380[0-9]{9}$/gi, e.target.value)) {
        e.target.classList.remove('unvalidate')
        e.target.classList.add('validate');
        user.phone = e.target.value;
    } else if (e.target.name === "email" && validate(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gi, e.target.value)) {
        e.target.classList.remove('unvalidate')
        e.target.classList.add('validate');
        user.email = e.target.value;
    } else {
        e.target.classList.remove('validate')
        e.target.classList.add('unvalidate');
    }
}

// очистка формы
function clearUserForm() {
    const [...inputs] = document.querySelectorAll('input[type=text], input[type=tel], input[type=email]')
    inputs.forEach(el => {
        el.className = "";
        el.value = "";
    })
    user.username = "";
    user.phone = "";
    user.email = "";
}

// отправка формы
function submitUserForm() {
    if (user.username != "" && user.phone != "" && user.email != "") {
        window.document.location.href = "./thank-you/index.html"
    } else {
        const errorMsg = document.createElement('span');
        errorMsg.classList.add('error-msg');
        errorMsg.textContent = 'Дані не введено або введено некорректно! Повторіть спробу!'
        document.querySelector('.grid').before(errorMsg);
    }
}

// перемещение баннера
let moved = false;

function moveBanner() {
    const banner = document.querySelector('#banner')
    if (!moved) {
        banner.style.right = `${banner.style.right = 20}%`
        banner.style.bottom = `${banner.style.bottom = 20}%`
        moved = true
    } else {
        banner.style.right = `${banner.style.right = 1}%`
        banner.style.bottom = `${banner.style.bottom = 2}%`
        moved = false;
    }
}

export { userSlectTopping, validate, clearUserForm, submitUserForm, moveBanner, checkUserForm }