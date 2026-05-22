//numbers
let x=100;
let y=102.7;
let z= 10e2; //exponential

console.log(x,y,z);

//isInteger- This method will verify if variable is integer or not
x=10;
y=1.8;
z="x";
console.log(Number.isInteger(x));
console.log(Number.isInteger(y));
console.log(Number.isInteger(z));

//ParseInt()--converts a string into number
s="12345.12";
console.log(typeof(s));
//console.log(Number.parseInt(s));
console.log(typeof(Number.parseFloat(s)));

n=1234;
console.log(typeof(n));
console.log(typeof(Number.toString(n)));