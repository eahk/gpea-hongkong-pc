import React from "react";

const data = [
  {
    id: "1",
    title: "走塑社區游擊小隊",
    date: "「現正招募中」",
    thumbnail: require("../../assets/images/activity/activity1/thumbnail.jpg"),
    banner: require("../../assets/images/activity/activity1/banner-lg.jpg"),
    content: (
      <>
        <img
          src={require("../../assets/images/activity/activity1/photo.jpg")}
          className="image"
          alt=""
        />
        <p>
          <br />
          疫情持續下，你仍繼續自備食物盒買外賣，並熟知誰是最友善的走塑老闆？游擊小隊正需要你！我們希望透過網上連結你與其他熱心隊員，把走塑任務融入日常生活中，為在疫情下仍然堅持走塑的大家，持續帶來最新的走塑情報！
        </p>
      </>
    )
  }
];

export default data;
