import React, { useState } from "react";

import { RiMoreFill } from "react-icons/ri";
import { BiComment } from "react-icons/bi";
import { AiOutlineLike,AiFillLike } from "react-icons/ai";

import image1 from "../../assets/image1.jpg";
import "../../Utils/styles.css"
export default function GeneralPostComponent(props) {
  console.log("Props are : ", props);

  const [liked, setLiked] = useState(false);
  const { profile, uploadedImage, username } = props;
  console.log("liked", liked);
  return (
    <div className = "GeneralPost-container">
      <div
        className="GeneralPost-uploadInfoContainer"
      >
        <div style={{ display: "flex" }}>
          <img
            src={profile}
            width={40}
            height={40}
            style={{ borderRadius: 20, marginLeft: 10 }}
            alt=""
          />
          <div>
            {username}
            <br /> 1 d.{" "}
          </div>
        </div>
        <a className="GeneralPost-moreIcon">
          <RiMoreFill size={24} />
        </a>
      </div>
      <div className="GeneralPost-imageContainer">
        <img className="GeneralPost-image" src={uploadedImage} alt="" />
      </div>

      <div
        className="GeneralPost-likeCommentButtonContainer"
      >
        <a
          onClick={() => setLiked((liked) => !liked)}
          className="GeneralPost-likeCommentButton"
        >
          {liked ? (
            <>
            <AiFillLike  color={"blue"} size={26} />
            <p style={{color:"blue"}}>Like</p>
            </>
          ) : (
            <>
            <AiOutlineLike size={26} />
            <p>Like</p>
            </>
          )}
          
        </a>
        <a
          className="GeneralPost-likeCommentButton"
        >
          <BiComment size={26} />
          Comment
        </a>
      </div>
    </div>
  );
}
