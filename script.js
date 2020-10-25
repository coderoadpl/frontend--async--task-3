const loadScript = (src, callback) => {

    const script = document.createElement('script')
    script.src = src

    script.addEventListener(
        'load',
        callback
    )

    document.body.appendChild(script)

}

const runCalculations = () => {
    const addResult = add(10, 10) // 20
    const subtractResult = subtract(addResult, 4) // 16
    const multiplyResult = multiply(subtractResult, 1) // 16
    const divideResult = divide(multiplyResult, 2) // 8
    console.log(divideResult)
}

loadScript('./add.js', () => {
    loadScript('./subtract.js', () => {
        loadScript('./multiply.js', () => {
            loadScript('./divide.js', runCalculations)
        })
    })
})
