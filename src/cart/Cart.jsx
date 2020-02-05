import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import {toggleCartHidden} from '../redux/cart/cart.actions';
import { selectCartItems, selectCartItemsCount } from '../redux/cart/cart.selectors';
import { Link } from 'react-router-dom'


const Cart = (props)=>{
    console.log(props.itemCount)
        return(
            <NavDropdown 
                title={ <span className="text-primary my-auto" id="myDrop">Panier({props.itemCount})</span>}
                id="basic-nav-dropdown" 
               onClick={()=>props.toggleCartHidden()} >
          <center> 
        {props.cartItems.length ?
        props.cartItems.map(item => 
        <NavDropdown.Item key={item.id} href="#">

            <img width="30" src={item.imageUrl} alt=""/>
            {item.name}

        </NavDropdown.Item> )
            : <p>Cart is empty</p>}
            </center>   
                <center>
                 <Link className="btn btn-dark" to="/checkout">CheckOut</Link>   
                </center>
                           
           
                   
            </NavDropdown>
            );
    
}

const mapDispatchToProps= dispatch =>({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
})
const mtp =state=>({
    cartItems: selectCartItems(state),
    itemCount: selectCartItemsCount(state)
})
export default connect(mtp,mapDispatchToProps)(Cart);