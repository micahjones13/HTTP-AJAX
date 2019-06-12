import React from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import Form from './components/Form';

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount(){
    //get data from api 
    axios 
    .get('http://localhost:5000/friends')
    .then(res => {
      console.log(res);
      this.setState({ friends: res.data });
    })
    .catch(err => {
      console.log(err);
    })
  }
  render(){

  
    return (
      <div className="App">
        <FriendsList friends = {this.state.friends} />
        <Form />
      </div>
    );
  }
}

export default App;
