// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello () {
    return 'Say Hello!';
};

function isFive (input) {
    return input == 5;
};

function isEven (input) {
    return input % 2 === 0;
};

function isVowel (input) {
    return (/^[aeiou]$/i).test(input);
}

function add (num1, num2) {
    if (isNaN(num1) == true || isNaN(num2) == true) {
    return NaN;
    } else {
        return Number(num1) + Number(num2);
    };
};