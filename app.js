const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}



console.log("Hello World")

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = {sum, fromEuroToDollar};