// var a;
// let b;
// const c= 30;

// console.log(a);
// // var a= 10;

// a = 30;
// console.log(b);
// b = 10;
// console.log(c);
// console.log(a);
// console.log(b);

// // c = 20;
// cc();
// function cc(){
//     console.log("asd");
// }
// cc();



var name="Suraj kumar";
var age=20;
var isStudent=true;
var nul=null;
var undefined;
var lastname="Ramagiri";
console.log(name+"\n"+age+"\n"+isStudent);
console.log(typeof name+"\n"+typeof age+"\n"+ typeof isStudent+"\n"+typeof nul+"\n"+typeof undefined);
console.log(name+" "+lastname);
// let message=my name is ${name} and my age is ${age}.;
console.log(message);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.substring(5,12));
console.log(message.length);
console.log(message.replace("my","your"));
console.log(message.split(" "));
console.log(message.slice(0,5));
temp=25;
function swap(a,b) {
    console.log('values before swapping ${a} ${b}');
    a=a+b-(b=a);
    console.log('values after swapping ${a} ${b}');
}
var p=(a,b)=>a*b;
console.log(p(age,temp));