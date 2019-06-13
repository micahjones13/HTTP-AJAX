import React from 'react';
import styled from 'styled-components';

const FormStyled = styled.div`
  form{
      display: flex;
      flex-direction: column;
      align-items: center;

      

     
      padding: 1%;
  }
  input{
      width: 20%;
      padding: 1%;
      margin: 4px 0;
      border-color: darkblue;
  }
`;
const StyledButton = styled.button`
  width: 10%
  background: hotpink;
  color: #5500cc;
  height: 50px;
  margin: 4px 0;

  &:hover{
      background: #5500cc;
      color: hotpink;
  }
 
  
`;

class Form extends React.Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }
    }
    handleChanges = e => {
        e.persist();  //not entirely sure what this does but it breaks if it's not there
        this.setState(prevState => ( {   //need to use prevState here to keep the data previously entered into state

            friend: {
                ...prevState.friend,
                [e.target.name]: e.target.value
            }
        }))
       
         
        
    }
    handleSubmit = e =>{
        e.preventDefault();
        e.persist();
        this.props.addFriend(this.state.friend);
        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
            }
        });
    };

    render(){
        return(
            <FormStyled>
                <form onSubmit ={this.handleSubmit}>
                    <input type = 'string' placeholder = 'friend name' value = {this.state.friend.name} name = 'name' onChange = {this.handleChanges}></input>
                    <input type = 'number' placeholder = 'friend age' value = {this.state.friend.age} name = 'age' onChange = {this.handleChanges}></input>
                    <input type = 'string' placeholder = 'friend email' value = {this.state.friend.email} name = 'email' onChange = {this.handleChanges}></input>
                    <input type = 'submit' value = 'Save Friend'></input>
                </form>
                

            </FormStyled>
        );
    }
}

export default Form;


//turn form into a class that holods state, need handle changes funciton
//<button onClick = {this.props.addFriend}>Add Friend</button>

// <div>
// <form onSubmit ={this.handleSubmit}>
//     <input type = 'string' placeholder = 'friend name' value = {this.state.friend.name} name = 'name' onChange = {this.handleChanges}></input>
//     <input type = 'number' placeholder = 'friend age' value = {this.state.friend.age} name = 'age' onChange = {this.handleChanges}></input>
//     <input type = 'string' placeholder = 'friend email' value = {this.state.friend.email} name = 'email' onChange = {this.handleChanges}></input>
//     <input type = 'submit' value = 'Save Friend'></input>
// </form>


// </div>