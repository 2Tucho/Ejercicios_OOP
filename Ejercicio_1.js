// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles() {
        console.log(`Hola! Soy ${this.nombre}, tengo ${this.edad} años y soy ${this.genero}`);
    }
}

let miPersona = new Persona("Alberto", 28, "hombre");
//miPersona.obtDetalles();

// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.
class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero); // Llama al constructor del padre
        this.curso = curso;
        this.grupo = grupo;
    }

    registrar() {
        console.log(`ESTUDIANTE:
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        Genero: ${this.genero}
        Curso: ${this.curso}
        Grupo: ${this.grupo}`);
    }
}

let miEstudiante = new Estudiante("Alberto", 28, "hombre", "Fullstack", "Unico");
//miEstudiante.registrar();
let estudianteAnonimo = new Estudiante("", "", "", "Fullstack", "Unico");
estudianteAnonimo.registrar();

// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.
class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.edad = edad;
        this.nivel = nivel;
    }

    asignar() {
        console.log(`PROFESOR: 
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        Genero: ${this.genero}
        Asignatura: ${this.asignatura}
        Nivel: ${this.nivel}`)
    };
}

let miProfesor = new Profesor("Alejandro", 35, "Hombre", "Fullstack", "Avanzado");
//miProfesor.asignar();

//Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía de clases.