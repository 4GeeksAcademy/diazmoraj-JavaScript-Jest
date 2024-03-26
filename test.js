const {sum} = require('./app.js');

test('adds 14 + 9 to equals 23',() => {
    let total = sum(14,9);
})

expect(total).toBe(23);
