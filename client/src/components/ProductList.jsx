import React from 'react';
import Products from './Products';

const ProductList = (props) => {
   return(
    <div className='product-list'>
      {props.products.map((product, index) => { return <Products product={product} key={index}/>
      })}
    </div>
  )
}

export default ProductList