import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles.js'
import CartItem from './CartItem/CartItem.jsx';
import { Link } from 'react-router-dom';

const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant='subtitle1'>You have no items in your cart.
    <Link to="/products" style={{color:"red"}}> Start adding some.</Link>
    </Typography>
    
  );

  const RenderCart = () => (
    <>
    <Grid container spacing={3}>
        {cart.line_items.map((item) =>(
            <Grid item xs={12} sm={4} key={item.id}>
                <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
            </Grid>
        ))}
        <div className={classes.cardDetails}>
            <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
            <div>
                <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary" component={Link} to="/checkout">Checkout</Button>
            </div>
        </div>
    </Grid>
    </>
  );


  if(!cart.line_items) return  '...loading';

  return (
    <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
        {!cart.line_items.length ? <EmptyCart /> : <RenderCart /> }
    </Container>
  )
}

export default Cart