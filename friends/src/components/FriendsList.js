import React from 'react';
import Friend from './Friend';
import styled from 'styled-components';

const FriendsListStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const FriendsList = (props) => {
    return(
        <FriendsListStyled>
            {
                props.friends.map(item => {
                    return(
                    <Friend 
                        item = {item}
                        key = {item.id}
                    />
                    );
                })
            }
        </FriendsListStyled>
    );
}

export default FriendsList;