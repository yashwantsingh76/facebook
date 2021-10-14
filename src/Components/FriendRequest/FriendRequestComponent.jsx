import React from "react";

import "../../Utils/styles.css"
import image1 from "../../assets/image1.jpg"
import image2 from "../../assets/image2.jpg"
import { FiMoreHorizontal } from "react-icons/fi";

export default function FriendRequestComponent() {
  return (
    <>
      <h4>Birthdays</h4>
      <div className="FriendRequest-container">
        <div className="FriendRequest-heading">
          <div className="FriendRequest-headingTextAndIcon">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png"
              
              className="FriendRequest-headingIcon"
              alt=""
            />
            <p className="FriendRequest-headingText">Friend Request</p>
          </div>
          <div className="FriendRequest-headingMoreIcon">
            <FiMoreHorizontal />
          </div>
        </div>
        <div className="FriendRequest-imageAndContent">
          <div className="FriendRequest-imageContainer">
            <img className="FriendRequest-image" src={image1} alt="" />
          </div>
        <div className="FriendRequest-Content">
        {/* style={{display:"flex",justifyContent:"space-between",alignItems:"center",height:"20%"}} */}
          <div className="FriendRequest-ContentHeading" >   
            <p style={{fontSize:14,fontWeight:"bold"}}>Kumar gulshan</p>
            <p>5d.</p>
          </div>
          <div className="FriendRequest-ContentMututalFriendscontainer">
            <div className="FriendRequest-ContentMututalFriendsImageContainer">
              <img src={image1} className="FriendRequest-ContentMututalFriendsImage" alt="" />
            </div>
        </div>
        </div>
       
        </div>
      </div>
    </>
  );
}
