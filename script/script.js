console.log('hello')
const write = document.querySelector("#input")
const btn = document.querySelector('#btn')
const board = document.querySelector('.text-con')


btn.addEventListener('click', () => {
    board.textContent = (write.value)
    write.value = ''
})
