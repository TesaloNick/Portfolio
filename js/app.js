const burger = document.querySelector('.home__burger')
const burgerWrapper = document.querySelector('.home__burger_wrapper')
const nav = document.querySelector('.home__nav')
const header = document.querySelector('.home__header')

burger.addEventListener('click', () => {
  burgerWrapper.classList.toggle('open')
  nav.classList.toggle('open')
})

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) {
    console.log(1);
    header.classList.add('white')
  } else {
    header.classList.remove('white')
  }
})