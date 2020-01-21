import React from 'react';

const Products = (props) => {
   return(
    <div className='product-list-entry'>
      <div>{props.product.item}</div>
      <div>Min cost: {props.product.min_cost}</div>
      <div>Current bid: {props.product.curr_bid}</div>
      <div>Ends in: {props.product.ends_in}</div>
      <img src={props.product.image}/>
    </div>
  )
}

export default Products