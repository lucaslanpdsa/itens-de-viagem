const form = document.getElementById('novoItem')
var lista = document.querySelector('#lista')

form.addEventListener('submit', evento => {
  evento.preventDefault()
  criaelemento(
    evento.target.elements['nome'].value,
    evento.target.elements['quantidade'].value
  )
})

function criaelemento(nome, quantidade) {
  const novoItem = document.createElement('li')
  novoItem.classList.add('item')

  const numeroItem = document.createElement('strong')
  numeroItem.innerHTML = quantidade

  novoItem.appendChild(numeroItem)

  novoItem.innerHTML += nome

  console.dir(numeroItem) //mostra todas as propriedades do objeto no console

  lista.appendChild(novoItem)
}
