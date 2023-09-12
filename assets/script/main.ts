type CombinableType = string | number;

// First Function
function combineToSentence(inputs: CombinableType[]): string {
  let result: string = '';
  inputs.forEach((singleInput) => {
    result += singleInput.toString() + ' ';
  });
  return result;
}

// Second Function
function combineStringOrNumber(inputs: CombinableType[]): CombinableType {
  // If type data is string
  if (inputs.every((singleInput) => typeof singleInput === 'string')) {
    let result: string = inputs.join(' ');
    return result;
    // If type data is number
  } else if (inputs.every((singleInput) => typeof singleInput === 'number')) {
    let result: number = 0;
    inputs.forEach((singleInput: any) => {
      result += singleInput;
    });
    return result;
    // If contain number and string
  } else {
    return 'invalid input';
  }
}

// Third Function
type productDetail = {
  name: string;
  vendor: string;
  quantity: number;
  inStock: number;
  price: number;
};

type buyProductDetail = {
  name: string;
  buyable: boolean;
  totalPrice?: number;
};

function buyProduct(product: productDetail): buyProductDetail {
  const name = product.name;
  const quantity = product.quantity;
  const price = product.price;
  const inStock = product.inStock;

  // Calculate total price
  const totalPrice = quantity * price;

  // Calculate can buy or not
  const buyable = quantity > inStock ? false : true;

  const buyProduct: buyProductDetail = {
    name: name,
    buyable: buyable,
  };
  if (buyable) {
    buyProduct.totalPrice = totalPrice;
  }
  return buyProduct;
}

// Print 1st Function
console.log(`##### First Function = Combine to sentence #####`);
console.log(`a. Case 1`);
console.log(combineToSentence([1, 'data', '3', 'result']));
console.log(`b. Case 2`);
console.log(combineToSentence(['Bejo', 'has', '4', 'sport', 'car']));
console.log(' ');

// Print 2nd Function
console.log(`##### Second Function = Combine string or number #####`);
console.log(`a. Case 1`);
console.log(combineStringOrNumber([1, 2, 3, 4]));
console.log(`b. Case 2`);
console.log(combineStringOrNumber(['the', 'dolphins', 'of', 'zettacamp']));
console.log(`c. Case 3`);
console.log(combineStringOrNumber(['Bejo', 'has', 4, 'sport', 'car']));
console.log(' ');

// Print 3rd function
console.log(`##### Third Function = Buy product #####`);
console.log(`a. Case 1`);
console.log(buyProduct({ name: 'Coca Cola', vendor: 'Coca Cola Company', quantity: 5, inStock: 100, price: 5000 }));
console.log(`b. Case 2`);
console.log(buyProduct({ name: 'Sari Roti', vendor: 'Toko Kue Sebelah', quantity: 2, inStock: 0, price: 10000 }));
