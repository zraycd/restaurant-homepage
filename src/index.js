import createMenu from "./menu"
import './style.css'
import home from "./home"
import about from "./about"

const mainContainer = document.querySelector('#content')

home(mainContainer)
function removeBodyContent() {
    mainContainer.childNodes.forEach(node => {
        node.remove()
    })
}
document.querySelector('header').addEventListener('click', (event) => {
    if (event.target.textContent === 'Home') {
        removeBodyContent()
        home(mainContainer)
    } else if (event.target.textContent === 'Menu') {
        removeBodyContent()
        createMenu(mainContainer)
    } else if (event.target.textContent === 'About') {
        removeBodyContent()
        about(mainContainer)
    }
})