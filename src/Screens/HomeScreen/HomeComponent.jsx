import React from "react";

import NewsAndFeedContainer from "../../Components/NewAndFeed/NewAndFeedContainer";
import NewAndFeedLeftMenuContainer from "../../Components/NewAndFeedLeftMenu/NewAndFeedLeftMenuContainer";
import NewsAndFeedRightMenuContainer from "../../Components/NewAndFeedRightMenu/NewsAndFeedRightMenuContainer"

export default function HomeComponent() {
  return (
    <>
      <div className="HomeScreen-container">
        <div className="HomeScreen-LeftMenu">
          <NewAndFeedLeftMenuContainer />
        </div>
        <div className="HomeScreen-NewsAndFeedSection">
          <NewsAndFeedContainer />
        </div>
        <div className="HomeScreen-RightMenu">
            <NewsAndFeedRightMenuContainer/>
        </div>
      </div>
    </>
  );
}
