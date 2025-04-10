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
    func(name,c1);
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





function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 complete");
        callback();
    }, 1000);

    setTimeout(() => {
        console.log("Step 1 complete");
        callback();
    });

}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 complete");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 complete");
        callback();
    }, 1000);
}

// Nested callbacks (callback hell)
step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps completed");
        });
    });
});
