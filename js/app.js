const burger = document.querySelector('.home__burger')
const burgerWrapper = document.querySelector('.home__burger_wrapper')
const nav = document.querySelector('.home__nav')
const header = document.querySelector('.home__header')

//-------------------------открытие и закрытие бургера
burger.addEventListener('click', () => {
  burgerWrapper.classList.toggle('open')
  nav.classList.toggle('open')
})

//-------------------------замена цвета header при снижении
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) {
    header.classList.add('white')
  } else {
    header.classList.remove('white')
  }
})

//-------------------------Paralax Hover Card Effect
const phceEls = document.querySelectorAll(".phce") || [];
phceEls.forEach(phceEl => phceEl.addEventListener("pointermove", phceSetPositions))

function phceSetPositions({ currentTarget: el, layerX: x, layerY: y }) {
  const { width: w, height: h } = el.getBoundingClientRect();
  el.style.setProperty("--posX", phceMapPositions(x, [0, w]));
  el.style.setProperty("--posY", phceMapPositions(y, [0, h]));
}

function phceMapPositions(value, from, to = [-1, 1], decimals = 2) {
  const newValue = (value - from[0]) * (to[1] - to[0]) / (from[1] - from[0]) + to[0];
  const val = Math.min(Math.max(newValue, to[0]), to[1]);
  return decimals && decimals > 0 ? Number(Math.round(val + 'e' + decimals) + 'e-' + decimals) : val;
}

//-------------------------Skills values
const skills = document.querySelectorAll('.skill__marker')
skills.forEach(skill => {
  const percent = skill.dataset.progress
  skill.innerHTML = percent
  skill.style.left = percent
  skill.parentNode.querySelector('.skill__progress-active').style.width = percent

})

//-------------------------Slider
$('.portfolio__slider').slick({
  infinite: true,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  prevArrow: "<div class='prev'><div class='_icon-arrow'></div></div>",
  nextArrow: "<div class='next'><div class='_icon-arrow'></div></div>",
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

//-------------------------Social Links hover
const socials = document.querySelectorAll('.contacts__socials ul li a')
socials.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.color = item.dataset.color
    item.style.borderColor = item.dataset.color
  })
  item.addEventListener('mouseout', () => {
    item.style.color = '#fab95b'
    item.style.borderColor = '#fab95b'
  })
})


//------------------------------scroll-------------------------
function removeMenu() {
  burgerWrapper.classList.remove('open')
  nav.classList.remove('open')
}

function slowScroll(id) {
  var offset = 0;
  if (id === '.about') {
    $('html, body').animate({
      scrollTop: $(id).offset().top - offset - 50
    }, 500);
    removeMenu()
  } else if (id === '.portfolio') {
    $('html, body').animate({
      scrollTop: $(id).offset().top - offset - 50
    }, 500);
    removeMenu()
  } else if (id === '.skills') {
    $('html, body').animate({
      scrollTop: $(id).offset().top - offset - 50
    }, 500);
    removeMenu()
  } else if (id === '.contacts') {
    $('html, body').animate({
      scrollTop: $(id).offset().top - offset - 50
    }, 500);
    removeMenu()
  } else if (id === '.form') {
    $('html, body').animate({
      scrollTop: $(id).offset().top - offset - 50
    }, 500);
    removeMenu()
  } else if (id === '.home') {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    removeMenu()
  }

  return false;
}

