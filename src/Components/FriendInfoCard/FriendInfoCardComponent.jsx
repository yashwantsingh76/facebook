import React from "react";

import "../../Utils/styles.css";

export default function FriendInfoCardComponent(props) {
  return (
    <div className="FriendInfoCard-Container">
      <div className="FriendInfoCard-imageContainer">
        <img
          className="OnlineFriendsList_FriendInfoCard-image"
          src={props.info.image}
          alt=""
        />
        <div className="FriendInfoCard-onlineStatus"></div>
      </div>
      <div>
        <h3 style={{ textDecoration: "underline" }}>
          {props.firstName + "  " + props.lastName}
        </h3>
        <p>
          Became friends with <strong>gunjan sonu garg</strong> and{" "}
          <strong>3 others</strong>
        </p>
        <p>
          6 mutual friends including <strong>Anil agarwal</strong> and{" "}
          <strong>Anuj agarwal</strong>
        </p>
      </div>
    </div>
  );
}
