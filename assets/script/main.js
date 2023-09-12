// First Function
function combineToSentence(inputs) {
    var result = '';
    inputs.forEach(function (singleInput) {
        result += singleInput.toString() + ' ';
    });
    return result;
}
// Second Function
function combineStringOrNumber(inputs) {
    // If type data is string
    if (inputs.every(function (singleInput) { return typeof singleInput === 'string'; })) {
        var result = inputs.join(' ');
        return result;
        // If type data is number
    }
    else if (inputs.every(function (singleInput) { return typeof singleInput === 'number'; })) {
        var result_1 = 0;
        inputs.forEach(function (singleInput) {
            result_1 += singleInput;
        });
        return result_1;
        // If contain number and string
    }
    else {
        return 'invalid input';
    }
}
function buyProduct(product) {
    var name = product.name;
    var quantity = product.quantity;
    var price = product.price;
    var inStock = product.inStock;
    // Calculate total price
    var totalPrice = quantity * price;
    // Calculate can buy or not
    var buyable = quantity > inStock ? false : true;
    var buyProduct = {
        name: name,
        buyable: buyable,
    };
    if (buyable) {
        buyProduct.totalPrice = totalPrice;
    }
    return buyProduct;
}
// Print 1st Function
console.log("##### First Function = Combine to sentence #####");
console.log("a. Case 1");
console.log(combineToSentence([1, 'data', '3', 'result']));
console.log("b. Case 2");
console.log(combineToSentence(['Bejo', 'has', '4', 'sport', 'car']));
console.log(' ');
// Print 2nd Function
console.log("##### Second Function = Combine string or number #####");
console.log("a. Case 1");
console.log(combineStringOrNumber([1, 2, 3, 4]));
console.log("b. Case 2");
console.log(combineStringOrNumber(['the', 'dolphins', 'of', 'zettacamp']));
console.log("c. Case 3");
console.log(combineStringOrNumber(['Bejo', 'has', 4, 'sport', 'car']));
console.log(' ');
// Print 3rd function
console.log("##### Third Function = Buy product #####");
console.log("a. Case 1");
console.log(buyProduct({ name: 'Coca Cola', vendor: 'Coca Cola Company', quantity: 5, inStock: 100, price: 5000 }));
console.log("b. Case 2");
console.log(buyProduct({ name: 'Sari Roti', vendor: 'Toko Kue Sebelah', quantity: 2, inStock: 0, price: 10000 }));
