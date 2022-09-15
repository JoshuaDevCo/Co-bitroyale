import bg from "../image/hero.jpg"
import logo from "../image/Logo.png"
import girl from "../image/hero.jpg"
import Image from "next/image"

// or
import { Grid } from "@mui/material"

export default function Hero() {
    return (
        <div style={{ backgroundColor: "#000" }}>
            <div>
                <Grid container spacing={2}>
                    <Grid item md={12} lg={6} xs={12} sm={12}>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                        <div className="container" style={{ justifyContent: "center" , alignItems:"center" , textAlign:"center" , }}>
                            <h1 style={{ color: "#fff", fontSize: "40px", fontWeight: "400" }}>
                                Welcome To
                            </h1>
                            <h1 style={{ color: "crimson", fontSize: "46px", fontWeight: "800" }}>
                                <Image
                                    src={logo}
                                    alt="Picture of the author"
                                    width="500px"
                                    height="50px"
                                />
                            </h1>

                            <p style={{ color: "#fff", fontSize: "15px", fontWeight: "600" }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industrys standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>

                            <a
                                href="#"
                                style={{ color: "#F6BE00", fontSize: "40px", fontWeight: "900" }}
                            >
                                Play Games
                            </a>
                        </div>
                    </Grid>
                    <Grid item md={12} lg={6} xs={12} sm={12}>
                        <Image src={girl} alt="Picture of the author" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
