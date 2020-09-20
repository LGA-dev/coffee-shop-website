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

      // Change navbar size
      if (fromTop > 0) {
          document.getElementById("navbar").style.height = "4rem";
      } else {
          document.getElementById("navbar").style.height = "5rem";
      }

  });
  // window.alert("TEST");
}

stickyNavbar();