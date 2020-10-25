// ReferenceError: add is not defined
// console.log(add)

const script = document.createElement('script')
script.src = './add.js'

document.body.appendChild(script)

// ReferenceError: add is not defined
// console.log(add)