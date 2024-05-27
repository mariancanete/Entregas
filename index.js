// Creo clases y hardcodeo productos.

 class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;

        this.update_stock = function(sold) {
            this.stock -= sold;
            if (this.stock < 0) {
                alert("No hay stock del producto.");
            }
        }
    this.showProduct = function() {
        return "Producto: " + this.name + ", " + "Precio: $" + this.price + ", " + "Stock:" + " " + this.stock;
    };
    }

 }

 const PRODUCT_1 = new Product("Arroz", "123ARR", 1100, 7)
 const PRODUCT_2 = new Product("Leche", "124LCH", 1900, 15)
 const PRODUCT_3 = new Product("Carne", "554CRN", 6500, 20)
 const PRODUCT_4 = new Product("Pollo", "987PLL", 5500, 30)

// PRODUCT_1.update_stock(3);
// console.log(PRODUCT_1.stock);

// Empezando carrito.

alert("Bienvenido a la tienda online de Almacen JS.")

let cart = ("Carrito: ");
let total = ("Total:$ ");

// Funcion para mostrar todos los productos.
function showProduct() {
    let productList = "Lista de productos:\n"
    productList += PRODUCT_1.showProduct() + "\n";
    productList += PRODUCT_2.showProduct() + "\n";
    productList += PRODUCT_3.showProduct() + "\n";
    productList += PRODUCT_4.showProduct() + "\n";
    productList += "\n" + cart + "\n" + total + "\n";
    alert(productList)
}

// Funcion para comprar y agregar al carrito.
function buyProduct() {
    let Product = prompt("Ingrese el nombre del producto que desea comprar: ");
    let Quantity = parseInt(prompt("Ingrese la cantidad de productos que desea comprar: "));
    switch (Product) {
        case PRODUCT_1.name:
            PRODUCT_1.update_stock(Quantity);
            cart += PRODUCT_1.name + " " + Quantity + "\n";
            break;
        case PRODUCT_2.name:
            PRODUCT_2.update_stock(Quantity);
            cart += PRODUCT_2.name + " " + Quantity + "\n";
            break;
        case PRODUCT_3.name:
            PRODUCT_3.update_stock(Quantity);
            cart += PRODUCT_3.name + " " + Quantity + "\n";
            break;
        case PRODUCT_4.name:
            PRODUCT_4.update_stock(Quantity);
            cart += PRODUCT_4.name + " " + Quantity + "\n";
            break;
        default:
            alert("Ingrese un producto valido.");
            break;
    }
}

// Funcion para sumar precios de items del carrito.
function calculateTotalPrice(cart) {
    let total = 0;
    for (let product of cart){
        total += product.price;
    }
    return total;
}

let total_cart = calculateTotalPrice(cart);

// Iniciar compra - Crear el while con el menu y utilizar switch and case.

let userInput = prompt("Ingrese una opcion:\n1. Para ver la lista de productos\n2. Salir");
while (userInput !== "2") {
    switch (userInput) {
        case "1":
            showProduct();
            buyProduct();
        break;
        case "2":
            alert("Gracias por su compra.");
            break;
        default:
            alert("Ingrese una opcion valida.");
            break;
    }
    userInput = prompt("Ingrese una opcion:\n1. Para ver la lista de productos\n2. Salir");
}

alert("Gracias por su compra.");