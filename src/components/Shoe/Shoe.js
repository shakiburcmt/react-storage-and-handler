import React from 'react';
import { addToDb } from '../../utilities/cartStorage';
const Shoe = (props) => {
    const { name, price, id } = props.shoe;
    const addToCart = (id) => {
        // console.log('item added', id)
        addToDb(id);
    }
    // function wrapping bole etake, wrapping korle function direct call hoye jayna
    const addToCartWithParam = () => addToCart(id);

    return (
        <div style={{ border: '2px solid', margin: '5px', padding: '10px' }}>
            <h3>Name: {name}</h3>
            <h4>Price: {price}</h4>
            <button onClick={addToCartWithParam}>Add to Cart with wrapping using arrow function</button>
            {/* shortcut way without variable*/}
            <button onClick={() => addToCart(id)}>Add to Cart with Shortcut Wrapping</button>
        </div>
    );
};

export default Shoe;