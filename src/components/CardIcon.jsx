import React, { useContext } from 'react'
import {DataContext} from './context'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'

export default function CardIcon() {

  const value = useContext(DataContext);

  const [cart] = value.cart;

  return (
        <div className="card-icon">
            <FiShoppingCart color="#fff" size={30}/>
            <span className="shop-counter bg-danger">{cart.length}</span>
        </div>
  )
}
