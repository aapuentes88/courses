//Class
//Mega Practica
//Mega Practica
const practicform = document.querySelector("#practicform");
const cardsEstudiantes = document.querySelector("#cardsEstudiantes");
const cardsProfesores = document.querySelector("#cardsProfesores");
const templateEstudiante = document.querySelector("#templateEstudiante").content;
const templateProfesor = document.querySelector("#templateProfesor").content;

class Person {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
        this.uid = `${Date.now()}`;
    }

    get getNombre() {
        return this.nombre
    }

    set setNombre(nombre) {
        this.nombre = nombre
    }

    static agregarPersonaUI = function (personas, tipo) {
        if (tipo === 'Estudiante') {
            cardsEstudiantes.textContent = ""
            const frg = document.createDocumentFragment()
            personas.forEach((item) => {
                frg.appendChild(item.agregarNuevoEstudiante())
            })
            cardsEstudiantes.appendChild(frg)
        } 
        
        if (tipo === "Profesor") {
            cardsProfesores.textContent = "";
            const frg = document.createDocumentFragment();
            personas.forEach((item) => {
                frg.appendChild(item.agregarNuevoProfesor());
            });
            cardsProfesores.appendChild(frg);
        }
    }

    saludar = function () {
        return `${this.nombre} saluda`
    }

    static probandoSaludo(nombre) { //metodo de clase ...no de instancias
        return `${nombre} prueba saludo`
    }
}

// Revisa esto y verás que están al mismo nivel que los métodos:
// No es necesario los metodos de las clases se guardan en la cadena de prototipo del objeto
Person.prototype.saludarIngles = function () {
    return `${this.nombre} says hi!`;
}

//herencia
class Estudiante extends Person {

    constructor(nombre, edad, estado, estudiante, notas = []) {
        super(nombre, edad) //super ..llamando el constructor de la clase padre
        this.estado = estado
        this.estudiante = estudiante
        this.notas = notas
    }
    // #notas = [] //private field se accede mediante get y set ..

    set setNotas(nota) {
        this.notas.push(nota)
    }

    get getNotas() {
        return this.notas
    }

    set setEstado(estado) {
        this.estado = estado
    }

    get getEstudiante() {
        return this.estudiante
    }

    agregarNuevoEstudiante = function () {
        const clone = templateEstudiante.cloneNode(true)
        clone.querySelector('h5 .text-primary').textContent = this.nombre
        clone.querySelector('h6').textContent = this.getEstudiante
        clone.querySelector('p').textContent = this.edad

        if (this.estado) {
            clone.querySelector(".badge").className = "badge bg-success";
            clone.querySelector(".btn-success").disabled = true;
            clone.querySelector(".btn-danger").disabled = false;
        } else {
            clone.querySelector(".badge").className = "badge bg-danger";
            clone.querySelector(".btn-danger").disabled = true;
            clone.querySelector(".btn-success").disabled = false;
        }
        clone.querySelector(".badge").textContent = this.estado
            ? "Aprobado"
            : "Reprobado";

            // reemplaze por uid
        clone.querySelector(".btn-success").dataset.uid = this.uid;
        clone.querySelector(".btn-danger").dataset.uid = this.uid;

        return clone
    }

    saludar = function () { //Polimorfismo suplantacion de metodo funcionar
        return `${this.nombre} estudiante dice hola`
    }
}

class Profesor extends Person {
    constructor(nombre, edad, profesor) {
        super(nombre, edad)
        this.profesor = profesor
    }

    agregarNuevoProfesor() {
        const clone = templateProfesor.cloneNode(true);
        clone.querySelector("h5").textContent = this.nombre;
        clone.querySelector("h6").textContent = this.profesor;
        clone.querySelector(".lead").textContent = this.edad;
        return clone;
    }
}
const person = new Estudiante('albert', 34)
const person1 = new Profesor('albert', 34)
person.setNotas = 7
person.setNotas = 5
person.setNotas = 3
console.log(person)
console.log(person1)
console.log(person.saludar())
console.log(Person.probandoSaludo('static'))

const estudiantes = []
const profesores = []
const alert = document.getElementById('alertForm')

practicform.addEventListener('submit', e => {
    e.preventDefault()
    const datos = new FormData(practicform)

    const [nombre, edad, opcion] = [...datos.values()]

    console.log(opcion)
    if(!nombre.trim() || !edad.trim() || !opcion.trim()) {
        console.log('algun campo en blanco')
        alert.classList.remove('d-none')
        return 
    } else {
        alert.classList.add('d-none')
    }

    if (opcion === "Estudiante") {
        const estudiante = new Estudiante(nombre, edad, false, opcion)
        estudiantes.push(estudiante)
        Person.agregarPersonaUI(estudiantes, opcion)
        console.log(estudiantes)
    }
    
    if (opcion === "Profesor") {
        const profesor = new Profesor(nombre, edad, opcion)
        profesores.push(profesor)
        Person.agregarPersonaUI(profesores, opcion)
        console.log(profesores)
    }
})

document.addEventListener("click", (e) => {
    // preguntamos por uid
    if (e.target.dataset.uid) {
        if (e.target.matches(".btn-success")) {
            estudiantes.map((item) => {
                // modificamos en caso de que sea true
                if (item.uid === e.target.dataset.uid) {
                    item.setEstado = true;
                }
                // console.log(item);
                return item;
            });
        }
        if (e.target.matches(".btn-danger")) {
            estudiantes.map((item) => {
                if (item.uid === e.target.dataset.uid) {
                    item.setEstado = false;
                }
                console.log(item);
                return item;
            });
        }
        Person.agregarPersonaUI(estudiantes, "Estudiante");
    }
});