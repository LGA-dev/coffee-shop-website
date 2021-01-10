/* 
======================================================
00. Global variables and constants
01. Buttons event listener
02. Card type function
03. Navbar color function
04. Navbar background-color toggle fix
05. Delivery status function
====================================================== 
*/

// **** 00. Global constants and initializations ****

// Buttons constants
const allTypesButton = document.getElementById('all-types-button');
const drinksButton = document.getElementById('drinks-button');
const snacksButton = document.getElementById('snacks-button');
const desertsButton = document.getElementById('desserts-button');

// Cards constants
const allMenuCards = document.querySelectorAll('.drinks, .snacks, .desserts');
const drinkCards = document.querySelectorAll('.drinks');
const snackCards = document.querySelectorAll('.snacks');
const dessertCards = document.querySelectorAll('.desserts');

// Navbar constants
const navigationBar = document.getElementById("nav");
const websiteLogo = document.getElementById("website-logo");
const togglerButton = document.getElementById("toggler");

// Radio constants
const pickUpRadio = document.getElementById('pickup-radio-button');
const cashAtLocationRadio =  document.getElementById('cash-at-location-payment-button');

// Input constants
const deliveryAddressInput = document.getElementById('delivery-address-input');
const creditCardNumberInput =  document.getElementById('cc-number');
const creditCardNameInput =  document.getElementById('cc-name');
const creditCardDateInput =  document.getElementById('cc-date');
const creditCardCVCInput =  document.getElementById('cc-cvc');

// Popover initialization
const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// Datepicker initialization
$('#datepicker').datepicker({
  uiLibrary: 'bootstrap4'
});

// AOS initialization
AOS.init({
  delay: 200,
  disable: 'mobile'
});



// **** 01. Buttons event listener ****

// On click, this will display only the selected card type
allTypesButton.addEventListener("click", displayCardType);
drinksButton.addEventListener("click", displayCardType);
snacksButton.addEventListener("click", displayCardType);
desertsButton.addEventListener("click", displayCardType);



// **** 02. Card type function ****

// This function will display the active card type based on the clicked button type
function displayCardType() {
  // Set the active card type
  let currentActiveCardType = this.id;
  // console.log("The current active type is: " + currentActiveCardType);
  for(let i = 0; i < allMenuCards.length; i++) {
    // Hide all the cards
    allMenuCards[i].style.display = "none";
    // Display the menu cards the match the current active type
    if (currentActiveCardType === "all-types-button") {
      console.log("Display all cards");
      allMenuCards[i].style.display = "block";
      allMenuCards[i].classList.add('fadeIn');
    } else if (currentActiveCardType === "drinks-button" && allMenuCards[i].classList.contains('drinks')) {
      console.log("Display all drinks cards");
      allMenuCards[i].style.display = "block";
      allMenuCards[i].classList.add('fadeIn');
    } else if (currentActiveCardType === "snacks-button" && allMenuCards[i].classList.contains('snacks')) {
      console.log("Display all snacks cards");
      allMenuCards[i].style.display = "block";
      allMenuCards[i].classList.add('fadeIn');
    } else if (currentActiveCardType === "desserts-button" && allMenuCards[i].classList.contains('desserts')) {
      console.log("Display all desserts cards");
      allMenuCards[i].style.display = "block";
      allMenuCards[i].classList.add('fadeIn');
    } else {
      console.log("Error");
    }
  }
}



// **** 03. Navbar color function ****

// This function will change the navbar background color and the image on scroll
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
          websiteLogo.src = 'src/assets/images/brew-right-logo-dark.png';
      } else {
          websiteLogo.src = 'src/assets/images/brew-right-logo-light.png';
      }
  });
}
changeNavbarBackground();



// **** 04. Navbar background-color toggle fix ****
// This is the workaround I took for the problem that I had with the navbar on mobile.

// If the navbar toggle button gets clicked and the navbar isn't scrolled, 
// the navbar container background color would stay transparent, making it hard to read the navbar items.

// This function fix that by applying a white background to the navbar and dark text to the navbar items.
// https://imgur.com/a/sy2dfFd

// Execute function on button click
togglerButton.addEventListener('click', function() {
  navigationBar.classList.add("bg-white");
  navigationBar.classList.remove("bg-transparent");
  navigationBar.classList.add("navbar-light");
  navigationBar.classList.remove("navbar-dark");
  websiteLogo.src = 'src/assets/images/brew-right-logo-dark.png';
});



// **** 05. Delivery status function ****


// This function will check if the pickup radio is checked
// If true, add the disabled attribute to the input, otherwise remove it
function deliveryRadioCheck() {
  if (pickUpRadio.checked) {
    deliveryAddressInput.disabled = "disabled";
  } else {
    deliveryAddressInput.removeAttribute('disabled');
  }
}

// This function will check if the cash-at-location radio is checked
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
