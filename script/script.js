console.log('MAVERICK PROJECT')
const write = document.querySelector("#input")
const btn = document.querySelector('#btn')
const board = document.querySelector('.text-con')


btn.addEventListener('click', () => {
    if (write.value === '') {
        board.textContent = `Let's make today a history`
    } 
    else {
        board.textContent = (write.value)
    }
    write.value = ''
})
