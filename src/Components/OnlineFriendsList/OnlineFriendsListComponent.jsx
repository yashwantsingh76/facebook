import React from 'react'

import { onlineFriends } from '../../Utils/Data/OnlineFriends';
import "../../Utils/styles.css"
import FriendInfoCardContainer from '../FriendInfoCard/FriendInfoCardContainer';
export default function OnlineFriendsListComponent() {
    return (
        <>
        <h4>Contacts</h4>
        {onlineFriends.map((friend)=>
        
        
            <div className="OnlineFriendsList-imageAndTextContainer">
            <FriendInfoCardContainer firstName={friend.firstName} lastName={friend.lastName} info={friend.info} />
                <div className="OnlineFriendsList-imageContainer">
                    <img
                    className="OnlineFriendsList_FriendInfoCard-image"
                    src={friend.info.image}
                    alt=""
                    />
                    <div className="OnlineFriendsList-onlineStatus"></div>
                </div>
            <h5>{friend.firstName+"  "+ friend.lastName}  </h5>
          </div> 
       
      
        )}
      
    </>
    )
}
