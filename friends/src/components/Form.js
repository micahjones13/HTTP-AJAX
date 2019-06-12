import React from 'react';
import styled from 'styled-components';

const FromStyled = styled.div`
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

const Form = (props) => {
    return(
        <FromStyled>
            <form>
                <input placeholder = 'friend name'></input>
                <input placeholder = 'friend age'></input>
                <input placeholder = 'friend email'></input>
            </form>
            <StyledButton>Add Friend</StyledButton>

        </FromStyled>
    );
}

export default Form;