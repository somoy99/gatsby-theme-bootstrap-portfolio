import React from "react";
import { Tabs, Tab, ProgressBar } from "react-bootstrap";
import MeSingle from "../../assets/me_single.svg";
import About1 from "../../assets/about_1.svg";
import About2 from "../../assets/about_2.svg";
import About3 from "../../assets/about_3.svg";
import About4 from "../../assets/about_4.svg";
import "../styles/about.css";
const about = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row text-center svgStrip">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
            <About1 className="about_svg" />
            <h3>Performant</h3>
            <p>O' my code, run well, run fast!</p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
            <About2 className="about_svg" />
            <h3>Secure</h3>
            <p>Magic barrier! only granted shall pass.</p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
            <About3 className="about_svg" />
            <h3>Accessible</h3>
            <p>Hear me well, understand & see!</p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
            <About4 className="about_svg" />
            <h3>Scalable</h3>
            <p>Thy shall grow, thy shall age!</p>
          </div>
        </div>
        <div className="text-center">
          <h2 id="mid_title">What I can do.</h2>
        </div>

        <div className="row">
          <div
            className="col-xs-12 col-sm-12 col-md-12 col-lg-4 text-center"
            style={{ marginTop: "40px" }}
          >
            <MeSingle />
            <p style={{ fontSize: "24px" }}>
              As a developer I’d present you solutions with the latest
              technologies available.
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 skill">
            <Tabs defaultActiveKey="frontend">
              <Tab eventKey="frontend" title="Front-End">
                <h3>Angular</h3>
                <ProgressBar variant="primary" now={90} />
                <h3>React, Gatsby, NextJS</h3>
                <ProgressBar variant="primary" now={75} />
                <h3>Vue</h3>
                <ProgressBar variant="primary" now={50} />
                <h3>Redux</h3>
                <ProgressBar variant="primary" now={80} />
                <h3>Webpack</h3>
                <ProgressBar variant="primary" now={85} />
              </Tab>
              <Tab eventKey="backend" title="Back-End">
                <h3>ExpressJS, NestJS</h3>
                <ProgressBar variant="primary" now={90} />
                <h3>Websocket, WebRTC</h3>
                <ProgressBar variant="primary" now={75} />
                <h3>MongoDB, Redis, PostgreSQL</h3>
                <ProgressBar variant="primary" now={75} />
                <h3>Linux, Heroku, GCP</h3>
                <ProgressBar variant="primary" now={85} />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};
export default about;
