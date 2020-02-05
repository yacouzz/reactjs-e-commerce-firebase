import React from 'react';
import {Col, Card} from 'react-bootstrap';
import './Menu.css';
import {Link} from 'react-router-dom'



const MenuItem= ({index, title, imageUrl}) =>{
    
        if(index===1 || index===2) {
            return (<Col sm={6}>
                <Link to={{pathname:`/section/${index}`}}>
                <div id="card-scale-contain">
                        <Card className="text-white" id="card-scale"  style={
                            {
                                backgroundImage:"linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url("+imageUrl+")",
                                backgroundRepeat:"no-repeat",
                                backgroundSize:"cover",
                            
                        }
                            }>
                            
                                <Card.ImgOverlay id="myCard">
                                    <Card.Title className="text-center">{title}</Card.Title>
                                    <Card.Text className="text-center">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                                </Card.ImgOverlay>
                        </Card>
                    </div>
              
                </Link>
                    
   
    </Col>)
        }else{
            return(<Col sm={4}>
                 <Link to={{pathname:`/section/${index}`}}>
                    <div id="card-scale-contain">
                    <Card className="text-white"  id="card-scale" style={
                        {
                            backgroundImage:"linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url("+imageUrl+")",
                            backgroundRepeat:"no-repeat",
                            backgroundSize:"cover"
                    }
                        }>
                        
                            <Card.ImgOverlay id="myCard">
                                <Card.Title className="text-center">{title}</Card.Title>
                                <Card.Text className="text-center">
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                    </Card>
                    </div>
               </Link>
            </Col>)
        }
    
    
}


export default MenuItem;