const Ecommerces= function Ecommerces(){


function Ecommerce() {
    this.products = [];
}

Ecommerce.prototype.addProduct = function(product) {
    this.products.push(product);
}

Ecommerce.prototype.removeProduct = function(product) {
    this.products.splice(this.products.indexOf(product), 1);
}

Ecommerce.prototype.getTotal = function() {
    var total = 0;
    for (var i = 0; i < this.products.length; i++) {
        total += this.products[i].price;
    }
    return total;
}

Ecommerce.prototype.printProducts = function() {
    for (var i = 0; i < this.products.length; i++) {
        console.log(this.products[i]);
    }
}

var ecommerce = new Ecommerce();

ecommerce.addProduct({
    name: "Product 1",
    price: 10
});

ecommerce.addProduct({
    name: "Product 2",
    price: 20
});

ecommerce.addProduct({
    name: "Product 3",
    price: 30
});

console.log(ecommerce.products);

console.log(ecommerce.getTotal());

ecommerce.removeProduct({
    name: "Product 1"
});

console.log(ecommerce.products);

return (
    <>
    <h1>Ecommerces</h1>
    {
        ecommerce.products.map((product, index) => {
            return (
                <div key={index}>
                    <h2>{product.name}</h2>
                    <h3>${product.price}</h3>
                </div>
            )})
    }
</>)


}
    


export default Ecommerces;