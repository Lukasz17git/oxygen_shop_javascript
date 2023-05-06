
const formID = "form"
const uri = "https://jsonplaceholder.typicode.com/posts"

export const onSubmit = () => {
    const form = document.getElementById(formID)
    form.addEventListener('submit', (e) => {

        e.preventDefault()

        const formData = new FormData(e.target)
        const objData = Object.fromEntries(formData.entries())
        const jsonData = JSON.stringify(objData)

        fetch(uri, {
            method: 'POST',
            body: jsonData,
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        })
            .then(r => r.json())
            .then(json => console.log(json))
    })
}