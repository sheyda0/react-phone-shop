import React, {useContext, useState, useEffect} from 'react'
import {DataContext} from './context'
import formatCurrency from '../util';
import CartImage from './CartImage';
import { HiOutlineTrash } from 'react-icons/hi'

export default function Cart() {

    const value = useContext(DataContext);
    const [cart, setCart] = value.cart;
    const increase = value.increase;
    const decrease = value.decrease;
    const removeProduct = value.removeProduct;
    const [total, setTotal] = useState(0);

    useEffect(() => {
      const getTotal = () => {
        const res = cart.reduce((prev, item) => {
          return prev + (item.price * item.count);
        }, 0);
        setTotal(res);
      }
      getTotal();
    }, [cart]);

    if(cart.length === 0) {
      return <h4 style={{textAlign: 'center'}}>Your cart is empty!</h4>
    }

  return (
    <div className="d-flex justify-content-between">
      <div>
      {
        cart.map(product => (
            <div className="cart-container d-flex container mx-3" key={product._id}>
              <div className="cart d-flex ">
                <div className="cart-img-container d-flex flex-column align-items-center">
                <CartImage imageSrc={product.images[0]} />
                </div>
                <div className="box-details">
                    <h6 className="cart-title h5">{product.title}</h6>
                    <h6 className="details-price my-3 h5">{formatCurrency(product.price)}</h6>
                    <div className="cart-info">
                        <p>Ram: 128GB RAM</p>
                        <p>Storage: {product.storage[0]}</p>
                        <div className="d-flex align-items-center justify-content-between">
                            <p>Color: {product.colors[0]}</p>
                            <div className="btn-group align-items-center">
                                <span className="delete-icon rounded-circle d-flex align-items-center justify-content-center" onClick={() => removeProduct(product._id)}>
                                    <HiOutlineTrash color="red" size={20}/>
                                </span>
                                <button className="decrease rounded-circle d-flex align-items-center justify-content-center" onClick={() => decrease(product._id)}> - </button>
                                <button className="count">{product.count}</button>
                                <button className="increase rounded-circle d-flex align-items-center justify-content-center" onClick={() => increase(product._id)}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        ))
      }
      </div>

      <div className="total d-flex flex-column align-items-start justify-content-start mx-5">
        <p className="total-title px-4 py-2">PAYMENT SUMMARY</p>
        <ul className="w-100 px-4 pb-3">
          <li className="d-flex justify-content-between w-100">
            <p>Subtotal</p>
            <p>{formatCurrency(total)}</p>
          </li>
          <li className="d-flex justify-content-between w-100">
            <p>Item Discount</p>
            <p>-{formatCurrency(0)}</p>
          </li>
          <li className="d-flex justify-content-between w-100">
            <p>Delivery Fee</p>
            <p>Free</p>
          </li>
        </ul>
      </div>
    </div>
  )
}