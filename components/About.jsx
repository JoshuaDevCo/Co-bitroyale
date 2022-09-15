import bg from "../image/jackpo.png"
import Image from "next/image"
// or
import List from "./WinnerList"
import { Grid } from "@mui/material"

export default function About() {
    return (
        <div style={{ backgroundColor: "#000" }} className="">
            <br />
            <br />
            <div className="container">
                <Grid container spacing={1}>
                    <Grid
                        item
                        md={12}
                        lg={4}
                        xs={12}
                        sm={12}
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                        }}
                    >
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h1 style={{ color: "#fff", fontSize: "110px", fontWeight: "900" }}>
                            Daily
                        </h1>
                        <h1 style={{ color: "crimson", fontSize: "6px", fontWeight: "800" }}>
                            <span style={{ color: "#FFD700", fontSize: "70px" }}> JackPot</span>
                        </h1>

                        <br />

                        <a href="#" className="myButton">
                            Enter the Jackpot
                        </a>
                    </Grid>

                    <Grid
                        item
                        md={12}
                        lg={4}
                        xs={12}
                        sm={12}
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                        }}
                    >
                        <List />
                    </Grid>

                    <Grid
                        item
                        md={12}
                        lg={4}
                        xs={12}
                        sm={12}
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                        }}
                    >
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <Image src={bg} alt="Picture of the author" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
