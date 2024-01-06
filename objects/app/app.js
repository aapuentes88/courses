//objetos literales  -------------------------------------------------------------
const gato = {
    nombre: 'valiente',
    duerme: true,
    edad: 3,
    enemigos: ['agua', 'perros'],
    //objetos anidados
    otros: {
        amigos: ["Cobarde", "Tímido", "Pegajoso"],
        favoritos: {
            comida: {
                fria: "salmón",
                caliente: "pollo"
            }
        }
    },
    //funciones (metodos)
    comer: function () {
        console.log("Ahora está comiendo");
    },
    //funciones (metodos) moderno --- uso del this
    comerDos(comida) {
        return `${this.nombre} está comiendo ${comida}`;
    },
    //funciones flechas dentro de (metodos) y no como (metodos)
    mostrarEnemigos() {
        return this.enemigos.forEach((item) => console.log(item));
    },
};

console.log(gato.nombre)

console.log(gato.otros.amigos[0])
console.log(gato.otros.favoritos.comida.fria)

gato.comer()
console.log(gato.comerDos('pez'))
gato.mostrarEnemigos()

//recorrer objetos For ... in --------------------------------------------------
for (const propiedad in gato) {
    console.log(gato[propiedad]);
}

//recorrer objetos   Object.values ----------------------------------------------
Object.values(gato).forEach((item) => console.log(item));

//destructuring ------------------------------------------------------------------
const { nombre: nombreGato, duerme, edad, enemigos, color = 'azul' } = gato;
console.log(nombreGato, duerme, edad, color);

//new Object() --- Deprecated
const personaUno = new Object();
personaUno.nombre = "Ignacio";
personaUno.saludar = function () {
    return `${this.nombre} dice hola!`;
};

console.log(personaUno.saludar());