function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    },2000);
}

fetchData(() => {
    console.log("Processing data...");
});



function greet(name, callback) {
    console.log("Hello, " + name);
    function func(name , c1){
        console.log("Hello, Yerram " + name);
    }
    func(name,c1);
    c1();
    callback();
}


function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Arun", sayGoodbye);
