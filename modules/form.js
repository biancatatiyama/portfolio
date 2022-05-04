const name = document.querySelector('#nameInput').value
const email = document.querySelector('#emailInput').value
const message = document.querySelector('#messageInput').value
const send = document.querySelector('#sendForm')

send.addEventListener('click', () => {
    console.log(name)
})