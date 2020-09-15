const btn = document.querySelector('.btn')
const def = document.querySelector('.def')
const decor = document.querySelector('.decor')
const passage = document.querySelector('.passage')
const list = document.querySelector('.list')


btn.addEventListener('click', (e) => {
  e.preventDefault()

  passage.style.color = 'tomato'
})

def.addEventListener('click', (e) => {
  e.preventDefault()

  passage.style.color = 'orange'
})

decor.addEventListener('click', (e) => {
  e.preventDefault()

  list.style.border = '1px solid black'
})