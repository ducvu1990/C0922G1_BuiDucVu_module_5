function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
var sum = 0;
var n = 5;
for (var i = 0; i < n; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log('Tổng các số fibonacci trong khoảng ' + n + ' là: ' + sum);
