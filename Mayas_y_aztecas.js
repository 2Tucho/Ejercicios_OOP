/* Construye las siguientes clases:

Warrior:

    constructor(life, power): Establece el valor de las propiedades life y power
    attack: Devuelve el valor de power del guerrero
    defend(damage): resta el valor del parámetro recibido damage al valor de la propiedad life. Después, imprime el valor de la vida restante.

Maya: extiende de la clase Warrior

    constructor: Aquí establecemos los valores para el maya, que no hay que olvidar que es un guerrero.
    drinkColaCao: Suma 10 al poder.

Aztec: extiende de la clase Warrior

    constructor: Aquí establecemos los valores para el azteca, que no hay que olvidar que es un guerrero.
    drinkNesquik: Suma 10 a la vida.

Realiza la siguiente cadena de intercambio de golpes.
Azteca bebe nesquik
Maya bebe Cola Cao
Maya ataca a azteca. Azteca defiende.
Azteca ataca a maya. Maya defiende. */

class Warrior {
    constructor(life, power) {
        this.life = life;
        this.power = power;
    };

    attack(name) {
        console.log(`${name} le ha atizado una castañota con ${this.power} de poder`)
    };

    defend(damage, name) {
        this.life -= damage;
        console.log(`Después del topetazo a ${name} le quedan ${this.life} de vida`);
    };
};
let newWarrior = new Warrior(100,50);
/* console.log(newWarrior.life);
console.log(newWarrior.power);
newWarrior.attack();
newWarrior.defend(50); */

class Maya extends Warrior {
    constructor(life, power, name) {
        super(life, power);
        this.name = name;
    };

    drinkColaCao() {
        this.power += 10;
        console.log(this.name + " se ha trincado un ColaCao bien cargadito! +10 de poder para un total de " + this.power + "Atk")
    };
};

class Aztec extends Warrior {
    constructor(life, power, name) {
        super(life, power);
        this.name = name;
    };

    drinkNesquik() {
        this.life += 10;
        console.log(this.name + " se ha bebido un Nesquik fresquitou! +10 de vida para un total de " + this.life + "HP")
    };
};

let newMaya = new Maya(20, 20, "Alfonsete");
let newAztec = new Aztec(20, 20, "Manolón");

/* newAztec.drinkNesquik();
newMaya.drinkColaCao();

newAztec.defend(newMaya.power);
newMaya.defend(newAztec.power); */

let marianoMaya = new Maya(100,50,"Mariano");
let carletoAzteca = new Aztec(80,75,"Carleto");

marianoMaya.drinkColaCao();
carletoAzteca.drinkNesquik();

marianoMaya.attack(marianoMaya.name);
marianoMaya.defend(carletoAzteca.power, carletoAzteca.name);
carletoAzteca.attack(carletoAzteca.name);
carletoAzteca.defend(marianoMaya.power, marianoMaya.name);