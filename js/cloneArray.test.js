const cloneArray = require('./cloneArray')

test('properly clones array', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)
})

const cloneArray.toEqual(array_) to accept it all.