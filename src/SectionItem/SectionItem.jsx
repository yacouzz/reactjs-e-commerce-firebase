import React from 'react';
import { connect } from 'react-redux';
import {Card, Button, Col} from 'react-bootstrap'
import { addItem } from '../redux/cart/cart.actions'


const SectionItem = ({item, secTitle, addItem})=>{
  const {name, price, imageUrl}=item;
return(
    
    <Col sm={4} style={{margin:'10px 0'}}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  Catégorie : {secTitle} <br/>
                  Prix: {price}
                </Card.Text>
                <Button onClick={()=>addItem(item)} variant="primary">Ajouter au panier</Button>
              </Card.Body>
        </Card>
      </Col>
   
)
}
const mapDispatchToProps = dispatch =>({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(SectionItem);