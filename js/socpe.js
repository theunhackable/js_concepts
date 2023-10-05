var x = 100;
// block starts
{
    // this x shadows the global x=100
    var x = 10;
    console.log('inside function scope', x);
}
// block ends

console.log('inside global scope', x)

a = 10
console.log(a)

var a = 20

console.log(a)
