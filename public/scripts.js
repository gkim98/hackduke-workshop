let first = document.getElementById('first');
first.addEventListener('click', () => {
    first.style.width = (parseInt(first.style.width.substring(0,3))+10).toString() + 'px'
})

let second = document.getElementById('second');
second.addEventListener('click', () => {
    second.style.color = 'red'
})

let third = document.getElementById('third');
third.addEventListener('click', () => {
    inputContainer.appendChild(document.createElement('input'))
})
let inputContainer = document.getElementById('input-container')

let fourth = document.getElementById('fourth');
fourth.addEventListener('click', () => {
    fourth.innerHTML = 'bam. changed it'
})




let fifth = document.getElementById('fifth');
fifth.addEventListener('click', () => {
    fifth.innerHTML = `<h1>rainbow</h1>
        <div style="display: inline-block; background-color: red; width: 30px; height: 30px;"></div>
        <div style="display: inline-block; background-color: orange; width: 30px; height: 30px;"></div>
        <div style="display: inline-block; background-color: yellow; width: 30px; height: 30px;"></div>
        <div style="display: inline-block; background-color: green; width: 30px; height: 30px;"></div>
        <div style="display: inline-block; background-color: blue; width: 30px; height: 30px;"></div>
    `
})

let sixth = document.getElementById('sixth')
sixth.addEventListener('click', () => {
    sixth.classList.add('round')
})