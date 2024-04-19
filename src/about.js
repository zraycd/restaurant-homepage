function about(mainContainer) {
    const container = document.createElement('div')
    container.classList.add('menuContainer')
    let header = document.createElement('h1')
    header.classList.add('header')
    header.textContent = 'About'
    let para = document.createElement('p')
    para.classList.add('para')
    para.textContent = 'epic body text content below the header tag of the header with the text content of epic header haha very cool nice super extravagant perfect cute'

    mainContainer.appendChild(container)

    container.appendChild(header)
    container.appendChild(para)
}

export default about