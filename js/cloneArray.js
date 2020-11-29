const { getElementError } = require("@testing-library/react")

function cloneArray(array) {
    return [...array]
}

module.exports = cloneArray

cloneArray = module