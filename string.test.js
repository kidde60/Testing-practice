const stringLength = require('./string')

test('property returns the count of the string', () => {
    expect(stringLength('hello')).toBe(5)
});

// test('Throw error if the string length is less than 1 and greater 10', () => {
//     expect(stringLength('helloAmSomehowLonger')).toThrow('The string does not match the expected characters')
// })