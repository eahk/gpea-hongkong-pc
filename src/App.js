import React, { useState, useEffect, useRef } from "react";
import mitt from "mitt";
import cx from "classnames";
// import { motion } from "framer-motion";
// import Fade from "react-reveal/Fade";
import "sanitize.css";
import "flexboxgrid/css/flexboxgrid.min.css";
import "swiper/css/swiper.css";
import "./styles/App.scss";
import gpLogo from "./assets/images/GP-logo-2019-TC-green-[web]-01.png";

import { Router, Route, Switch, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CommunityStory from "./pages/CommunityStory/";
import Activity from "./pages/Activity/";
import Footer from "./components/Footer";

// hack to retrieve the current enform status
//import { resolveEnPageStatus } from "./components/EnForm_orgl/formHelpers";

//let enPageStatus = resolveEnPageStatus();

window.ee = new mitt();

function App() {
  // let checkMobile = window.innerWidth <= 768;
  // let checkTablet = window.innerWidth > 769 && window.innerWidth < 1400;
  // let checkDesktop = window.innerWidth >= 1400;

  const [pageResizing, setPageResizing] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [devicetype, setdevicetype] = useState("mobile");
  // const [isMobile, setIsMobile] = useState(checkMobile);
  // const [isTablet, setIsTablet] = useState(checkTablet);
  // const [isDekstop, setIsDesktop] = useState(checkDesktop);
  //const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
  const [showFormModal, setShowFormModal] = useState(false);
  //const [enFormSubmitted, setEnFormSubmitted] = useState(false);
  const springConfig = {
    type: "spring",
    stiffness: 300, // Stiffness of the spring. Higher values will create more sudden movement. Set to 100 by default.
    damping: 200, // Strength of opposing force. If set to 0, spring will oscillate indefinitely. Set to 10 by default.
    duration: 0.15
  };
  const motionFormModal = {
    show: {
      opacity: 1,
      x: 0
    },
    hidden: {
      opacity: 0,
      x: "100%"
    }
  };
  const motionMainButton = {
    show: {
      y: 0
    },
    hidden: {
      y: "100%"
    }
  };
  const mainButton = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      const actionPos = window.innerHeight * 0.85;
      setShowActions(yPos > actionPos); // scroll over header
    };
    const handleWindowResize = () => {
      setPageResizing(true);
      //setBrowserWidth(window.innerWidth);

      if (window.innerWidth < 768) {
        // setIsMobile(true);
        setdevicetype("mobile");
        //} else if (!isMobile && window.innerWidth < 1400) {
      } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
        // setIsTablet(true);
        setdevicetype("tablet");
        //setShowFormModal(false);
      } else {
        // setIsDesktop(true);
        setdevicetype("desktop");
      }
      setPageResizing(false);
    };
    window.addEventListener("load", handleWindowResize);
    window.addEventListener("scroll", handleScroll, false);
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("load", handleWindowResize);
      window.removeEventListener("scroll", handleScroll, false);
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  // show the correct value based on the current en pages
  // useEffect(() => {
  //   if (enPageStatus === "SUCC" && isMobile) {
  //     setEnFormSubmitted(true);
  //     setShowFormModal(true);
  //   } else if (enPageStatus === "SUCC") {
  //     setEnFormSubmitted(true);
  //   }
  //   if (enPageStatus === "ERROR" && isMobile) {
  //     setShowFormModal(true);
  //   }
  //   window.ee.on("SHOULD_CHOOSE_MONTHLY_AMOUNT", (amount) => {
  //     if (!showFormModal && isMobile) {
  //       setShowFormModal(true);
  //     }
  //   });
  // }, []);
  return (
    <HashRouter hashType="noslash">
      <div className={cx("app", { "modal-open": showFormModal })}>
        {pageResizing && (
          <div className="loading--overlay">
            <img src={gpLogo} alt="greenpeace logo" />
          </div>
        )}
        <main className="main">
          <div className="main-container">
            <Navbar />
            <Switch>
              <Route
                path="/communitystory/:id"
                render={props => (
                  <CommunityStory devicetype={devicetype} {...props} />
                )}
              />
              <Route
                path="/activity/:id"
                render={props => (
                  <Activity devicetype={devicetype} {...props} />
                )}
              />
              <Route
                path="/"
                render={() => (
                  <Home devicetype={devicetype} showActions={showActions} />
                )}
              />
            </Switch>
          </div>
          <Footer devicetype={devicetype} showActions={showActions} />
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
