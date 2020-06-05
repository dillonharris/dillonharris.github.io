const spans = document.querySelectorAll('h1 span')

spans.forEach(span => span.addEventListener('mouseover', function(e){
  span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function(e){
  span.classList.remove('animated', 'rubberBand')
}))

const rubyBar = document.querySelector('.bar-ruby')
const jsBar = document.querySelector('.bar-javascript')
const elixirBar = document.querySelector('.bar-elixir')
const elmBar = document.querySelector('.bar-elm')

const newLocal = "power4.out"
var tl = gsap.timeline({ defaults: { duration: 1, ease: newLocal } });

tl.to(rubyBar, { width: `calc(90% - 6px)` })
  .to(jsBar, { width: `calc(65% - 6px)` })
  .to(elixirBar, { width: `calc(35% - 6px)` })
  .to(elmBar, { width: `calc(20% - 6px)` })


const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
  triggerElement: '.skills',
  triggerHook: 0
})
.setTween(tl)
.addTo(controller)

const showRequiredCategory = event => {
  const getId = event.id
  const links = document.querySelectorAll('.work-category button')
  for(i=0; i<links.length; i++) {
    if(links[i].hasAttribute('class')) {
      links[i].classList.remove('active');
    }
  }

  event.classList.add('active')
  const getCategory = document.querySelector(`.category-${getId}`)
  const categories = document.querySelectorAll('div[class ^= "category-"')
  for (i = 0; i < categories.length; i++) {
    if (categories[i].hasAttribute('class')) {
      categories[i].classList.remove('showCategory');
      categories[i].classList.add('hideCategory');
    }
  }

  getCategory.classList.remove('hideCategory')
  getCategory.classList.add('showCategory')
}


// class Validator {
//   addValidation(attr, req, message) {
//     console.log(attr)
//   }
// }

// var validator = new Validator("contactform");
// validator.addValidation("name","req","Please provide your name");
// validator.addValidation("email","req","Please provide your email");
// validator.addValidation("email","email", "Please enter a valid email address")
