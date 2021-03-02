import React from "react";
import styled from "styled-components";
import ExternalLink from "../common/externalLink";

import SpeechBubble from "../../assets/images/speech-bubble-join-team.svg";
import ReportNow from "../../assets/images/report-now.svg";

const Wrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 10px;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 10px;
  transition: all 0.2s;
  flex-direction: ${({ deviceType }) =>
    deviceType === "mobile" ? "column" : "row"};
  visibility: ${({ showActions }) => (showActions ? "visible" : "hidden")};
`;

const Bubble = styled.img`
  filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.5));
  cursor: pointer;
  width: ${({ deviceType }) => (deviceType === "mobile" ? "100px" : "150px")};
`;

const Report = styled.img`
  margin-top: 5px;
  filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.5));
  width: ${({ deviceType }) => (deviceType === "mobile" ? "60px" : "100px")};
`;

export default props => {
  const { deviceType, showActions } = props;

  return (
    <Wrapper deviceType={deviceType} showActions={showActions}>
      <ExternalLink href="https://forms.gle/2dPnfkPtu6QNWzWZ7">
        <Report deviceType={deviceType} src={ReportNow} alt="即時報料" />
      </ExternalLink>
      <ExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLSflWGgOGtCzeTKDmdQJXf3hf0rHncVZcrWLeadc1TEN7P1Yeg/viewform">
        <Bubble
          deviceType={deviceType}
          src={SpeechBubble}
          alt="有你有可能! 加入走塑社區團隊!"
        />
      </ExternalLink>
    </Wrapper>
  );
};
