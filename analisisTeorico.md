1. Diferencias, desventajas y ventajas entre funciones constructoras con prototype y class

En el caso de las funciones prototype, nos encontramos con las ventajas de tener un mayor control sobre los métodos que queremos definir y además ser compatible con versiones anteriores de Javascript.
Como desventajas está el hecho de tener una sintaxis mas verbosa y bastante poco intuitiva, esto complica a los desarrolladores que se encuentran por primmera vez con este tipo de funciones constructoras

Las funciones constructoras Class como ventajas tienen el hecho de ser mas modernas, com una sintaxis mas simple y legible para el desarrollador al agrupar constructor y métodos de forma mas ordenadda

La diferencia enntre estos 2 está en que la Funciión Prototype es de un "nivel mas bajo" y es mas verbosa aunque también tiene mayor control que las Class, pero estas son mas modernas y legibles, contando con una herencia mas simple (permite la utilización de *extends* para la herencia mas sencilla)



2. Entre las ventajas de usar Getters y Setters nos encontramos las siguientes:
- La encapsulación: Esto nos permite controlar el como se accede y modifica una *propiedad*
- Validación de datos: Pueden validar valores antes de asignarlos
- Compatibilidad futura: Si en caso de que necesites una lógica extra para leer o escribir, podes agregarla sin cambiara la API Pública.

3. Los problemas al modificar prototipos nativos como String pueden ser:
- Conflictos de nombre: Si un método que agregas tiene el mismo nombre que uno futuro del estándar... se puede romper el código
- Dificultad de mantenimiento: Otros desarrolladores no se esperan que un prototipo nativo venga con métodos personalizados
- Rendimiento: El motor de JS puede perder las optimizaciones internas
- Impacto Global: Afecta a todos los strings del programa (además de a las librerías externas)

4. Diferencia entre asignar un método al *prototype* o usar *Object.assign*:

#### Si tuvieramos un prototipo base de un Vehículo como {
    const vehiclePrototype = {
  start() {
    console.log(`${this.brand} arrancó.`);
  },
  stop() {
    console.log(`${this.brand} se detuvo.`);
  }
}
}

#### Podríamos asignar un método directamente al prototype
{

    function Car(marca) {
  this.marca = marca;
}

Car.prototype.start = vehiclePrototype.start;

const auto1 = new Car("Toyota");
auto1.start(); // Toyota arrancó.
auto1.stop.(); // undefined

}

- Acá copiamos un método específico
- Pero si queremos *stop*, tenermos que asignarlo manualmente

#### Si usamos *Object.assign*

{

function Car(brand) {
  this.brand = brand;
}

Object.assign(Car.prototype, vehiclePrototype);

const auto2 = new Car("Honda");
auto2.start(); // Honda arrancó.
auto2.stop();  // Honda se detuvo.


}

- Copiamos todos los métodos de una sola vez.
- Si Car.prototype ya tenía un método start, se sobrescribirá sin avisar.


Asignar directamente: Control mas fino, uno por uno
Object.assign: Más rápido para importar varios métodos, pero menos controlado