const add = (first, second) => {
    return first + second;
}

const sub = (first, second) => {
    return first - second;
}

const numbers = [20, 55, 73, 12, 97,2];
const sumReducer = (previous, current) => previous + current;
const total = numbers.reduce(sumReducer, 0);

const totalShoesPrice = shoes => {
    const totalWithUsingReducer = (previous, current) => previous + current.price;
    console.log(totalWithUsingReducer);
    const totalPrice = shoes.reduce(totalWithUsingReducer, 0);
    console.log(totalPrice);
    return totalPrice;
}

export { add, sub, total, totalShoesPrice as price };