function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 0000);
}

fetchData(() => {
    console.log("Processing data...");
});
