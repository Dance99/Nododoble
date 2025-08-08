Lista Doblemente Enlazada en Java

Este proyecto implementa una lista doblemente enlazada en Java. Una lista doblemente enlazada es una estructura de datos lineal que permite el recorrido de elementos en ambas direcciones (hacia adelante y hacia atrás). Cada nodo en la lista contiene un valor, una referencia al siguiente nodo (next) y una referencia al nodo anterior (prev).

📦 Estructura del Proyecto

El código fuente principal se encuentra en el archivo:

DoublyLinkedList.java: Contiene la clase DoublyLinkedList con su clase anidada Nodo y todos los métodos para manipular la lista.

Este proyecto está escrito en Java puro y no requiere dependencias externas.

📚 Métodos Implementados

A continuación se detallan los métodos disponibles en la clase DoublyLinkedList.

Inserción
insertarInicio(int valor)

Complejidad: O(1) - Tiempo constante.

Qué hace: Inserta un nuevo nodo al comienzo de la lista.

Cómo funciona:

Crea un nuevo nodo con el valor proporcionado.

Si la lista está vacía (head es null), el nuevo nodo se convierte tanto en head (cabeza) como en tail (cola).

Si la lista no está vacía, el next del nuevo nodo apunta al head actual, y el prev del head actual apunta al nuevo nodo.

Finalmente, se actualiza el head para que sea el nuevo nodo.

insertarFinal(int valor)

Complejidad: O(1) - Tiempo constante.

Qué hace: Inserta un nuevo nodo al final de la lista.

Cómo funciona:

Crea un nuevo nodo.

Si la lista está vacía, el nuevo nodo se convierte en head y tail.

Si no es así, el next del tail actual apunta al nuevo nodo, y el prev del nuevo nodo apunta al tail actual.

Se actualiza el tail para que sea el nuevo nodo.

insertarEnPosicion(int valor, int posicion)

Complejidad: O(n) - Tiempo lineal.

Qué hace: Inserta un nodo en una posición específica (basada en índice 0).

Cómo funciona:

Si la posición es 0, llama a insertarInicio().

Recorre la lista desde el head hasta encontrar el nodo en la posición deseada.

Si la posición está fuera de los límites de la lista, inserta el nodo al final llamando a insertarFinal().

Si encuentra la posición, enlaza el nuevo nodo entre el nodo actual en esa posición y su nodo previo, actualizando correctamente las referencias next y prev.

Eliminación
eliminarInicio()

Complejidad: O(1) - Tiempo constante.

Qué hace: Elimina el primer nodo de la lista.

Cómo funciona:

Si la lista está vacía, no hace nada.

Si solo hay un nodo, establece head y tail a null.

Si hay más de un nodo, mueve el puntero head al siguiente nodo y establece la referencia prev del nuevo head a null.

eliminarFinal()

Complejidad: O(1) - Tiempo constante.

Qué hace: Elimina el último nodo de la lista.

Cómo funciona:

Si la lista está vacía, no hace nada.

Si solo hay un nodo, establece head y tail a null.

Si hay más, mueve el puntero tail al nodo anterior y establece la referencia next del nuevo tail a null.

eliminarEnPosicion(int posicion)

Complejidad: O(n) - Tiempo lineal.

Qué hace: Elimina el nodo en una posición específica.

Cómo funciona:

Si la posición es 0, llama a eliminarInicio().

Recorre la lista hasta encontrar el nodo en la posición deseada.

Si el nodo a eliminar es el último, llama a eliminarFinal().

Si se encuentra en medio de la lista, reajusta los punteros next y prev de los nodos vecinos para "saltarse" el nodo a eliminar.

Impresión
imprimirDesdeInicio()

Complejidad: O(n) - Tiempo lineal.

Qué hace: Imprime los valores de la lista desde el head hasta el tail.

Cómo funciona: Comienza en head y recorre la lista usando las referencias next, imprimiendo el valor de cada nodo.

imprimirDesdeFinal()

Complejidad: O(n) - Tiempo lineal.

Qué hace: Imprime los valores de la lista en orden inverso, desde el tail hasta el head.

Cómo funciona: Comienza en tail y recorre la lista hacia atrás usando las referencias prev, imprimiendo el valor de cada nodo.

📈 Medición de Rendimiento

Cada método en la clase DoublyLinkedList mide su propio tiempo de ejecución utilizando System.nanoTime(). Al finalizar la operación, imprime en la consola el tiempo transcurrido en nanosegundos (ns). Esto permite un análisis básico del rendimiento de cada operación.

🚀 Ejemplo de Uso

Para utilizar la clase, puedes crear una instancia y llamar a sus métodos desde un método main.

code
Java
download
content_copy
expand_less

`código` public class Main {
   `código`  public static void main(String[] args) {
       `código` DoublyLinkedList lista = new DoublyLinkedList();

        System.out.println("--- Insertando elementos ---");
        lista.insertarInicio(10);
        lista.insertarFinal(30);
        lista.insertarEnPosicion(20, 1); // Inserta 20 en el índice 1

        System.out.println("\n--- Imprimiendo lista ---");
        System.out.print("Desde el inicio: ");
        lista.imprimirDesdeInicio(); // Output: 10 20 30

        System.out.print("Desde el final: ");
        lista.imprimirDesdeFinal();   // Output: 30 20 10

        System.out.println("\n--- Eliminando elementos ---");
        lista.eliminarInicio();
        lista.eliminarFinal();
        lista.eliminarEnPosicion(0); // Elimina el único elemento restante

        System.out.println("\n--- Lista final ---");
        System.out.print("Desde el inicio: ");
        lista.imprimirDesdeInicio(); // Output: (vacío)
    }
}
💡 ¿Por Qué Usar una Lista Doblemente Enlazada?

A diferencia de las listas simplemente enlazadas, las listas doblemente enlazadas ofrecen ventajas clave:

Recorrido Bidireccional: Se puede navegar la lista tanto hacia adelante como hacia atrás de manera eficiente.

Eliminación Eficiente: La eliminación de un nodo es más sencilla si ya se tiene una referencia a él, ya que se puede acceder fácilmente al nodo anterior.

Son ideales para implementar estructuras de datos como pilas y colas, o en aplicaciones que requieren una navegación "anterior" y "siguiente", como el historial de un navegador web o la funcionalidad de deshacer/rehacer en un editor de texto.
