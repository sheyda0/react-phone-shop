import React, { useContext, useState } from 'react'
import {DataContext} from './context'
import { Link } from 'react-router-dom';
import formatCurrency from '../util';


export default function Products() {

  const value = useContext(DataContext);

  const [products, setProducts] = value.products;
  const addCart = value.addCart;

  return (
      <div className="producs">
      {
        products.map(product => (
          <div className="product" key={product._id}>
            <Link to={`/products/${product._id}`}>
              <img src={product.images[0]} alt="phone" className="product-img" />
            </Link>
            <div className="product-desc">
              <p className="product-title">
                <Link to={`/products/${product._id}`}>{product.title}</Link>
              </p>
              <p className="product-price">{formatCurrency(product.price)}</p>
              <button className="product-btn btn btn-outline-primary btn-sm" onClick={() => {addCart(product._id)}}>Add to cart</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}
