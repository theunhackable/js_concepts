var x;
var_dec();
function var_dec() {
    x = 10;
    console.log('inside function scope', x);
}

console.log('inside global scope', x)