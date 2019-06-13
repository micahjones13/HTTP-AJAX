import React from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import Form from './components/Form';
import UpdateForm from './components/UpdateForm';

import { Route } from 'react-router-dom';

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      activeFriend: null
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

  addFriend = friend => {
    axios
      .post('http://localhost:5000/friends' , friend)
      .then(res => {
        console.log(res)
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  }
  deleteFriend = (e, id) => {
    e.preventDefault();
    axios 
      .delete(`http://localhost:5000/friends/${id}`) 
      .then(res => {
        this.setState({ friends: res.data });

      })
      .catch(err => console.log(err));
  }

  setUpdateForm = (e, friend) => {
    e.preventDefault();
    this.setState({ activeFriend: friend });
    this.props.history.push('/update-form');
  };
  updateFriend = (friend) => {
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }
  render(){

  
    return (
      <div className="App">
        <FriendsList 
          friends = {this.state.friends}
          deleteFriend = {this.deleteFriend}
          setUpdateForm= {this.setUpdateForm}
          
        />
        <Form
          addFriend = {this.addFriend}
        />
        <Route
          path = '/update-form'
          render = {props => (
            <UpdateForm
              {...props}
              updateFriend = {this.updateFriend}
              activeFriend = {this.state.activeFriend}
            />
          )}
        />
       
    
      </div>
    );
  }
}

export default App;

//put the addFriend function in app
//    <UpdateForm
// updateFriend = {this.updateFriend}
// activeFriend = {this.state.activeFriend}
// />



// <UpdateForm 
// activeFriend = {this.state.activeFriend}
// />