function generateFibonacci(limit) {
    let fibonacciFirst = 0;
    let fibonacciSecond = 1;
    let fibonacciArray = [fibonacciFirst, fibonacciSecond];
    while (fibonacciFirst + fibonacciSecond <= limit) {
        let nextFibonacci = fibonacciFirst + fibonacciSecond;
        fibonacciArray.push(nextFibonacci);
        fibonacciFirst = fibonacciSecond;
        fibonacciSecond = nextFibonacci;
    }
    console.log(fibonacciArray);
    return fibonacciArray;
}

generateFibonacci(15);