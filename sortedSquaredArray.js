Array.prototype.first = function () {
    return this[0];
};

Array.prototype.last = function () {
    return this[this.length - 1];
};

function sortedSquaredArray({ array: orderedArray }) {
    const result = [];

    while (orderedArray.length > 0) {
        if (Math.abs(orderedArray.first()) > Math.abs(orderedArray.last())) {
            result.unshift(Math.pow(orderedArray.first(), 2));

            orderedArray.shift();
        } else {
            result.unshift(Math.pow(orderedArray.last(), 2));

            orderedArray.pop();
        }
    }

    return result;
}

module.exports = { sortedSquaredArray };
