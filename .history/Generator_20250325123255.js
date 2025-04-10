
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



function* adder() {
    let x = yield "Enter a number:";
    yield x + 10;
}

const addGen = adder();
console.log(addGen.next().value);  // "Enter a number:"
console.log(addGen.next(5).value); // 15


