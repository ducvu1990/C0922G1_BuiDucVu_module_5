function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

let sum = 0;
let n = 5;
for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log('Tổng các số fibonacci trong khoảng ' + n + ' là: ' + sum);