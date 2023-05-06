const percentageScrollID = 'percentage-scroll'

export const addPercentageScrollBar = () => {
    document.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight
        const windowWidth = window.innerWidth
        const maxOffset = document.body.scrollHeight - windowHeight
        const currentOffset = window.scrollY
        const offsetPercentage = currentOffset / maxOffset
        const newScrollBarWidth = Math.trunc(windowWidth * offsetPercentage)
        requestAnimationFrame(() => {
            const percentageScrollBar = document.getElementById(percentageScrollID)
            percentageScrollBar.style.width = newScrollBarWidth + 'px'
        })
    })
}