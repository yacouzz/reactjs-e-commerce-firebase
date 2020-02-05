import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectCartItems, selectCartTotal} from '../redux/cart/cart.selectors';
import { Container, Table } from 'react-bootstrap';
import CheckoutItem from '../checkoutItem/CheckoutItem';
import StripeCheckoutButton from '../stripe-button/stripe-button';

const Checkout = (props)=>{
  console.log(props.cartItems);
  return(
  <>
  <Container style={{marginTop:'20px'}}>
  <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Product Name</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
  
  {
  //Display Cart Content
  props.cartItems.map(item => 
          <CheckoutItem key={item.id} item={item}></CheckoutItem>
        )}

{
//Display Cart Total price to pay
      props.total ?
       <tr>
            <td className="text-right" colSpan={3}>Total</td>
            <td>{props.total}</td>
       </tr>
   :
   <></>
   }
   
    
   
  </tbody>
</Table>
  <center>
    { props.total ? <StripeCheckoutButton price={props.total} /> : <></>}
  </center>

  </Container>

  
  </>)
}

const mapStateToProps= createStructuredSelector(
   {
    cartItems: selectCartItems,
    total: selectCartTotal
    }
)


export default connect(mapStateToProps)(Checkout);