// Regular Expessions



// 1. Check if a String Contains "hello" (case-insensitive)
function containsHello(str) {
    return /hello/i.test(str);
}

// 2. Match Only Digits
function isOnlyDigits(str) {
    return /^\d+$/.test(str);
}

// 3. Match a Word That Starts With "a" or "A"
function startsWithA(str) {
    return /^a/i.test(str);
}

// 4. Find All Lowercase Letters
function findLowercaseLetters(str) {
    return str.match(/[a-z]/g) || [];
}

// 5. Find All Words in a Sentence
function extractWords(sentence) {
    return sentence.match(/\b\w+\b/g) || [];
}

// 6. Check if a String is an Email
function isValidEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

// 7. Replace Spaces with Dashes
function replaceSpacesWithDashes(str) {
    return str.replace(/\s+/g, '-');
}

// 8. Check if a String Ends with "ing"
function endsWithIng(str) {
    return /ing$/.test(str);
}

// 9. Match a Date Format (DD/MM/YYYY)
function isValidDateFormat(date) {
    return /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(date);
}

// 10. Extract All Numbers from a String
function extractNumbers(str) {
    return str.match(/\d+/g) || [];
}

// Test cases
console.log(containsHello("Hello world")); // true
console.log(isOnlyDigits("123456")); // true
console.log(startsWithA("apple")); // true
console.log(findLowercaseLetters("Hello World!")); // ['e', 'l', 'l', 'o', 'o', 'r', 'l', 'd']
console.log(extractWords("This is a test sentence.")); // ['This', 'is', 'a', 'test', 'sentence']
console.log(isValidEmail("test@example.com")); // true
console.log(replaceSpacesWithDashes("Hello World")); // "Hello-World"
console.log(endsWithIng("running")); // true
console.log(isValidDateFormat("25/12/2023")); // true
console.log(extractNumbers("My age is 30 and my brother is 25")); // ['30', '25']
