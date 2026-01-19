// Q 1
const obj = { a: "one", b: "two", a: "three" };
console.log(obj); //a:three,b:two;

//Q2;
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);//456

//Q3;

const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };
console.log(admin); //admin:true,name:'lydia',age:21

//Q4;
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); //20
console.log(shape.perimeter());//Nan

//Q5
function test() {
    console.log(a);
    console.log(b);
   
    var a = 10;
    let b = 20;
}
test();//ERROR

//Q 6

var x = 10;
if (true) {
  var x = 20;
  console.log(x);//20
}
console.log(x);//10

let y = 10;
if (true) {
  let y = 20;
  console.log(y);//20
}
console.log(y); //10

