// const addToDb = id => {
//     // ektu sundor vabe dataguloke rakhar jonno ei method kora hoyeche
//     let shoppingCart = {};

//     // get the shopping cart
//     const storedCart = localStorage.getItem('shopping-cart');
//     if (storedCart) {
//         shoppingCart = JSON.parse(storedCart);
//     }
//     else {
//         shoppingCart = {};
//     }

//     // const quantity = localStorage.getItem(id);

//     // add quantity
//     const quantity = shoppingCart[id];
//     if (quantity) {
//         // age + dile string er sathe 1 jog hobe otherwise string concat hobe, parseInt korleo same ashbe
//         // const newQuantity = +quantity + 1;
//         const newQuantity = parseInt(quantity) + 1;
//         shoppingCart[id] = newQuantity;
//         // localStorage.setItem(id, newQuantity);
//     }
//     else {
//         shoppingCart[id] = 1;
//         // localStorage.setItem(id, 1);
//     }
//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
// }

// export { addToDb };


// oporer sob kaj abar repeat
// use local storage to manage cart data
const addToDb = id => {


    // now time to organize it because I want to see data like youtube localStorage
    let shoppingCart = {};

    // get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    else {
        shoppingCart = {};
    }

    // local storage e null dile bujhte hobe data nai
    // // evabe ar na korleo hobe quantity ar check kora hobe na jehetu shopping cart er moddhe thakbe
    // const quantity = localStorage.getItem(id);
    const quantity = shoppingCart[id];
    if (quantity) {
        // +quantity= string to number shortcut way
        // const newQuantity = +quantity + 1;
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity

        // // there is no need for this part to organize
        // localStorage.setItem(id, newQuantity);
    }
    else {
        shoppingCart[id] = 1;
        // // there is no need for this part to organize
        // localStorage.setItem(id, 1);
    }
    // jehetu shoppingCart ekta object tai etake JSON.stringify kore string e convert kore nite hobe
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
// console.log(id)
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        // string ke in diye delete kora jabe na tai string ke json parse korte hobe
        const shoppingCart = JSON.parse(storedCart);
        // console.log(typeof(shoppingCart));
        if (id in shoppingCart) {
            // console.log('exists');
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    deleteShoppingCart
}