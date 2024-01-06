const fruta = window.prompt('ingrese una fruta a su carito')
// const prompt=require("prompt-sync")({sigint:true})
// prompt('ingrese una fruta a su carito')
const frutas = []
frutas.push(fruta)

let accept = confirm('Desea comprar otra fruta')

while (accept) {
    const fruta = prompt('ingrese una fruta a su carito')
    frutas.push(fruta)
    accept = confirm('Desea comprar otra fruta')
}

console.log(`Usted compro:
                   ${frutas.map(f => f)}`)
