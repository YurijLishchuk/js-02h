var n;
n = parseInt(prompt('Fibonacci № = ', n));

function fib(n){
    var a=[1,1];
    for(var i=2;i<n;i++){
        a[i]=a[i-1]+a[i-2];
    }
    return a[n-1];
}

alert(fib(n));