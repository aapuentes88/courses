//API Practica Rick&Morty    
document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})

const fetchData = async () => {
    try {
        loadingData(true)

        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json()
        pintarCard(data)

    } catch (error) {
        console.log(error)
    } finally {
        loadingData(false)
    }
}

const loadingData = (estado) => {
    const loading = document.getElementById('loading')
    if (estado) loading.classList.remove('d-none')
    else loading.classList.add('d-none')
}

const pintarCard = (data) => {
    const cardsSection = document.getElementById('cards-dinamicas')
    cardsSection.textContent = ""
    const cardTemplate = document.getElementById('cardTemplate').content
    const frg = document.createDocumentFragment()
    data.results.forEach((item) => {
        const clone = cardTemplate.cloneNode(true)
        clone.querySelector('h5').textContent = item.name
        clone.querySelector('p').textContent = item.species
        clone.querySelector('.card-img-top').setAttribute("src", item.image)
        frg.appendChild(clone)
    })

    cardsSection.appendChild(frg)
}