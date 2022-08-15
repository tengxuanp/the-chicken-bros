import { Grid } from '@material-ui/core'
import React from 'react'
import Product from './Product/Product'

const Products = ({products, onAddToCart}) => {

  return (
    <div className='h-screen w-full pt-[5rem] p-6'>

      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>

    </div>
  )
}

export default Products