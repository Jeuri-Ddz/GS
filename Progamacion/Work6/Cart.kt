class Cart {
    var items = mutableListOf<Pair<String, Double>>()
    var d = 0.0

    fun addItem(n: String, p: Double) {
        items.add(Pair(n, p))
    }

    fun calc(): Double {
        var t = 0.0
        for (i in items) {
            t = t + i.second
        }
        if (d > 0) {
            t = t - (t * d / 100)
        }
        return t
    }

    fun applyDiscount(code: String) {
        if (code == "STUDENT10") {
            d = 10.0
        }
        if (code == "STUDENT20") {
            d = 20.0
        }
        if (code == "VIP") {
            d = 30.0
        }
    }

    fun printReceipt() {
        var t = 0.0
        for (i in items) {
            t = t + i.second
        }
        println("Total: " + t)
        println("Items: " + items.size)
    }
}

fun main() {
    val c = Cart()
    c.addItem("Teclat", 25.99)
    c.addItem("Ratolí", 15.5)
    c.addItem("Monitor", -20.0)
    c.applyDiscount("STUDENT30")
    println(c.calc())
    c.printReceipt()
}