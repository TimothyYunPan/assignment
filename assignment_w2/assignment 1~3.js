
//Assignment 1

function max(numbers){
    let bigger = numbers[0]
    for (let i = 1; i < numbers.length ; i++){
        // console.log('a')
        if (bigger < numbers[i]){
            bigger = numbers[i]    
        }
    }
    return bigger
}

max([5, 2, 7, 1, 6])


// Assignment 2

function calculate(args){
    let result
    if (args.op === '+' ){
        result = args.n1 + args.n2
    }else if(args.op === '-' ){
        result = args.n1 - args.n2
    }else{
        result = `Not supported`
    }
    return result

}
calculate({ n1: 6, n2: 2, op: '-' });


//Assignment 3
function calculate (data){
    // console.log(data)
    let total = 0
    // console.log(total)
    let totalProducts = data.products
    // console.log(totalProduct)
    for(i= 0; i < totalProducts.length; i++){ 
        total += totalProducts[i].price 
        // console.log('a')
    } 
    let totalPrice = total * (1 - data.discount)

    return totalPrice
}

totalPrice = calculate({
    discount: 0.1,
    products: [
        {
            name: "Product 1",
            price: 100
        },
        {
            name: "Product 2",
            price: 700
        },
        {
            name: "Product 3",
            price: 250
        }
    ]
})
console.log(totalPrice)