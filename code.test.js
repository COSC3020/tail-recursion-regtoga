const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

//all i did was edit the Fib Invariants test code
function fibTest(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;

    var a = 0, b = 1;
    for (var i = 2; i <= n; i++) {
        var new_b = a + b;
        a = b;
        b = new_b;
    }
    return b;
}


const test =
    jsc.forall("nat", function(n) {
        return JSON.stringify(fib(n)) ==
            JSON.stringify(fibTest(n));
    });
jsc.assert(test);
