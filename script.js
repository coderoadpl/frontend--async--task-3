// ReferenceError: add is not defined
// console.log(add)

const script = document.createElement('script')
script.src = './add.js'

document.body.appendChild(script)

// ReferenceError: add is not defined
// console.log(add)

script.addEventListener(
    'load',
    () => {
        console.log(add)
        console.log(add(1, 2))
    }
)

console.log('I will be first!')