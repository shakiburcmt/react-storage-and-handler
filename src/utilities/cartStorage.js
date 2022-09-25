const addToDb = id => {
    // ektu sundor vabe dataguloke rakhar jonno ei method kora hoyeche
    let shoppingCart = {};

    // get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {};
    }
    
    // const quantity = localStorage.getItem(id);

    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        // age + dile string er sathe 1 jog hobe otherwise string concat hobe, parseInt korleo same ashbe
        // const newQuantity = +quantity + 1;
        const newQuantity = parseInt(quantity) + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity);
    }
    else {
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1);
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

export { addToDb };