// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function (){
        expect(typeof sayHello()).toBe('string');
    });
    it('should return a greeting for the input', function () {
        expect(sayHello()).toBe('Say Hello!');
    });
    it('should never return \'undefined\' when called', function () {
        expect(sayHello()).not.toBe(undefined);
    });
});

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when called', function () {
        expect(isFive(5)).toBe(true);
        expect(isFive('5')).toBe(true);
    });
    it('should return false when called', function () {
        expect(isFive()).toBe(false);
    });
});

describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when called', function () {
        expect(isEven(2)).toBe(true);
        expect(isEven(-4)).toBe(true);
        expect(isEven('8')).toBe(true);
    });
    it('should return false when called', function () {
        expect(isEven(3)).toBe(false);
        expect(isEven('banana')).toBe(false);
        expect(isEven(Infinity)).toBe(false);
        expect(isEven(true)).toBe(false);
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when called', function () {
        expect(isVowel('a')).toBe(true);
        expect(isVowel('A')).toBe(true);
    });
    it('should return false when called', function () {
        expect(isVowel('y')).toBe(false);
        expect(isVowel('4')).toBe(false);
        expect(isVowel(true)).toBe(false);
        expect(isVowel(false)).toBe(false);
        expect(isVowel('banana')).toBe(false);
        expect(isVowel()).toBe(false);
    });
});

describe('add', function (){
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return the addition of two numbers', function () {
        expect(add(2, 3)).toBe(5);
        expect(add(-3, -9)).toBe(-12);
        expect(add(-4, 10)).toBe(6);
    });
    it('should return the addition of a string and a number', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('should return NaN when input is not a number', function () {
        expect(add('banana ', 'split ')).toBeNaN();
        expect(add(2, 'apples')).toBeNaN();
        expect(add()).toBeNaN();
    });
});
