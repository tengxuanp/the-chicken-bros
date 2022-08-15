import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { images } from '../../constants';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './styles';

const NavbarMerch = ({totalItems}) => {

const classes = useStyles();
const location = useLocation();

  return (
    <>
    <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to="/products">
          <Typography variant="h6" className={classes.title} color="inherit">
            <img src={images.Mlogo} alt="commerce.js" height="25px" className={classes.image} />
          </Typography>
          </Link>
          <Link to="/">
          <Typography variant="h7" className={classes.link}>
            <div>Back to home</div>
          </Typography>
          </Link>
          <div className={classes.grow} />
          {location.pathname === '/products' && (
          <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div> )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavbarMerch