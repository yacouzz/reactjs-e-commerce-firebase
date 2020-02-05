import React from 'react';
import {Col,Form, Button, Container, Row, Card} from 'react-bootstrap'
import { auth,SignInWithGoogle } from '../firebase/firebase.utils';
import SignUp from '../SignUp/SignUp';

class SignInOut extends React.Component{
    constructor(){
        super()

        this.state={
            email:'',
            password:''
        }
        this.handleSubmitSignIn=this.handleSubmitSignIn.bind(this);
        this.handleChange=this.handleChange.bind(this);
       
    }

    handleSubmitSignIn= async e =>{
        e.preventDefault();
        const {email, password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email:'',
                password:''
            })
            console.log(this.state);
        }catch(error){
            console.error(error);
        }
        
        
    }

  

    handleChange= async e=>{
        this.setState({
            [e.target.name]: e.target.value
          });
        console.log(this.state);
    }

    render(){
        return(
        <div>
            <Container>
                <Row style={{marginTop:"60px"}}>
                    <Col sm={6}>
                      <Card style={{padding:"30px"}}>
                          <Card.Title className="text-center">
                              Connexion
                          </Card.Title>
                        <Form onSubmit={this.handleSubmitSignIn}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange} />
                                           
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Mot de passe</Form.Label>
                                            <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange}  />
                                        </Form.Group>
                                      
                                        <Button variant="success" type="submit" >
                                            Connexion
                                        </Button>
                                        <Button variant="danger" onClick={SignInWithGoogle} className="ml-2" >
                                            Connexion avec Google
                                        </Button>
                            
                            </Form>
                            
                      </Card>
                    </Col>

                    <Col sm={6}>
                      <SignUp/>
                    </Col>
                </Row>
            </Container>
        </div>
        );
    }
}

export default SignInOut;