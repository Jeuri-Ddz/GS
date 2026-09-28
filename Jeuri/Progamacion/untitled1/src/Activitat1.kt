fun main() {
    print("Ingresa tu nombre: ")
    val nombre: String = readln()
    print("Ingresa tu edad: ")

    val edad: Int = readln().toInt()

    print(nombre + " te faltan " + (100 - edad) + " años para llegar a 100 años.")

}


