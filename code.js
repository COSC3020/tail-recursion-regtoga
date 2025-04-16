function fib(n, a = 0, b = 1) {
    if (n == 0) return a;
    if (n == 1) return b;
    var new_n = n - 1;
    var new_b = a + b;
    return fib(new_n, b, new_b);
}