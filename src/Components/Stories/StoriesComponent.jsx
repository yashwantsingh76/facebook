import React from "react";

export default function StoriesComponent({ people }) {
  return (
    <div className="stories-Container">
      {people.map((person) => (
        <div className="stories-storiesContainer">
          <img
            src={person.info.image}
            height={"auto"}
            width={"100%"}
            className="stories-storiesImage"
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
