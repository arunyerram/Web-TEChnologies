// function fetchData(callback) {
//     setTimeout(() => {
//         console.log("Data fetched");
//         callback();
//     },2000);
// }

// fetchData(() => {
//     console.log("Processing data...");
// });



function greet(name, callback) {
    console.log("Hello, " + name);
    function func(name , c1){
        console.log("Hello, Yerram " + name);
    }
    func(name,c);
    c1();
    callback();
}

function c1(){
    console.log("Goodbye, Arun!");
}

function sayGoodbye() {
    console.log("Goodbye!");
}
// func(name,c1);
greet("Arun", sayGoodbye);
