
import { prices } from "./selectCurrency"

const selectID = 'prices'
const usdUri = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/usd.json'
const gbpUri = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/gbp.json'

export const getPricesAndAddToSelect = async () => {
    try {
        const fetchedPrices = await Promise.all([fetch(usdUri).then(r => r.json()), fetch(gbpUri).then(r => r.json())])
        const fragment = document.createDocumentFragment()
        for (const price of fetchedPrices) {
            const { date, ...onlyPrice } = price
            const [name, value] = Object.entries(onlyPrice)[0]
            const uppercaseName = name.toUpperCase()
            const option = document.createElement("option")
            option.value = option.textContent = uppercaseName
            prices[uppercaseName] = value
            fragment.appendChild(option)
        }
        const select = document.getElementById(selectID)
        select.appendChild(fragment)

    } catch (error) {
        alert('error while requesting usd and gbp prices to the server')
    }
}