import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'
import useStyles from './styles'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import { commerce } from '../../../lib/commerce'
import { Link, useNavigate } from 'react-router-dom';

const steps = ['Shipping address','Payment details'];

const Checkout = ({cart, order, onCaptureCheckout, error}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const navigate = useNavigate();

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  useEffect(()=>{
    if (cart.id){
    const generateToken = async () => {
        try {
            const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
            setCheckoutToken(token);
        } catch {
          if (activeStep !== steps.length) navigate('/products');        
        }
    };
    generateToken();
  }
  },[cart])

  const next = (data) => {
    setShippingData(data);

    nextStep();
  };


  let Confirmation = () => 
  (order.customer ? (
    <>
      {console.log(order)}
      <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname} </Typography>
      <Divider className={classes.divider} />
      <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
      <br />
      <Button component={Link} to="/products" variant="outlined" type="button">Back to Merch</Button>
    </>
  ) : (
    <div className={classes.spinner}>
      {console.log(order)}
      <CircularProgress />
    </div>
  )); 
  // (<div>confirm</div>);

  if(error) {
    <>
    <Typography variant="h5">Error: {error}</Typography>
    <br />
    <Button component={Link} to="/products" variant="outlined" type="button">Back to Merch</Button>
    </>
  }

  const Form = () => activeStep === 0 ? 
  <AddressForm checkoutToken={checkoutToken} nextStep={nextStep} next={next} /> : 
  <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} nextStep={nextStep} onCaptureCheckout={onCaptureCheckout} />

  return (
    <>
        <div className={classes.toolbar} />
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
            </Paper>
        </main>
    </>
  )
}

export default Checkout