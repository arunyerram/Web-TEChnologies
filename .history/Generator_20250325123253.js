
function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = myGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }







function* counter() {
    let count = 1;
    while (true) {
        yield count++;
    }
}

const countGen = counter();
console.log(countGen.next().value); // 1
console.log(countGen.next().value); // 2
console.log(countGen.next().value); // 3





