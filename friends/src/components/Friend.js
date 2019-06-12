import React from 'react';
import styled from 'styled-components';

const FriendDiv = styled.div`
    border: 1px solid black;
    width: 33%;
    margin: 4px 0;
    background: #5500cc
    color: white;
    &:hover{
        background: hotpink;
        color: #5500cc;
    }

`;

const Friend = (props) => {
    return(
        <FriendDiv>
            <p>Name: {props.item.name}</p>
            <p>Age: {props.item.age}</p>
            <p>Email: {props.item.email}</p>
        </FriendDiv>

    )
}

export default Friend;