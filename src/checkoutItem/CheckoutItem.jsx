import React from 'react';
import {connect} from 'react-redux';
import {deleteItem, increaseQte, decreaseQte} from '../redux/cart/cart.actions'


const CheckoutItem= ({item, deleteItem, decreaseQte, increaseQte})=> {
   
    return(
    <>
        <tr>
            <td> 
                <span className="btn-danger" onClick={()=>deleteItem(item)} style={{color:'white',marginRight:'10px'}}>
                    &#10006;
                    </span> 
                    <img src={item.imageUrl} width="60" alt=""/>
            
            </td>
            <td>{item.name}</td>

            <td> 
                <span className="btn-danger" onClick={()=>decreaseQte(item)} >
                    &#10094;
                </span> 

                {item.quantity} 

                <span className="btn-danger" onClick={()=>increaseQte(item)} >
                    &#10095;
                </span> 
            </td>

            <td>{item.price}</td>
         </tr>
    </>
    )
}

const mapStateToDispatch= dispatch=>({
    deleteItem: item=>dispatch(deleteItem(item)),
    increaseQte: item=>dispatch(increaseQte(item)),
    decreaseQte: item=>dispatch(decreaseQte(item))
})

export default connect(null, mapStateToDispatch)(CheckoutItem);