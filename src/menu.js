function createMenu(mainContainer) {
    const container = document.createElement('div')
    container.classList.add('menuContainer')
    let header = document.createElement('h1')
    header.classList.add('header')
    header.textContent = 'lorem ipsum'
    let para = document.createElement('p')
    para.classList.add('para')
    para.textContent = 'lorem ipsum dolor sit amet consectetur adipiscing elit'
    const img = document.createElement('img')
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/640px-Restaurant_N%C3%A4sinneula.jpg'
    img.classList.add('menuImg')

    mainContainer.appendChild(container)
    for (let i = 0;i < 3;i++) {
        container.appendChild(header)
        container.appendChild(img)
        container.appendChild(para)
    }
}
export default createMenu