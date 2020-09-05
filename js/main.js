// Show all card types
let selectTypeAll = function () {

  let cardsToShow = document.querySelectorAll('.deserts,.snacks,.drinks');
  console.log(cardsToShow.length)
  for (let i = 0; i < cardsToShow.length; i++) {
    cardsToShow[i].classList.remove('fadeOut');
    cardsToShow[i].classList.add('fadeIn');
  }

}

// Show type 1 cards
let selectDrinksType = function () {
  let cardsToHide = document.querySelectorAll('.deserts,.snacks');
  console.log(cardsToHide.length)
  for (let i = 0; i < cardsToHide.length; i++) {
    cardsToHide[i].classList.add('fadeOut');
  }

  let cardsToShow = document.querySelectorAll('.drinks');
  console.log(cardsToShow.length)
  for (let i = 0; i < cardsToShow.length; i++) {
    cardsToShow[i].classList.remove('fadeOut');
    cardsToShow[i].classList.add('fadeIn');
  }

}

// Show type 2 cards
let selectDesertsType = function () {
  let cardsToHide = document.querySelectorAll('.drinks,.snacks');
  console.log(cardsToHide.length)
  for (let i = 0; i < cardsToHide.length; i++) {
    cardsToHide[i].classList.add('fadeOut');
  }

  let cardsToShow = document.querySelectorAll('.deserts');
  console.log(cardsToShow.length)
  for (let i = 0; i < cardsToShow.length; i++) {
    cardsToShow[i].classList.add('fadeIn');
    cardsToShow[i].classList.remove('fadeOut');
  }

}

// Show type 3 cards
let selectSnacksType = function () {
  let cardsToHide = document.querySelectorAll('.deserts,.drinks');
  console.log(cardsToHide.length)
  for (let i = 0; i < cardsToHide.length; i++) {
    cardsToHide[i].classList.add('fadeOut');
  }

  let cardsToShow = document.querySelectorAll('.snacks');
  console.log(cardsToShow.length)
  for (let i = 0; i < cardsToShow.length; i++) {
    cardsToShow[i].classList.remove('fadeOut');
    cardsToShow[i].classList.add('fadeIn');
  }

}