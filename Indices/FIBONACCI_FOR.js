function fibonacciIterative(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

let n = 10; // Cambia este valor para generar más números en la serie
console.log(fibonacciIterative(n));
