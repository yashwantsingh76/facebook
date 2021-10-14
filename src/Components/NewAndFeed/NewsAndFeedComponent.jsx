import React from "react";
import FlatList from "flatlist-react";

import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image7.jpg";
import CreatePostContainer from "../CreatePost/CreatePostContainer";
import GeneralPostContainer from "../GeneralPost/GeneralPostContainer";
import StoriesContainer from "../Stories/StoriesContainer";
export default function NewsAndFeedComponent() {
  const people = [
    {
      firstName: "Elson",
      lastName: "Correia",
      info: { image: image1 },
    },
    {
      firstName: "John",
      lastName: "Doe",
      info: { image: image2 },
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      info: { image: image3 },
    },
    {
      firstName: "Maria",
      lastName: "Carvalho",
      info: { image: image4 },
    },
    {
      firstName: "Maria",
      lastName: "Carvalho",
      info: { image: image5 },
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
        
      }}
    >
      <StoriesContainer people={people} />
      <CreatePostContainer />
      <GeneralPostContainer
        userName="Kunal Agarwal"
        profile={image2}
        uploadedImage={image3}
      />
      <GeneralPostContainer
        userName="Yashwant Singh"
        profile={image1}
        uploadedImage={image2}
      />
      <GeneralPostContainer
        userName="Vaishali jindal"
        profile={image3}
        uploadedImage={image5}
      />
      <GeneralPostContainer
        userName="Rahul Rathore"
        profile={image4}
        uploadedImage={image1}
      />
    </div>
  );
}
