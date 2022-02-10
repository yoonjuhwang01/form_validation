const name = documnet.getElementById('name')
const password = documnet.getElementById('password')
const form = documnet.getElementById('form')
const errorElement = document.getElementById('error')


form.addEventListener('submit', (e) => {
    let messages=[]
    if (name.value === '' || name.value == null){
        messages.push('Name is required')
    }

    if (messages.length>0){
        e.preventDefault()
        errorElement.innerText = message.join(', ')

    }
    e.preventDefault()
})