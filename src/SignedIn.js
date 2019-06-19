import React, { Component } from 'react'
//import { Switch, Route, Redirect } from 'react-router-dom'
import { UserSession } from 'blockstack'
import TitlebarGridList from './TitlebarGridList';
import { appConfig} from './constants'
import './SignedIn.css'


class SignedIn extends Component {

  constructor(props) {
    super(props)
    this.userSession = new UserSession({ appConfig })
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

  BASE_URL = "https://platform.fatsecret.com/rest/server.api?method=foods.search&search_expression=toast&format=json&max_results=100";

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


  makerequest=()=>{
    var request = require("request");
    var options = { method: 'POST',
    url: 'https://platform.fatsecret.com/rest/server.api',
    mode: 'no-cors',
  
    qs: 
    { method: 'foods.search',
      search_expression: 'toast',
      format: 'json',
      
      
      max_results: '100' },
    headers: 
    { 'Postman-Token': 'd9f206f8-634f-45d9-9cb4-4ba3f3d9d96f',
      'cache-control': 'no-cache',
      'Access-Control-Allow-Origin' : "*",
      Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ1MjZBMkFCNkQ0MkQ5REIwMjBEMThBRDMxRTE5MTdCMUUzMjg2RTUiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJSU2FpcTIxQzJkc0NEUml0TWVHUmV4NHlodVUifQ.eyJuYmYiOjE1NjA4Mzk1ODcsImV4cCI6MTU2MDkyNTk4NywiaXNzIjoiaHR0cHM6Ly9vYXV0aC5mYXRzZWNyZXQuY29tIiwiYXVkIjpbImh0dHBzOi8vb2F1dGguZmF0c2VjcmV0LmNvbS9yZXNvdXJjZXMiLCJiYXNpYyJdLCJjbGllbnRfaWQiOiIwMDM2NTM5YzQ0Mzk0OTU2OTkzZGU4YTMzZmZjZDcxYSIsInNjb3BlIjpbImJhc2ljIl19.cq8iYgaQYl3GmveeFeCTMuVBY_yCAOIg-n1kqXBSJpOyI7Y7vUz0QmpjnLKyatrFDJvWZmM2Fw-cghPLm52PYBfhyG9Y1E0G5k4I5Zxe1KCJkE39Dvj0l027wBZ81x23h_cJO4ncERiQudyhfggBvXhoKJexvbyw7Flq8nVAUfsYMcwhxAbOTaASLO9lC7aOJydfyOUvq60vat32o3LSuGX_f7xhsXfdFIFKosEl8HMCAtCEVRlBf_h2zD09XLvYrydoW-p1i6pl4l7Zw99XHkM58O8qtmLYnE-VccIn7c1UZz7YDuqOHRze1nyHR58HGMQ7WD3kHrig6U36KMaJgQ' } };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
  }


  fetchrequest=()=>{
    fetch(this.BASE_URL, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
     
      headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ1MjZBMkFCNkQ0MkQ5REIwMjBEMThBRDMxRTE5MTdCMUUzMjg2RTUiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJSU2FpcTIxQzJkc0NEUml0TWVHUmV4NHlodVUifQ.eyJuYmYiOjE1NjA4Mzk1ODcsImV4cCI6MTU2MDkyNTk4NywiaXNzIjoiaHR0cHM6Ly9vYXV0aC5mYXRzZWNyZXQuY29tIiwiYXVkIjpbImh0dHBzOi8vb2F1dGguZmF0c2VjcmV0LmNvbS9yZXNvdXJjZXMiLCJiYXNpYyJdLCJjbGllbnRfaWQiOiIwMDM2NTM5YzQ0Mzk0OTU2OTkzZGU4YTMzZmZjZDcxYSIsInNjb3BlIjpbImJhc2ljIl19.cq8iYgaQYl3GmveeFeCTMuVBY_yCAOIg-n1kqXBSJpOyI7Y7vUz0QmpjnLKyatrFDJvWZmM2Fw-cghPLm52PYBfhyG9Y1E0G5k4I5Zxe1KCJkE39Dvj0l027wBZ81x23h_cJO4ncERiQudyhfggBvXhoKJexvbyw7Flq8nVAUfsYMcwhxAbOTaASLO9lC7aOJydfyOUvq60vat32o3LSuGX_f7xhsXfdFIFKosEl8HMCAtCEVRlBf_h2zD09XLvYrydoW-p1i6pl4l7Zw99XHkM58O8qtmLYnE-VccIn7c1UZz7YDuqOHRze1nyHR58HGMQ7WD3kHrig6U36KMaJgQ'
          // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      
      body: JSON.stringify({method: 'foods.search',
      search_expression: 'toast',
      format: 'json'}), // body data type must match "Content-Type" header
  })
  .then(response => {
    console.log(response.json());


  }); // parses JSON response into native Javascript objects 
}



  signOut(e) {
    console.log('message from signOut');
    e.preventDefault()
    this.userSession.signUserOut()
    window.location = '/'
  }

  render() {
    const username = this.userSession.loadUserData().username;    
    return ( 
      <div>
          <div className="SignedIn">
          <button onClick={this.fetchrequest}>Click Me</button>
          </div>
        
         
      </div>    
    );
  }
}

export default SignedIn
