import React, { Component } from 'react'
//import { Switch, Route, Redirect } from 'react-router-dom'
import { UserSession } from 'blockstack'
import TitlebarGridList from './TitlebarGridList';
import { appConfig} from './constants'
import './SignedIn.css'
import NavBar from './NavBar'


class SignedIn extends Component {

  constructor(props) {
    super(props)
    this.userSession = new UserSession({ appConfig })
    this.username = this.userSession.loadUserData().username;    
    this.state = {
      me: {},
      savingMe: false,
      savingKingdown: false,
      redirectToMe: false
    }

    // this.loadMe = this.loadMe.bind(this)
    // this.saveMe = this.saveMe.bind(this)
    this.signOut = this.signOut.bind(this)
  }

  componentWillMount() {
  //  this.loadMe()
  }

  BASE_URL = "https://test-es.edamam.com/search?q=cheese&app_id=4c88eeb8&app_key=89bdea29e5ed9d7297eb846407522d44";

  tileData = [
     {
       img: './images/im1.jpeg',
        title: 'im1.jpg',
        author: 'author1',
   },
   {
    img: './images/im2.jpeg',
     title: 'im1.jpg',
     author: 'author2',
}
   ];

  fetchrequest=()=>{
    fetch(this.BASE_URL, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
     
      headers: {
          'Content-Type': 'application/json',    
          'accept-encoding': 'gzip, deflate',    
         
      },
      
   
      q: 'toast',
      format: 'json'}) // body data type must match "Content-Type" header
  
  .then(response => {
    console.log(response);


  }); // parses JSON response into native Javascript objects 
}



  signOut(e) {
    console.log('message from signOut');
    e.preventDefault()
    this.userSession.signUserOut()
    window.location = '/'
  }

  render() {
   
    return ( 
      <div>
        <NavBar username={this.username} signOut ={this.signOut}></NavBar>
          <div className="SignedIn">
          <button onClick={this.fetchrequest}>Click Me</button>
          </div>
        
         
      </div>    
    );
  }
}

export default SignedIn
