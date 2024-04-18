const container = document.querySelector('#content')
let h1 = document.createElement('h1')
h1.textContent = 'cool restaurant'
let img = document.createElement('img')
img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/640px-Restaurant_N%C3%A4sinneula.jpg'
let p = document.createElement('p')
p.textContent = 'lorem ipsum dolor sit amet consectetur adipiscing elit'
function homepage() {
    container.appendChild(h1)
    container.appendChild(img)
    container.appendChild(p)
}

export default homepage