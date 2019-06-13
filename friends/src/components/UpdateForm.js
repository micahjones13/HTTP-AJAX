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

class UpdateForm extends React.Component {
    state = {
        friend: this.props.activeFriend
    }
    handleChanges = e => {
        e.persist();
       this.setState( prevState => ({
            friend: {
                ...prevState.friend,
                [e.target.name]: e.target.value
            }
       }))
         
        
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.updateFriend(this.state.friend);
      };
    render(){
        return(
            <FormStyled>
                <form onSubmit = {this.handleSubmit}>
                    <input type = 'string' name = 'name' value = {this.state.friend.name} onChange = {this.handleChanges}></input>
                    <input type = 'number' name = 'age' value = {this.state.friend.age} onChange = {this.handleChanges}></input>
                    <input type = 'string' name = 'email' value = {this.state.friend.email} onChange = {this.handleChanges}></input>       
                    <input type = 'submit' value = 'Update'></input>
                </form>
            </FormStyled>
        );
    }
}

export default UpdateForm;