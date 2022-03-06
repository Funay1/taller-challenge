function minimunInvalidAmountOfChange({ coins: coinArray }) {
    const sortedCoinArray = coinArray.sort((a, b) => a - b);

    let validAmount = 0;

    for (const coin of sortedCoinArray) {
        if (coin > validAmount + 1) return validAmount + 1;

        validAmount += coin;
    }

    return validAmount + 1;
}

module.exports = { minimunInvalidAmountOfChange };
