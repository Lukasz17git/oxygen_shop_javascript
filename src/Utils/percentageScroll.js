import { showModal, hasBeenModalDisplayed, shouldModalNotBeDisplayed } from "./modal"

const percentageScrollID = 'percentage-scroll'

const getScrollValues = () => {
    const windowHeight = window.innerHeight
    const windowWidth = window.innerWidth
    const maxOffset = document.body.scrollHeight - windowHeight
    const currentOffset = window.scrollY
    const offsetPercentage = currentOffset / maxOffset
    const newScrollBarWidth = Math.trunc(windowWidth * offsetPercentage)
    return { offsetPercentage, newScrollBarWidth }
}

const updateScrollBar = (newScrollBarWidth) => {
    const percentageScrollBar = document.getElementById(percentageScrollID)
    percentageScrollBar.style.width = newScrollBarWidth + 'px'
}

const handleModal = (offsetPercentage) => {
    if (shouldModalNotBeDisplayed || hasBeenModalDisplayed) {
        document.removeEventListener('scroll', scrollListenerWithModal)
        document.addEventListener('scroll', scrollListener)
        return
    }
    if (offsetPercentage > 0.25) showModal()
}

const scrollListener = () => {
    const { newScrollBarWidth } = getScrollValues()
    requestAnimationFrame(() => {
        updateScrollBar(newScrollBarWidth)
    })
}

const scrollListenerWithModal = () => {
    const { newScrollBarWidth, offsetPercentage } = getScrollValues()
    requestAnimationFrame(() => {
        updateScrollBar(newScrollBarWidth)
        handleModal(offsetPercentage)
    })
}

export const addPercentageScrollBar = () => {
    document.addEventListener('scroll', shouldModalNotBeDisplayed ? scrollListener : scrollListenerWithModal)
}