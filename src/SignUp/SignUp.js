import React from 'react';
import {Card, Form, Button} from 'react-bootstrap';
import {auth, createUserProfileDocument} from '../firebase/firebase.utils'


class SignUp extends React.Component{

    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }


        this.handleSubmitSignUp=this.handleSubmitSignUp.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    

    handleSubmitSignUp = async e=>{
        e.preventDefault();

        const {displayName, email, password, confirmPassword}=this.state;

        if(password !== confirmPassword){
            alert("mot de passe non confirmé");
            return;
        }

        try{
            const { user }=await auth.createUserWithEmailAndPassword(email, password);

            createUserProfileDocument(user, {displayName});
        }
        catch(error)
        {
            console.error(error);
        }


    }

    handleChange = e =>{
        const {name, value}= e.target;

        this.setState({[name]:value});
    }


    render(){
        const {displayName, email, password, confirmPassword}=this.state;
        return (
            <Card style={{padding:"30px"}}>
            <Card.Title className="text-center">
                Inscription
            </Card.Title>
          <Form onSubmit={this.handleSubmitSignUp}>

                          <Form.Group controlId="formBasicEmail">
                              <Form.Label>Username</Form.Label>
                              <Form.Control type="text" placeholder="Enter name" name="displayName" value={displayName} onChange={this.handleChange} />
                             
                          </Form.Group>
                          <Form.Group controlId="formBasicEmail">
                              <Form.Label>Email</Form.Label>
                              <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={this.handleChange} />
                             
                          </Form.Group>

                          <Form.Group controlId="formBasicPassword">
                              <Form.Label>Mot de passe</Form.Label>
                              <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange}  />
                          </Form.Group>
                          <Form.Group controlId="formBasicPassword">
                              <Form.Label>Confirmé Mot de passe</Form.Label>
                              <Form.Control type="password" placeholder="Password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange}  />
                          </Form.Group>
                      
                          <Button variant="success" type="submit" >
                              S'inscrire
                          </Button>
              </Form>
        </Card>
        )
    }
}

export default SignUp;