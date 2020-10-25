const loadScript = (src, callback) => {

    const script = document.createElement('script')
    script.src = src
    
    script.addEventListener(
        'load',
        callback
    )

    document.body.appendChild(script)

}

loadScript('./add.js', () => {
    console.log(add)
    console.log(add(1, 2))
})