import React from "react";
import image1 from "../../assets/image1.jpg";

import liveVideo from "../../assets/liveVideo.png";
import photosIcon from "../../assets/postphotovideo.png"
import '../../Utils/styles.css'
export default function CreatePostComponent() {
  return (
    <div
     className= "createPost-Container"
    >
      <div className="createPost-imageAndinputFieldContainer" >
        <img
          src={image1}
          alt=""
          height={40}
          width={40}
          style={{ borderRadius: "50%" }}
        />
        <input
          placeholder="What's on your Mind Yashwant"
          type="text"
          className="createPost-inputField"
        />
      </div>

      <div className="createPost-line"/>

      <div className="createPost-ButtonContainer">
        <a className="createPost-Buttons">
          <img
            src={liveVideo}
            style={{ marginRight: 10 }}
            height={20}
            width={30}
            alt=""
          />
          <h5 style={{ marginLeft: 10 }}>Live Video</h5>
        </a>
        <a className="createPost-Buttons">
          <img
            src={photosIcon}
            style={{ marginRight: 10 }}
            height={30}
            width={30}
            alt=""
          />
          <h5 style={{ marginLeft: 10 }}>Photo/Video</h5>
        </a>
        <a className="createPost-Buttons">
          <img
            src={liveVideo}
            style={{ marginRight: 10 }}
            height={20}
            width={30}
            alt=""
          />
          <h5 style={{ marginLeft: 10 }}>Feeling/Activity</h5>
        </a>
      </div>
    </div>
  );
}
