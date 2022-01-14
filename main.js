// abre e fecha o menu quando clicar no icone: hamburguer e X
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

// quando clicar em um item do menu, esconder o menu
const links = document.querySelectorAll('nav a')
for (const element of links) {
  element.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

// mudar o header da pagina quando der scrollbar
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

// Testimonials carousel slider swiper
const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 1,
  pagination: { el: '.swiper-pagination' },
  mousewhel: true,
  keyboard: true
})

// ScrollReveal: Mostrar elemento quando der scroll na página
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
#home .image, #home .text, 
#about .image, #about .text, 
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links

`,
  { interval: 100 }
)
