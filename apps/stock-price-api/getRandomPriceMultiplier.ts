const MAX_PRICE_DEVIATION_PERCENT = 1;

// Stocks go up :-)
const STOCK_MOVE_SKEW = 0.51;

const getRandomDirection = (): -1 | 1 => {
    const randomNumber = Math.random();

    if (randomNumber <= STOCK_MOVE_SKEW) {
        return 1;
    }

    return -1
}

export const getRandomPriceMultiplier = () => {
    const priceDeviation = Math.random() * MAX_PRICE_DEVIATION_PERCENT / 100;
    const priceDirection = getRandomDirection();

    return 1 + (priceDeviation * priceDirection);
};
