fun main() {

    print("Ingresa el primer numero: ")
    val num1: Float = readln().toFloat()

    print("Ingresa el segundo numero: ")
    val num2: Float = readln().toFloat()

    print("Ingresa un numero para elegir la operacion:\n1. Suma \n2. Resta\n3. Division\n4. Multiplicar\n\nIngresa el numero: ")
    val num3: Int = readln().toInt()

    if (num3 == 1) {
        print("El resultado es: " + (num1 + num2))
    }
    if (num3 == 2) {
        print("El resultado es: " + (num1 - num2))
    }
    if (num3 == 3) {
        print("El resultado es: " + (num1 / num2))
    }
    if (num3 == 4) {
        print("El resultado es: " + (num1 * num2))
    }

}


