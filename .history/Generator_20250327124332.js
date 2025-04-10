function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    },0);
}

fetchData(() => {
    console.log("Processing data...");
});



function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Arun", sayGoodbye);
