import { onSubmitFetch } from "./form"

const localStoreModalKey = 'MODAL'
const closeModalKeyID = 'close-modal'

export const shouldModalNotBeDisplayed = localStorage.getItem(localStoreModalKey)
export let hasBeenModalDisplayed = false

export const showModal = () => {
    if (shouldModalNotBeDisplayed || hasBeenModalDisplayed) return

    const modal = document.getElementsByTagName('dialog')[0]
    if (modal.open) return
    const closeButton = document.getElementById(closeModalKeyID)

    modal.showModal()
    hasBeenModalDisplayed = true

    //adding fetch to the modal form
    onSubmitFetch("form-newsletter", () => modal.close())

    closeButton.addEventListener('click', () => modal.close())
    modal.addEventListener('click', (e) => e.target.tagName === "DIALOG" && e.target.close())

    modal.addEventListener('close', () => localStorage.setItem(localStoreModalKey, 'displayed'))
}
