const scene = document.querySelector('.scene')
const sorteado = document.getElementById('sorteado')

scene.addEventListener('mouseenter', () => {
    const numero = Math.floor(Math.random() * 101)
    sorteado.value = String(numero).padStart(2, '0')
})