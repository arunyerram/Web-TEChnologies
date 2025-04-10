function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    },0);
}

fetchData(() => {
    console.log("Processing data...");
});

