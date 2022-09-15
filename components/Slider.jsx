import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

// import required modules
import { EffectCoverflow, Pagination } from "swiper"
import bg from "../image/cgirl.png"
import Image from "next/image"
// or
import { Grid } from "@mui/material"

export default function Slider() {
    return (
        <div style={{ backgroundColor: "#000" }} className="" >
            <div className="container">
                <Grid container>
                    <div className="timeline-area">
                        <div className="container">
                            <div className="timelines">
                                <h2>Roadmap</h2>
                            </div>
                            <div className="all-timelines">
                                <div className="single-timeline d-flex-2">
                                    <div className="timeline-blank"></div>
                                    <div className="timeline-text d-flex-2">
                                        <span>
                                            <h6>April 2019</h6> — The launch of Aryacoin; AYA ICO,
                                            resulting in over 30BTC collected
                                        </span>
                                        <div className="t-square"></div>
                                    </div>
                                </div>

                                <div className="single-timeline d-flex-2">
                                    <div className="timeline-blank"></div>
                                    <div className="timeline-text d-flex-2">
                                        <span>
                                            <h6>December 2019 </h6>— The launch of AYA Pay
                                        </span>
                                        <div className="t-square"></div>
                                    </div>
                                </div>

                                <div className="single-timeline d-flex-2">
                                    <div className="timeline-blank"></div>
                                    <div className="timeline-text d-flex-2">
                                        <span>
                                            <h6>April 2020</h6> — The successful Hamedan Hardfork,
                                            supported by all AYA exchanges, aimed at integrating
                                            the dPoW algorithm, improving the security of the AYA
                                            blockchain.
                                        </span>
                                        <div className="t-square"></div>
                                    </div>
                                </div>

                                <div className="single-timeline d-flex-2">
                                    <div className="timeline-blank"></div>
                                    <div className="timeline-text d-flex-2">
                                        <span>
                                            <h6>June 2020</h6> — Aryna Exchange goes live, opening
                                            more trading opportunities globally
                                        </span>
                                        <div className="t-square"></div>
                                    </div>
                                </div>

                                <div className="single-timeline d-flex-2">
                                    <div className="timeline-blank"></div>
                                    <div className="timeline-text d-flex-2">
                                        <span>
                                            <h6>July 2020</h6> — The enabling of our Coin Exchanger
                                        </span>
                                        <div className="t-square"></div>
                                    </div>
                                </div>

                                <div className="single-timeline d-flex-2">
                                    <div className="timeline-blank"></div>
                                    <div className="timeline-text d-flex-2">
                                        <span>
                                            <h6>November 2020</h6> — The implementation of Smart
                                            Contracts into the Aryacoin Ecosystem
                                        </span>
                                        <div className="t-square"></div>
                                    </div>
                                </div>

                                <div className="single-timeline d-flex-2">
                                    <div className="timeline-blank"></div>
                                    <div className="timeline-text d-flex-2">
                                        <span>
                                            <h6>Q1 2021</h6> — Alef B goes live (more details
                                            coming soon)
                                        </span>
                                        <div className="t-square"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </div>
        </div>
    )
}
