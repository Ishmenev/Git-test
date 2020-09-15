const btn = document.querySelector('.btn')
const def = document.querySelector('.def')
const passage = document.querySelector('.passage')

btn.addEventListener('click', (e) => {
  e.preventDefault()

  passage.style.color = 'tomato'
})

def.addEventListener('click', (e) => {
  e.preventDefault()

  passage.style.color = 'black'
})