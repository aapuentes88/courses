nombre = 'Adolfo'
function suma(x, y) { 
  console.log("Suma")
  console.log(this)
  return x + y
}

class Persona {
  nombre = 'Albe'

  saludar() {
    
    const f = function(){
       console.log(`Hola, probando ${this.nombre}`)
    }

    console.log(`------------this dentro de un metodo-------------`);
    console.log(`Hola, soy ${this.nombre}.`);
    // console.log(`------------this dentro de una funcion dentro de un metodo ------------`);
    // f() //comentado porque da error n existe this.nombre en este escenario
    console.log(`------------this dentro de una funcion dentro de un metodo usando call-------------`);
    f.call(this)
    
  }

   sumar(suma){
   console.log("Sumar")
   console.log(this)

   suma(2, 2)
  
  }
}

const p = new Persona()
p.saludar()
p.sumar(suma)


const persona = {
  nombre: 'Albe',
  saludar: function() {

    const f = function(){
       console.log(`Hola, probando ${this.nombre}`)
    }
   //    console.log(`Hola, ${this.nombre}`);
   //    f()
   return f
  }
};

persona.saludar()


const persona1 = {
  nombre: 'Juan',
  saludar: function() {
    console.log(`Hola, soy ${this.nombre}`);
  },
  saludarConContexto: function() {
    const saludarFunc = () => {
      this.saludar(); // Usamos una función de flecha para mantener el contexto
    };
    saludarFunc();
  }
};

persona1.saludarConContexto(); // "Hola, soy Juan"

