// add products to cart
const productsCountEl = document.getElementById("products-count");
const addToCartBtns = document.querySelectorAll(".button-add-to-cart");

for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function () {
        productsCountEl.textContent = +productsCountEl.textContent + +quantityInput[i].value;
        quantityInput[i].value = 1;
    });
}

// like
const like = document.querySelectorAll(".like");

for (let i = 0; i < like.length; i++) {
    like[i].addEventListener("click", function () {
        if (like[i].classList.contains("liked")) {
            like[i].classList.remove("liked");
        } else {
            like[i].classList.add("liked");
        }
    })
}

// modal
const moreDetails = document.querySelectorAll(".button-more-details");
const modal = document.querySelector(".modal");
const btnClose = document.querySelector(".btn-close");

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}
for (let i = 0; i < moreDetails.length; i++) {
    moreDetails[i].addEventListener("click", openModal)
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}
btnClose.addEventListener("click", closeModal)

function showModalByScroll() {
    if (window.pageYOffset >= document.body.scrollHeight / 2) {
        openModal();
        window.removeEventListener("scroll", showModalByScroll)
    }
}
window.addEventListener("scroll", showModalByScroll);


// product quantity

let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityInput = document.querySelectorAll(".product-quantity input");
let minCount = 1;
let maxCount = 10;

for (let i = 0; i < quantityInput.length; i++) {
    let nextValue = +quantityInput[i].value;
    toggleButtonState(nextValue, incrementBtns[i], decrementBtns[i]);
}

function toggleButtonState(count, incrementBtns, decrementBtns) {
    decrementBtns.disabled = count <= minCount;
    incrementBtns.disabled = count >= maxCount;
}

for (let i = 0; i < incrementBtns.length; i++) {
    incrementBtns[i].addEventListener("click", function () {
        let nextValue = +quantityInput[i].value + 1;
        quantityInput[i].value = nextValue;
        toggleButtonState(nextValue, incrementBtns[i], decrementBtns[i]);
    });
}


for (let i = 0; i < decrementBtns.length; i++)
    decrementBtns[i].addEventListener("click", function () {
        let nextValue = +quantityInput[i].value - 1;
        quantityInput[i].value = nextValue;

        toggleButtonState(nextValue, incrementBtns[i], decrementBtns[i]);
    });

$('.slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
});

AOS.init();