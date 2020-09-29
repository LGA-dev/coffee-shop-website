


// ## Menu buttons section ##



// Menu buttons variables
let buttonAll = document.getElementById('button-all');
let buttonDrinks = document.getElementById('button-drinks');
let buttonDeserts = document.getElementById('button-deserts');
let buttonSnacks = document.getElementById('button-snacks');

// This function will show all cards
let selectTypeAll = function () {
  // Select all card types
  let cardsToShow = document.querySelectorAll('.deserts,.snacks,.drinks');

  // Apply a fadein effect to all card types
  for (let i = 0; i < cardsToShow.length; i++) {
    cardsToShow[i].classList.remove('fadeOut');
    cardsToShow[i].classList.add('fadeIn');
  }

  // This will highlight the clicked button in the menu
  buttonAll.classList.remove('disabled');
  buttonDrinks.classList.add('disabled');
  buttonDeserts.classList.add('disabled');
  buttonSnacks.classList.add('disabled');

  // Console log for test
  // console.log(cardsToHide.length);
  // console.log(cardsToShow.length);
}

// This function will show all drinks cards
let selectDrinksType = function () {
  // Select card types to hide
  let cardsToHide = document.querySelectorAll('.deserts,.snacks');
  // Select card types to show
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

  // This will highlight the clicked button in the menu
  buttonAll.classList.add('disabled');
  buttonDrinks.classList.remove('disabled');
  buttonDeserts.classList.add('disabled');
  buttonSnacks.classList.add('disabled');

  // Console log for tests
  // console.log(cardsToHide.length)
  // console.log(cardsToShow.length)
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

  // This will highlight the clicked button in the menu
  buttonAll.classList.add('disabled');
  buttonDrinks.classList.add('disabled');
  buttonDeserts.classList.remove('disabled');
  buttonSnacks.classList.add('disabled');

  // Console log for tests
  // console.log(cardsToHide.length)
  // console.log(cardsToShow.length)
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

  // This will highlight the clicked button in the menu
  buttonAll.classList.add('disabled');
  buttonDrinks.classList.add('disabled');
  buttonDeserts.classList.add('disabled');
  buttonSnacks.classList.remove('disabled');

  // Console log for tests
  // console.log(cardsToHide.length)
  // console.log(cardsToShow.length)
}



// Change navbar background color on scroll



// Navbar variables
let navigationBar = document.getElementById("navbar");
let websiteLogo = document.getElementById("website-logo");

function changeNavbarBackground() {
  window.addEventListener("scroll", () => {
      // Window top position variable
      let fromTop = window.scrollY;

      // Change bg color when scrolled
      if (fromTop > 1) {
        navigationBar.classList.add("bg-white");
        navigationBar.classList.remove("bg-transparent");
        navigationBar.classList.add("navbar-light");
        navigationBar.classList.remove("navbar-dark");
        navigationBar.classList.add("shadow");
        navigationBar.classList.add("navbar-transition");
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
}
changeNavbarBackground();



// Delivery status check
// This will disable certain inputs if the radio is checked



// Radio and Input variables
let pickUpRadio =  document.getElementById('custom-radio-pickup');
let deliveryAddressInput =  document.getElementById('delivery-address-input');

// This will check if the pickup radio is checked
function deliveryRadioCheck() {
  // If true, add the disabled attribute to the input, otherwise remove it
  if (pickUpRadio.checked) {
    deliveryAddressInput.disabled = "disabled";
  } else {
    deliveryAddressInput.removeAttribute('disabled');
  }

  // window.alert("test");
}



// Payment radio check
// This will disable certain inputs if the radio is checked



// Radio and Input variables
let cashAtLocationRadio =  document.getElementById('custom-radio-cash-at-location');
let creditCardNumberInput =  document.getElementById('cc-number');
let creditCardNameInput =  document.getElementById('cc-name');
let creditCardDateInput =  document.getElementById('cc-date');
let creditCardCVCInput =  document.getElementById('cc-cvc');

// This will check if the cash-at-location radio is checked
function paymentRadioCheck() {
  // If true, add the disabled attribute to the inputs, otherwise remove it
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



// Change navbar color on toggle

// This is the workaround I took for the problem that I had with the navbar on mobile.

// If the navbar toggle button gets clicked and the navbar isn't scrolled, 
// the navbar container background color would stay transparent, making it hard to read the navbar items.

// This function fix that by applying a white background to the navbar and dark text to the navbar items.
// https://imgur.com/a/sy2dfFd


// Toggle button variable
let togglerButton = document.getElementById("toggler");

// Execute function on button click
togglerButton.addEventListener('click', function() {
  navigationBar.classList.add("bg-white");
  navigationBar.classList.remove("bg-transparent");
  navigationBar.classList.add("navbar-light");
  navigationBar.classList.remove("navbar-dark");
  websiteLogo.src = 'img/brew-right-logo-dark.png';
});



// ## Init section ##



// Popover
$(function () {
  $('[data-toggle="popover"]').popover()
})

// Datepicker
$('#datepicker').datepicker({
  uiLibrary: 'bootstrap4'
});

// AOS
AOS.init({
  delay: 200,
});
