import React from 'react'
import PropTypes from 'prop-types'

function ProductItem(product) {
  return (
    <li >
      <span>
        <p>{product.id}</p>
        <p>{product.name} </p>
        <p>{product.price}</p>
      </span>
    </li>
  )
}

ProductItem.propTypes = {}

export default ProductItem
