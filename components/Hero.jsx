import React from "react";
import Bounce from "react-reveal/Bounce";
import { Grid } from "@mui/material";
import card10 from "../../images/design.png";
import "./Ticker.scss";
const Hero = () => {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <div className="container">
        <Grid container spacing={2}>
          <Grid md={6} lg={6} sm={12} xs={12}>
            <Bounce left>
              <h2
                className="text-white text-center mt-5 pt-5 joinComb"
                style={{ fontFamily: "ethnocentric" }}
              >
                Opening Endless possibilities
              </h2>
            </Bounce>

            <Bounce left>
              <p
                className="text-white text-center pt-2 joinComss"
                style={{ fontFamily: "ethnocentric" }}
              >
                An NFT staking platform and marketplace for all. Guaranteed high
                yields and the lowest transaction fees.
              </p>
            </Bounce>

            <Bounce left>
              <p
                className="text-white text-center pt-2 joinComss"
                style={{ fontFamily: "ethnocentric" }}
              >
                <div className="buttons">
                  <a href="https://openvaultnft.com/wp-content/uploads/2022/06/Vault-Coin-Whitepaper-V2.0.pdf">
                    <button className="blob-btn">
                      White Paper
                      <span className="blob-btn__inner">
                        <span className="blob-btn__blobs">
                          <span className="blob-btn__blob"></span>
                          <span className="blob-btn__blob"></span>
                          <span className="blob-btn__blob"></span>
                          <span className="blob-btn__blob"></span>
                        </span>
                      </span>
                    </button>
                  </a>
                  <br />

                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                      <filter id="goo">
                        <feGaussianBlur
                          in="SourceGraphic"
                          result="blur"
                          stdDeviation="10"
                        ></feGaussianBlur>
                        <feColorMatrix
                          in="blur"
                          mode="matrix"
                          values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                          result="goo"
                        ></feColorMatrix>
                        <feBlend
                          in2="goo"
                          in="SourceGraphic"
                          result="mix"
                        ></feBlend>
                      </filter>
                    </defs>
                  </svg>
                </div>
              </p>
            </Bounce>
          </Grid>

          <Grid
            md={6}
            lg={6}
            sm={12}
            xs={12}
            className="container joinCo"
            style={{
              height: "100%",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <img src={card10} style={{ height: "100%" }} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Hero;
