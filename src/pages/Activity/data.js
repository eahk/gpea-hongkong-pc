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
          alt="走塑社區游擊小隊「現正招募中」"
        />
        <p>
          <br />
          繼續自備食物盒買外賣唔容易？
          <br />
          關心社區環境，想推廣更多社區小店支持走塑行動？
          <br />
          想推介走塑小店俾更多人知？
        </p>
        <h3>游擊小隊正需要你！</h3>
        <p>
          我們希望透過線上線下活動連結你與其他熱心隊員，把走塑任務融入日常生活中。為在疫情下仍然堅持走塑的大家，持續帶來最新的走塑情報！
        </p>
      </>
    )
  },
  {
    id: "2",
    title: "走塑大Hunt",
    date: "「現正招募中」",
    thumbnail: require("../../assets/images/activity/activity2/IMG_4249_thunbnail.jpg"),
    banner: require("../../assets/images/activity/activity2/IMG_4249_long.jpg"),
    content: (
      <>
        <img
          src={require("../../assets/images/activity/activity2/IMG_4249_short.jpg")}
          className="image"
          alt="走塑社區游擊小隊「現正招募中」"
        />
        <p>
          <br />
          邊間鋪頭可以裸買？邊間餐廳可以自備餐具買野食？
          <br />
          瓹窿瓹罅，一齊發掘社區走塑小店啦！！
        </p>
        <p>
          我們會親身走遍18區與各路店主溝通，在不同店鋪貼上「全城走塑」貼紙，讓大家輕鬆認出走塑好去處。
          <br />
          下一次走塑大HUNTING
          即將在5月中舉行，我們會一起去深水埗區，向店鋪倡議走塑，同時邀請更多店鋪加入走塑行動！
          <br />
          走塑游撃小隊現時已經在全港搵到超過700間走塑友善店鋪，要達到2021年前集齊1100間的目標，全靠你加入！
        </p>
        <p>
          香港每區都各有特色，需要各區地膽幫手... 唔好齋諗啦，爭你報名咋！
          社區走塑，有你有可能！！
        </p>
        <p>
          日期及時間：2021年5月（詳情待定）
          <br />
          地點：深水埗區
        </p>
      </>
    )
  }
];

export default data;
