import React from "react";
import { OverlayTrigger } from "react-bootstrap";

import { onlineFriends } from "../../Utils/Data/OnlineFriends";
import FriendInfoCardContainer from "../FriendInfoCard/FriendInfoCardContainer";
import image5 from "../../assets/image5.jpg";

import OnlineFriendsListContainer from "../OnlineFriendsList/OnlineFriendsListContainer";
import FriendRequestContainer from "../FriendRequest/FriendRequestContainer";

export default function NewsAndFeedRightMenuComponent() {
  return (
    <>
      <div className="NewsAndFeedRightMenu-contentContainer">

        
          <FriendRequestContainer/>

        <h4>Sponsered</h4>
        <div style={{ padding: "1%" ,display:'flex',flexDirection:"row",backgroundColor:"red"}}>
          <img src={image5} style={{ height: "auto", width: "40%",marginRight:5 }} alt="" />
          <div>
            <p>Reduce latency by 20 percent by using React JS.</p>
            <a href="">www.reactjs.com/docs</a>
          </div>
        </div>

        <OnlineFriendsListContainer />
      </div>
    </>
  );
}
