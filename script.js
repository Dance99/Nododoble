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

            if(this.head === this.tail){  //*
                this.head = null;
                this.tail = null;
            }else {
                this.head = this.head.next;
                this.head.prev = null;
            }

            console.timeEnd("timeElimInicio");

        }

    //* eliminar ultimo nodo
    //*complejidad: O(1)

    eliminarFinal(){
        console.time("timeElimFinal");

            if (!this.tail) {
                console.timeEnd("timeElimFinal");
                return;
            }
            if(this.head === this.tail){
                this.head = null;
                this.tail = null;z
            }else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }

            console.timeEnd("timeElimFinal");
        }

         //* eliminar en posicion especifica
         //*complejidad: O(n)
         

    eliminarPositionEsp(position){
        console.time("timeElimPosicionEsp");

        if (!this.head) {
            console.timeEnd("timeElimPosicionEsp");
            return;
        }
        if (position === 0) {
            this.eliminarInicio();
            console.timeEnd("timeElimPosicionEsp");
            return;

        }
        let actual = this.head;
        let indice = 0;

        while (actual && indice < position) {
            actual = actual.next;
            indice++;
        }

        if (!actual) {
            console.timeEnd("timeElimPosicionEsp");
            return;
        }

        if (actual === this.tail) {
            this.eliminarFinal();
            console.timeEnd("timeElimPosicionEsp");
            return;
        }

        //reemplazar nodos
        actual.prev.next = actual.next;
        actual.next.prev = actual.prev;

        console.timeEnd("timeElimPosicionEsp");
    }

    //*imprimir lista desde el inicio
    //*complejidad: O(n)
         imprimirDesdeInicio() {
            console.time("timeImpDesdeInicio");

        let actual = this.head;
        while (actual){
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
            actual = actual.prev;
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