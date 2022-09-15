import React from "react"
import Image from "next/image"
import bitcoin from "../image/bitcoin.png"
import eth from "../image/eth.png"
import teth from "../image/teth.png"
import ucoin from "../image/ucoin.png"

const Ticker = () => {
    return (
        <React.Fragment style={{ backgroundColor: "#000" }}>
            <div className="hwrap" style={{ backgroundColor: "#000" }}>
                <div className="hmove">
                    <div className="hitem ">
                        {" "}
                        <Image
                            src={bitcoin}
                            alt="Picture of the author"
                            width="50px"
                            height="40px"
                        />{" "}
                    </div>
                    <div className="hitem ">
                        {" "}
                        <Image
                            src={eth}
                            alt="Picture of the author"
                            width="50px"
                            height="40px"
                        />{" "}
                    </div>
                    <div className="hitem ">
                        {" "}
                        <Image
                            src={teth}
                            alt="Picture of the author"
                            width="50px"
                            height="40px"
                        />{" "}
                    </div>

                    <div className="hitem ">
                        {" "}
                        <Image
                            src={ucoin}
                            alt="Picture of the author"
                            width="50px"
                            height="40px"
                        />{" "}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Ticker
