var n;
n = parseInt(prompt('Fibonacci № = ', n));

function fib(n){
    if (n <= 1) {
        return n;
    } else {
        return fib (n-1) + fib (n-2);
    }
}

alert(fib(n));