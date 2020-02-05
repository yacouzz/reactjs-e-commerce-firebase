import React from 'react';
import './styles/bootstrap.min.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import Navebar from './Navebar';
import Main from './Main';
import SignInOut from './SignInOut/SignInOut';
import {connect} from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import SectionSingle from './SectionSingle/SectionSingle';
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors';
import Checkout from './checkout/Checkout';



class App extends React.Component {


  unsubscribeFromAuth=null
  componentDidMount(){
    const {setCurrentUser}=this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if(user){
        const userRef= await createUserProfileDocument(user);
        userRef.onSnapshot(snapshot=>{
          setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
            });
         
        });
      }
      setCurrentUser(user);
      //createUserProfileDocument(user);
      console.log(setCurrentUser)
    });
  }
  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div className="App">
      <Navebar/>  
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/section/:id" component={SectionSingle}></Route>
        <Route exact path="/signin" render={()=>this.props.currentUser ? (<Redirect to='/'/>) :(<SignInOut />) }></Route>
        <Route exact path="/checkout" component={Checkout}></Route>
      </Switch>
      </div>
    );
  }
}
/*const mapStateToProps=state=>{
  console.log(state)
  return {
    currentUser: selectCurrentUser(state)
  }
  
}*/

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
