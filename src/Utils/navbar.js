
const burgerID = 'burger'
const navbarWrapperID = 'navbar__wrapper'
const navbarWrapperOn = 'navbar__wrapper--on'
const linksClassName = 'navbar__links'



export const addBurgerFunctionality = () => {
    const burger = document.getElementById(burgerID)
    burger.addEventListener('click', () => {
        const navbar = document.getElementById(navbarWrapperID)
        navbar.classList.toggle(navbarWrapperOn)
    })
}


export const addLinksFunctionality = () => {
    const links = document.getElementsByClassName(linksClassName)
    const childs = links[0].children

    for (const li of childs) {
        const link = li.children[0]
        link.addEventListener('click', () => {
            const navbar = document.getElementById(navbarWrapperID)
            navbar.classList.toggle(navbarWrapperOn)
        })
    }
}