const toTopID = "to-top"

export const addDelayedScroll = (elementID = toTopID) => {
    document.getElementById(elementID).addEventListener('click', (e) => {
        e.preventDefault()
        setTimeout(() => {
            window.scrollTo({ top: 0, left: 0 })
            window.history.pushState('', '', '/')
        }, 200)
    })
}
