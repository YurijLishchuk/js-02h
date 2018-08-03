var n;
n = parseInt(prompt('Fibonacci № = ', n));

function fib(n){
    var a=1, b=1; // first two numbers of Fibonacci
    for (var i=3;i<=n;i++)
    {
        var c=a+b;
        a=b;
        b=c;
    }
    return b;
}

alert(fib(n));