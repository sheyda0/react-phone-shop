import React, {createContext, useState} from 'react'
import {DATAPRODUCT} from './data';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState(DATAPRODUCT);

    const [cart, setCart] = useState([]);

    const addCart = (id) => {
        const check = cart.every(item => {
            return item._id !== id;
        });

        if(check){
            const data = products.filter(product => {
                return product._id === id;
            });
            setCart([...cart, ...data]);
        }else{
            alert("This product is already in the cart");
            setCart([...cart]);
        }
    }

    const increase = (id) => {
        cart.forEach(item => {
            if(item._id === id){
                item.count++;
            }
        });
        setCart([...cart]);
    }

    const decrease = (id) => {
        cart.forEach(item => {
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count--;
            }
        })
        setCart([...cart]);
    }

    const removeProduct = (id) => {
        if(window.confirm("Are you sure you want to delete this product?")) {
            cart.forEach((item, index) => {
                if(item._id === id) {
                    cart.splice(index, 1);
                }
            })
            setCart([...cart]);
        }
    }

    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart,
        increase: increase,
        decrease: decrease,
        removeProduct: removeProduct
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}