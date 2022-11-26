const burger = document.querySelector('.home__burger')
const burgerWrapper = document.querySelector('.home__burger_wrapper')
const nav = document.querySelector('.home__nav')
nav.style.top = (-nav.offsetHeight + 50) + 'px' // начальное положение меню

burger.addEventListener('click', () => {
  burgerWrapper.classList.toggle('open')
  nav.classList.toggle('open')
})