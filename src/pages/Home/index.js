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
  const { deviceType, showActions } = props;

  return (
    <div>
      <Hero sectionId="top" deviceType={deviceType} />
      <LiveFigure sectionId="live-figure" deviceType={deviceType} />
      <Timeline sectionId="timeline" deviceType={deviceType} />
      <Join sectionId="join" deviceType={deviceType} />
      <Grade sectionId="grade" deviceType={deviceType} />
      <Activity sectionId="activity" deviceType={deviceType} />
      <CommunityStory sectionId="community-story" deviceType={deviceType} />
      <PlasticCommunity sectionId="plastic-community" deviceType={deviceType} />
      <SupportUs sectionId="support-us" deviceType={deviceType} />
      <Scrollspy deviceType={deviceType} showActions={showActions} />
    </div>
  );
};
