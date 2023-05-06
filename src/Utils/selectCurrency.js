
const selectID = 'prices'

const packs = {
    basic: {
        id: 'basic-pack',
        value: 0
    },
    professional: {
        id: 'professional-pack',
        value: 25
    },
    premium: {
        id: 'premium-pack',
        value: 60
    }
}

export const prices = {
    EUR: 1,
}

const currencySymbols = {
    EUR: '€',
    USD: '$',
    GBP: '£'
}

export const addListenerToSelectCurrency = (id = selectID) => {
    const select = document.getElementById(id)
    select.addEventListener('change', (e) => {
        const currency = e.target.value
        const currencySymbol = currencySymbols[currency] ?? ''
        const currencyMultiplier = prices[currency]
        const packList = Object.values(packs)
        const packDomElements = []
        for (const pack of packList) {
            const dom = document.getElementById(pack.id)
            packDomElements.push(dom)
        }
        for (let i = 0; i < packList.length; i++) {
            const packPrice = packList[i].value
            const domPack = packDomElements[i]
            const convertedPrice = packPrice * currencyMultiplier
            domPack.textContent = currencySymbol + Number(Math.round(convertedPrice + 'e' + 2) + 'e-' + 2).toString()
        }
    })
}

