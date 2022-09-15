import React from "react"
import { MDBFooter, MDBContainer, MDBCol, MDBRow, MDBIcon, MDBBtn, MDBtn } from "mdb-react-ui-kit"

import bg from "../image/bg.jpg"
import logo from "../image/Logo.png"
import Image from "next/image"

// or
import { Grid } from "@mui/material"

export default function Footer() {
    return (
        <div style={{ backgroundColor: "#000" }}>
            <MDBFooter className="bg-dark text-center text-white">
                <div className="text-center p-3" style={{ backgroundColor: "#000" }}>
                    © 2022 Copyright :
                    <a className="text-white" href="">
                        Casino BitRoyal
                    </a>
                </div>
            </MDBFooter>
        </div>
    )
}
