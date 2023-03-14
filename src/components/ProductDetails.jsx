import React, {useContext, useState} from 'react'
import { useParams } from "react-router-dom"
import {DataContext} from './context'
import formatCurrency from '../util';
import DetailsColor from './DetailsColor';
import DetailsImages from './DetailsImages';
import DetailsImage from './DetailsImage';
import DetailsStorage from './DetailsStorage';

export default function ProductDetails() {
    const {id} = useParams();
    const value = useContext(DataContext);
    const [products, setProducts] = value.products;
    const [index, setIndex] = useState(0);
    const addCart = value.addCart;

    const details = products.filter((product) => {
        return product._id === id;
    })

  return (
    <>
    {
        details.map(product => (
            <div className="product-details d-flex" key={product._id}>
                <div className="images-container d-flex flex-column align-items-center">
                    <DetailsImage imageSrc={product.images[index]} />
                    <div className="thumb image-options d-flex">
                            {
                                product && product.images.map((img, index) => (
                                    <DetailsImages imageSrc={img} click={() => setIndex(index)} num={index} />
                                ))
                            }
                    </div>
                </div>
                <div className="box-details">
                    <h1 className="details-title mt-4">{product.title}</h1>
                    <h4 className="details-price my-4">{formatCurrency(product.price)}</h4>
                    <h5 className="my-4"><strong>One Year Warranty</strong></h5>
                    <h1 className="h5 mb-3 pt-1">Choose your Storage</h1>
                    <div class="storage-options d-flex">
                    {product && product.storage.map((str, index) => (
                            <DetailsStorage key={index} num={index} storage={str} />
                        ))}
                    </div>
                    <h1 className="h5 mb-3 pt-1 choose-color-title">Choose your color</h1>
                    <div class="color-options d-flex">
                    {product && product.colors.map((color, index) => (
                            <DetailsColor key={index} num={index} color={color} click={() => setIndex(index)} />
                        ))}
                    </div>
                    <button className="product-details-btn btn btn-primary" onClick={() => addCart(product._id)}>Add to cart</button>
                </div>
            </div>
        ))
    }
    </>
  )
}