// Menu buttons
let buttonAll = document.getElementById('button-all');
let buttonDrinks = document.getElementById('button-drinks');
let buttonDeserts = document.getElementById('button-deserts');
let buttonSnacks = document.getElementById('button-snacks');


// Show all cards
let selectTypeAll = function () {
  // Select all card types
  let cardsToShow = document.querySelectorAll('.deserts,.snacks,.drinks');

  // This will make all cards show
  for (let i = 0; i < cardsToShow.length; i++) {
    cardsToShow[i].classList.remove('fadeOut');
    cardsToShow[i].classList.add('fadeIn');
  }

  // This will highlight the clicked button
  buttonAll.classList.remove('disabled');
  buttonDrinks.classList.add('disabled');
  buttonDeserts.classList.add('disabled');
  buttonSnacks.classList.add('disabled');

  // Console log for test
  console.log(cardsToHide.length)
  console.log(cardsToShow.length);
}

// Show drinks cards
let selectDrinksType = function () {
  // Select card types to show and hide
  let cardsToHide = document.querySelectorAll('.deserts,.snacks');
  let cardsToShow = document.querySelectorAll('.drinks');

  // Apply a fadeout effect to the previously selected card types
  for (let i = 0; i < cardsToHide.length; i++) {
    cardsToHide[i].classList.add('fadeOut');
  }

  // Apply a fadein effect to the previously selected card types
  for (let i = 0; i < cardsToShow.length; i++) {
    cardsToShow[i].classList.remove('fadeOut');
    cardsToShow[i].classList.add('fadeIn');
  }

  // This will highlight the clicked button
  buttonAll.classList.add('disabled');
  buttonDrinks.classList.remove('disabled');
  buttonDeserts.classList.add('disabled');
  buttonSnacks.classList.add('disabled');

  // Console log for tests
  console.log(cardsToHide.length)
  console.log(cardsToShow.length)
}

// Show deserts cards
let selectDesertsType = function () {
  // Select card types to show and hide
  let cardsToHide = document.querySelectorAll('.drinks,.snacks');
  let cardsToShow = document.querySelectorAll('.deserts');

  // Apply a fadeout effect to the previously selected card types
  for (let i = 0; i < cardsToHide.length; i++) {
    cardsToHide[i].classList.add('fadeOut');
  }

  // Apply a fadein effect to the previously selected card types
  for (let i = 0; i < cardsToShow.length; i++) {
    cardsToShow[i].classList.add('fadeIn');
    cardsToShow[i].classList.remove('fadeOut');
  }

  // This will highlight the clicked button
  buttonAll.classList.add('disabled');
  buttonDrinks.classList.add('disabled');
  buttonDeserts.classList.remove('disabled');
  buttonSnacks.classList.add('disabled');

  // Console log for tests
  console.log(cardsToHide.length)
  console.log(cardsToShow.length)
}

// Show snacks cards
let selectSnacksType = function () {
  // Select card types to show and hide
  let cardsToHide = document.querySelectorAll('.deserts,.drinks');
  let cardsToShow = document.querySelectorAll('.snacks');

  // Apply a fadeout effect to the previously selected card types
  for (let i = 0; i < cardsToHide.length; i++) {
    cardsToHide[i].classList.add('fadeOut');
  }

  // Apply a fadein effect to the previously selected card types
  for (let i = 0; i < cardsToShow.length; i++) {
    cardsToShow[i].classList.remove('fadeOut');
    cardsToShow[i].classList.add('fadeIn');
  }

  // This will highlight the clicked button
  buttonAll.classList.add('disabled');
  buttonDrinks.classList.add('disabled');
  buttonDeserts.classList.add('disabled');
  buttonSnacks.classList.remove('disabled');

  // Console log for tests
  console.log(cardsToHide.length)
  console.log(cardsToShow.length)
}

// Change navbar background color on scroll
let navigationBar = document.getElementById("navbar");
let websiteLogo = document.getElementById("website-logo");

function stickyNavbar() {
  window.addEventListener("scroll", () => {
      let fromTop = window.scrollY;

      // Change navbar background color
      if (fromTop > 1) {
        navigationBar.classList.add("bg-white");
        navigationBar.classList.remove("bg-transparent");
        navigationBar.classList.add("navbar-light");
        navigationBar.classList.remove("navbar-dark");
        navigationBar.classList.add("navbar-transition");
        navigationBar.classList.add("shadow");
      } else {
        navigationBar.classList.remove("bg-white");
        navigationBar.classList.add("bg-transparent");
        navigationBar.classList.remove("navbar-light");
        navigationBar.classList.add("navbar-dark");
        navigationBar.classList.remove("shadow");
      }

      // Change navbar image
      if (fromTop > 0) {
          websiteLogo.src = 'img/brew-right-logo-dark.png';
      } else {
          websiteLogo.src = 'img/brew-right-logo-light.png';
      }

  });
  // window.alert("TEST");
}

stickyNavbar();

// Delivery radio status check

let pickUpRadio =  document.getElementById('custom-radio-pickup');

let deliveryAddressInput =  document.getElementById('delivery-address-input');

function deliveryRadioCheck() {
  // If true, add the disabled attribute to the input, otherwise remove it
  if (pickUpRadio.checked) {
    deliveryAddressInput.disabled = "disabled";
  } else {
    deliveryAddressInput.removeAttribute('disabled');
  }
}

// Payment radio status check

let cashAtLocationRadio =  document.getElementById('custom-radio-cash-at-location');

let creditCardNumberInput =  document.getElementById('cc-number');
let creditCardNameInput =  document.getElementById('cc-name');
let creditCardDateInput =  document.getElementById('cc-date');
let creditCardCVCInput =  document.getElementById('cc-cvc');

function paymentRadioCheck() {
  // If true, add the disabled attribute to the input, otherwise remove it
  if (cashAtLocationRadio.checked) {
    creditCardNumberInput.disabled = "disabled";
    creditCardNameInput.disabled = "disabled";
    creditCardDateInput.disabled = "disabled";
    creditCardCVCInput.disabled = "disabled";
  } else {
    creditCardNumberInput.removeAttribute('disabled');
    creditCardNameInput.removeAttribute('disabled');
    creditCardDateInput.removeAttribute('disabled');
    creditCardCVCInput.removeAttribute('disabled');
  }
}

let togglerButton = document.getElementById("toggler");

togglerButton.addEventListener('click', function() {
  console.log("test");
  navigationBar.classList.add("bg-white");
  navigationBar.classList.remove("bg-transparent");
  navigationBar.classList.add("navbar-light");
  navigationBar.classList.remove("navbar-dark");
  websiteLogo.src = 'img/brew-right-logo-dark.png';
});


// Datepicker
$('#datepicker').datepicker({
  uiLibrary: 'bootstrap4'
});