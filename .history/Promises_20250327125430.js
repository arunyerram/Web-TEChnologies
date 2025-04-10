let myPromise = new Promise((resolve, reject) => {
    let success = true; // Change to false to test rejection
    setTimeout(() => {
        if (success) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected!");
        }
    }, 2000);
});

myPromise
    .then((message) => {
        console.log(message); // Runs if resolved
    })
    .catch((error) => {
        console.log(error); // Runs if rejected
    });
