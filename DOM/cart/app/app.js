//Practica DOM --------------------------------------------------------------
const idTemplate = document.getElementById('idTemplate')
const car = document.querySelector('#carrito')
const frgment = document.createDocumentFragment()
const addBtn = document.querySelectorAll('.card button')

const fooTemplate = document.getElementById('templateFooter')
const footer = document.querySelector('footer')

document.addEventListener('click', (e) => {
    // e.preventDefault()

    if (e.target.matches('.card .btn-primary'))
        // console.log(`click ${e.target.dataset.fruta}`)
        addBtnClicked(e)

    if (e.target.matches('.list-group-items .btn-danger'))
        deleteProduct(e)

    if (e.target.matches('.list-group-items .btn-success'))
        insertProduct(e)
})

const objCar = {} //trabajando con Objetos literales
let arrCar = [] //trabajando con Arreglos
const addBtnClicked = (e) => {

    const objProd = {
        id: e.target.dataset.fruta,
        name: e.target.dataset.fruta,
        price: parseInt(e.target.dataset.precio),
        count: 1
    }

    // if (objCar.hasOwnProperty(objProd.id)) {
    //     objCar[objProd.id].count++
    // } else {
    //     objCar[objProd.id] = objProd
    // }

    if (arrCar.some((oP) => oP.id === objProd.id)) {
        //arrCar[objProd.id].count++
        const index = arrCar.findIndex((oP) => oP.id === objProd.id)
        arrCar[index].count++
        // arrCar[index].precio = arrCar[index].count * objProd.precio
        console.log(`count++`)
    } else {
        arrCar.push(objProd)
        console.log(`push `)
    }


    paintCar()
    console.log(objCar)
    console.log(arrCar)

}

const deleteProduct = (e) => {
    arrCar = arrCar.filter((product) => {
        if (product.id === e.target.dataset.id) {
            if (product.count > 0) {
                product.count--
                if (product.count === 0) return
                return product

            }
        }
        else {
            return product
        }
    })

    paintCar()
}

const insertProduct = (e) => {

    arrCar = arrCar.map((product) => {
        if (product.id === e.target.dataset.id) {
            product.count++
        }
        return product
    })

    paintCar()
}
// addBtn.forEach(btn => btn.addEventListener('click', addBtnClicked))

const paintCar = () => {

    carrito.textContent = "";

    // Object.values(objCar).forEach(product => {
    arrCar.forEach(product => {
        const tmpClone = idTemplate.content.cloneNode(true)
        const spans = tmpClone.querySelectorAll('span')
        const total = tmpClone.querySelector('div .lead span')
        spans[0].textContent = product.name
        spans[1].textContent = product.count
        total.textContent = product.count * product.price
        console.log(`total.content  ${total.textContent}`)

        tmpClone.querySelector('.list-group-items .btn-danger').dataset.id = product.id
        tmpClone.querySelector('.list-group-items .btn-success').dataset.id = product.id

        frgment.appendChild(tmpClone)
    })

    car.appendChild(frgment)

    paintFooter()
}

const paintFooter = () => {

    footer.textContent = "";
    const tmpClone = fooTemplate.content.firstElementChild.cloneNode(true)
    const spans = tmpClone.querySelector('span')
    // const frg = document.createDocumentFragment() No es necesario no hay loop ni reflow 

    spans.textContent = arrCar.reduce((acc, value) => acc + value.count * value.price, 0)
    // spans.textContent = 100
    // frg.appendChild(tmpClone)
    footer.appendChild(tmpClone)

}