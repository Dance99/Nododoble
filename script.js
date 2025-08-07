//*Elementos del nodo con punteros al anterior y siguiente.
class Nodo { 
    constructor(valor){
        this.valor = valor; //*valor que ingresaremos en cada nodo
        this.next = null;  //*Pasa al diguiente nodo
        this.prev = null; //*Pasa al nodo anterior

    }
}

//*Lista doblemente enlazada: Implementea una lista doblemente enlazada con operaciones,
//*basicas de insercion y eliminación en ambos extremos y en posiciones epscificas.
//*Estan diseñadas para mostrar la complejidad en tiempo.
class DoublyLinkedList {
    constructor(){
        this.head = null; //*la cabeza de la lista, marca el inicio(Cabeza)
        this.tail = null; //*la cola de la lista, marca el final(Cola)
    }

    //* insertar al inicio de la lista.
    //* complejidad: O(1), actualiza los punteros sin iterar

    insertarInicio(valor){
        console.time("timeInserInicio"); //* inicia el temporizador para ejecutar el metodo.

        const nuevoNodo = new Nodo(valor);
        if(!this.head) {            //*Lista vacía, por lo que significa que el nuevo nodo es tanto la cabeza como la cola.
            this.head = nuevoNodo;
            this.tail = nuevoNodo;
        } else {                    //*Lista no vacía, por lo que actualiza los punteros.
            nuevoNodo.next = this.head;
            this.head.prev = nuevoNodo;
            this.head = nuevoNodo;
        }

        console.timeEnd("timeInserInicio") //* termina el temporizador y muestra el tiempo transcurrido.
    }

    //*insertar al final de la lista.
    //*complejidad: O(1)

    insertarFInal(valor) {         
        console.time("timeInserFinal");  //* Temporizador para el tiempo de ejecucuion al insertar.

        const nuevoNodo = new Nodo(valor);
        if(!this.tail) {
            this.head = nuevoNodo;
            this.tail = nuevoNodo;
        } else {     //* Si ya tiene nodos, agrega el nuevo al final. 
            this.tail.next = nuevoNodo; 
            nuevoNodo.prev = this.tail;
            this.tail = nuevoNodo;         //* Actualiza la cola para que apunte al nuevo nodo.
        }

        console.timeEnd("timeInserFinal");
    }

    //* insertar en una posision especifica
    //*complejidad: O(n); sirve para insertar el nodo en la posicion especifica que se le de.

    insertarPosicionEsp(valor, position) {      //*inserta un nudo en la psicion especifica ya (0,1,2...).
        console.time("timeInserPosicionEsp"); 

        if(position === 0) {  //* Si la posición es 0, inserta al inicio.
            this.insertarInicio(valor);
            console.timeEnd("timeInserPosicionEsp");
            return;
        }
        let actual = this.head; //* Comienza desde la cabeza de la lista.
        let indice = 0;         //* Inicializa el índice para rastrear la posición actual.

        //*Recorre la lista hasta encontrar la posicion.

        while (actual && indice < position){
            actual = actual.next;
            indice++;
        }

        if (!actual) {
            this.insertarFInal(valor);
            console.timeEnd("timeInserPosicionEsp");
            return;
        }
        
        const nuevoNodo = new Nodo(valor);
        nuevoNodo.prev = actual.prev; //* El nuevo nodo apunta al nodo anterior(havia atrás).
        nuevoNodo.next = actual;    //* El nuevo nodo apunta al nodo actual(hacia adelante).

        if (actual.prev) {
            actual.prev.next = nuevoNodo;
        }else{
            this.head = nuevoNodo;
        }
        actual.prev = nuevoNodo;

        console.timeEnd("timeInserPosicionEsp");

    }

    //* eliminar primer nodo
    //*complejidad: O(1)

        eliminarInicio(){
            console.time("timeElimInicio");

            if (!this.head) {   //* Si la lista está vacía, no hay nada que eliminar.
                console.timeEnd("timeElimInicio");
                return;
            }

            if(this.head === this.tail){  //*La llsita solo tiene un nodo.
                this.head = null;       
                this.tail = null;
            }else {
                this.head = this.head.next; //* Actualiza la cabeza para que apunte al siguiente nodo.
                this.head.prev = null;   //* se quita el enlace hacia atras y desconecta el nodo eliminado.
            }

            console.timeEnd("timeElimInicio");

        }

    //* eliminar ultimo nodo
    //*complejidad: O(1): tiempo constante, porque no importa cuantos nodos haya, siempre se elimina en un solo paso.
    //*en inicio actualiza head y prev, y en final actualiza tail y next.

    eliminarFinal(){
        console.time("timeElimFinal");

            if (!this.tail) {   //* Si la lista está vacía, no hay nada que eliminar
                console.timeEnd("timeElimFinal");
                return;
            }
            if(this.head === this.tail){    //**La lista solo tiene un nodo.
                //* Si la lista solo tiene un nodo, se actualiza la cabeza y la cola a null, por lo que la lista queda vacia.

                this.head = null;
                this.tail = null;
            }else {
                this.tail = this.tail.prev;  //* Actualiza la cola para que apunte al nodo anterior.
                this.tail.next = null;  //* Se quita el enlace hacia adelante y desconecta el nodo eliminado.
            }

            console.timeEnd("timeElimFinal");
        }


         //* eliminar en posicion especifica
         //*complejidad: O(n)
         

    eliminarPositionEsp(position){
        console.time("timeElimPosicionEsp");

        if (!this.head) {   //* Si la lista está vacía, no hay nada que eliminar.
            console.timeEnd("timeElimPosicionEsp");
            return;
        }
        if (position === 0) {  //** Si la posición es 0, elimina al inicio.
            this.eliminarInicio();
            console.timeEnd("timeElimPosicionEsp");
            return;

        }
        let actual = this.head;
        let indice = 0;

        
        //*recorre la lista hasta encontrar la posicion; Este bucle avanza
        //  por la lista hasta que encuentra el nodo en la posición especificada o llega al final de la lista.
        while (actual && indice < position) {
            actual = actual.next;   //* Avanza al siguiente nodo.
            indice++;   //* Incrementa el índice.
        }

        if (!actual) {   
            console.timeEnd("timeElimPosicionEsp");
            return;
        }

        if (actual === this.tail) {   //* Si el nodo actual es la cola, elimina el último nodo.
            this.eliminarFinal();
            console.timeEnd("timeElimPosicionEsp");
            return;
        }

        //reemplazar nodos
        actual.prev.next = actual.next;  //* El nodo anterior al actual apunta al siguiente nodo del actual.
        actual.next.prev = actual.prev;  //* El siguiente nodo del actual apunta al nodo anterior al actual.

        console.timeEnd("timeElimPosicionEsp");
    }

    //*imprimir lista desde el inicio
    //*complejidad: O(n)
         imprimirDesdeInicio() {
            console.time("timeImpDesdeInicio");

        let actual = this.head;  //* Comienza desde la cabeza de la lista. 
        while (actual){  //** Recorre la lista hasta que no haya más nodos. 
            console.log(actual.valor);
            actual = actual.next;
        }

        console.timeEnd("timeImpDesdeInicio");
    }
    //* imprimir lista desde el final
    //*complejidad O(n)
    imprimirDesdeFinal() {
        console.time("timeImpDesdeFinal");

        let actual = this.tail;
        while (actual) {
            console.log(actual.valor);
            actual = actual.prev;  //* Recorre la lista hacia atrás hasta que no haya más nodos, yendo hacia atras.
        }

        console.timeEnd("timeImpDesdeFinal");
    }

   
}

const lista = new DoublyLinkedList();

lista.insertarInicio(10);
lista.imprimirDesdeInicio();

lista.insertarFInal(30);
lista.imprimirDesdeInicio();

lista.insertarPosicionEsp(20,1);
lista.imprimirDesdeInicio();


lista.imprimirDesdeInicio();
lista.imprimirDesdeFinal();


lista.eliminarInicio();       // Elimina 10
lista.imprimirDesdeInicio();

lista.eliminarFinal();        // Elimina 30
lista.imprimirDesdeInicio();

lista.eliminarPositionEsp(0); // Elimina 20 (ahora en posición 0)

lista.imprimirDesdeInicio();
lista.imprimirDesdeFinal();



//**
//  1. ¿Qué es la notación Big O?
//La notacion big O -Grande se usa para describir laq complejidad del akgoritmoen terminos de tiempo y espacio.
// Es una forma de expresar el rendimiento de un algoritmo en función del tamaño de la entrada,
// en complejidad temporal mide el tiempo que tarda en ejercutarse.
// Y en complajidad espacial  mide la memoria que utiliza.

//2. ¿Cuál es la diferencia entre O(1) y O(n)?
//O(1) es una complejidad constante, lo que significa que el tiempo de ejecución no cambia con el tamaño de la entrada.
//O(n) es una complejidad lineal, lo que significa que el tiempo de ejecución aumenta linealmente con el tamaño de la entrada.
//Por ejemplo, si tienes un algoritmo O(1), siempre tomará el mismo tiempo para ejecutarse, independientemente de cuántos elementos tenga.
//En cambio, un algoritmo O(n) tomará más tiempo a medida que aumente el número de elementos.

//3. ¿Por qué es importante entender la notación Big O al diseñar algoritmos?
// Comparar la eficiencia de diferentes algoritmos y estructuras de datos.
// Ayuda a tomar decisiones informadas sobre qué algoritmo utilizar en función de los requisitos de tiempo y espacio.
// Facilita la comunicación entre desarrolladores al describir el rendimiento de un algoritmo de manera estandarizada.

//**
// Preguntas de Reflexión
// Responde brevemente las siguientes preguntas:
// 1. ¿Qué ventajas ofrece una lista doblemente enlazada frente a una lista 
// simplemente enlazada?
// Las ventajas de la lista doblemente enlazada son:
// -- tienen un recorrido en ambas direcciones.
// --Eliminacion de un nodo de manera eficiente.
// --inserciones de nodos mas rápidas.
// -- ideal para estructuras complejas.
// -- Su única desventaja es que usa mas memoria al usar enlaces dobles en cada nodo.

// 2. ¿Qué pasaría si no consideraras la eficiencia de tus algoritmos al trabajar con 
// grandes volúmenes de datos?
// Si no se considera la eficiencia del algoritmo al trabajar se puede retardar el tiempo que tarda y la cantidad de memoria que necesita para resolver el problema.
// Si no se considera la eficiencia el sistema se puede  volver lento, también puede haber uso excesivo de recursos, problemas con el usuario, generar costos elevados. */