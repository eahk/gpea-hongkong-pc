import React from "react";
import TitleRibbon from "../common/titleRibbon";
import { Link } from "react-router-dom";

import Title from "../../assets/images/activity/title.svg";
import Background from "../../assets/images/activity/background.svg";
import BtnLearnMore from "../../assets/images/btn-learn-more-white.svg";

import CardData from "../../pages/Activity/data";

import "./index.scss";

export default props => {
  const { sectionId, deviceType } = props;

  return (
    <div
      id={sectionId}
      className="section-activity"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className={`section-content ${deviceType}`}>
        <TitleRibbon deviceType={deviceType} src={Title} alt="活動情報" />

        <div className={`activity-wrapper ${deviceType}`}>
          {CardData.map(card => (
            <Link
              key={card.id}
              to={`/activity/${card.id}`}
              deviceType={deviceType}
            >
              <div className="card">
                <div
                  className="img-frame"
                  style={{ background: `url(${card.thumbnail})` }}
                >
                  <div className="cover">
                    <img src={BtnLearnMore} className="btn-learn-more" alt="" />
                  </div>
                </div>
                <div className="caption">
                  <div className="card-title">{card.title}</div>
                  <div className="card-date">{card.date}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
