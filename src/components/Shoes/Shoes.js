import React from 'react';
import { add, price, sub, total } from '../../utilities/calculate';
import Shoe from '../Shoe/Shoe';

const Shoes = () => {
    const result = sub(45, 44);
    const resulted = add(45, 44);
    const shoes = [
        { id: 1, name: 'Apex', price: 3000 },
        { id: 2, name: 'Lotto', price: 2500 },
        { id: 3, name: 'Bata', price: 2000 },
        { id: 4, name: 'Bey', price: 1500 },
        { id: 5, name: 'Zills', price: 1000 }
    ]
    const shoesPrice = price(shoes);
    return (
        <div>
            <h2>Total Shoes: {result}</h2>
            <h2>Total Shoes: {resulted}</h2>
            <h2>Total Shoes From Reduce: {total}</h2>
            <h2>Total Shoes Price with Reduce: {shoesPrice}</h2>
            {
                shoes.map(shoe=><Shoe key={shoe.id} shoe={shoe}></Shoe>)
            }
        </div>
    );
};

export default Shoes;