import React from 'react'
import Product from '../../../../assets/img/shirt3.png'
import './ProductImage.scss'

const ProductImage = () => {
  return (
    <div className='product_container'>
        <img src={Product} alt='product_img'/>
    </div>
  )
}

export default ProductImage