//funciones declarativas -------------------------------------------------------
console.log('declarativas ' + numeroAleatorio(10, 20))
function numeroAleatorio(min, max) {
    return Math.floor((Math.random() * (max - min)) + min)
}

//funciones expresivas (Anonimas) -----------------------------------------------
const numAlzar = function (min, max) {
    return Math.floor((Math.random() * (max - min)) + min)
}
console.log('Anonimas ' + numAlzar(10, 20))

//funciones flecha --------------------------------------------------------------
const azarFlecha = (min, max) => Math.floor((Math.random() * (max - min)) + min)
console.log('flecha ' + azarFlecha(10, 20))

//funciones constructoras = Plantilla => class
function Persona(nombre) {
    this.nombre = nombre,
        this.saludar = function () {
            return `${this.nombre} dice hola`
        }
}

//Remplazando el Prototype por defecto de Persona
Persona.prototype = {
    nombre: null,  // No deberíamos atacar nombre desde el prototipo como haciendo nada?
    // Tal vez intentando una optimización al asignar espacios ocultos en las clases?
    // https://developers.google.com/speed/articles/optimizing-javascript#Initializing instanciar variables
    // podría ser válido si nombre no fuera inicializado únicamente por cada instancia.
    doSomething: function () {
        // ...
    }
}

//Cadena prototipo (Base de JavaScript) --- Pregunta en entrevista de trabajo
Persona.prototype.saludarIngles = function () {
    return `${this.nombre} say hi`
}

const p = new Persona('albe')
console.log(p)
console.log(p.saludar())
console.log(p.saludarIngles())
