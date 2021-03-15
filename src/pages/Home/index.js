import React from "react";

import Hero from "../../components/Hero";
import LiveFigure from "../../components/LiveFigure";
import Timeline from "../../components/Timeline";
import Join from "../../components/Join";
import Grade from "../../components/Grade";
import Activity from "../../components/Activity";
import CommunityStory from "../../components/CommunityStory";
import PlasticCommunity from "../../components/PlasticCommunity";
import SupportUs from "../../components/SupportUs";
import Scrollspy from "../../components/ScrollSpy";

export default props => {
  const { devicetype, showActions } = props;

  return (
    <div>
      <Hero sectionId="top" devicetype={devicetype} />
      <LiveFigure sectionId="live-figure" devicetype={devicetype} />
      <Timeline sectionId="timeline" devicetype={devicetype} />
      <Join sectionId="join" devicetype={devicetype} />
      <Grade sectionId="grade" devicetype={devicetype} />
      <Activity sectionId="activity" devicetype={devicetype} />
      <CommunityStory sectionId="community-story" devicetype={devicetype} />
      <PlasticCommunity sectionId="plastic-community" devicetype={devicetype} />
      <SupportUs sectionId="support-us" devicetype={devicetype} />
      <Scrollspy devicetype={devicetype} showActions={showActions} />
    </div>
  );
};
