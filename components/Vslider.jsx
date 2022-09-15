import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

import bg from "../image/footbal.jpg"

import logo from "../image/Logo.png"
import Image from "next/image"

// or
import { Grid } from "@mui/material"

export default function Hero() {
    return (
        <div style={{ backgroundColor: "#000" }}>
            <br />
            <br />

            <div className="container" style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                <Grid
                    container
                    spacing={2}
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        display: "flex",
                    }}                >
                    <Grid
                        item
                        md={6}
                        lg={3}
                        xs={12}
                        sm={12}
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            display: "flex",
                        }} 
                    >
                        <Card
                            sx={{ maxWidth: 345 }}
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                                backgroundColor: "#4343",
                            }}
                        >
                            <Image
                                src={bg}
                                height="450"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    textAlign: "center",
                                    backgroundColor: "#4343",
                                }}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",
                                        color: "#fff",
                                    }}
                                >
                                    Football
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",
                                        color: "#fff",
                                    }}
                                >
                                    Lizards are a widespread group of squamate reptiles, with over
                                    6,000 species
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6} lg={3} xs={12} sm={12}  style={{
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        display: "flex",
                    }}>
                        <Card
                            sx={{ maxWidth: 345 }}
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                                backgroundColor: "#4343",
                            }}
                        >
                            <Image
                                src={bg}
                                height="450"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    textAlign: "center",
                                    backgroundColor: "#4343",
                                }}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",
                                        color: "#fff",
                                    }}
                                >
                                    Football
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",
                                        color: "#fff",
                                    }}
                                >
                                    Lizards are a widespread group of squamate reptiles, with over
                                    6,000 species
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6} lg={3} xs={12} sm={12}  style={{
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        display: "flex",
                    }}>
                        <Card
                            sx={{ maxWidth: 345 }}
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                                backgroundColor: "#4343",
                            }}
                        >
                            <Image
                                src={bg}
                                height="450"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    textAlign: "center",
                                    backgroundColor: "#4343",
                                }}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",
                                        color: "#fff",
                                    }}
                                >
                                    Football
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",
                                        color: "#fff",
                                    }}
                                >
                                    Lizards are a widespread group of squamate reptiles, with over
                                    6,000 species
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6} lg={3} xs={12} sm={12}  style={{
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        display: "flex",
                    }}>
                        <Card
                            sx={{ maxWidth: 345 }}
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                                backgroundColor: "#4343",
                            }}
                        >
                            <Image
                                src={bg}
                                height="450"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    textAlign: "center",
                                    backgroundColor: "#4343",
                                }}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",
                                        color: "#fff",
                                    }}
                                >
                                    Football
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",
                                        color: "#fff",
                                    }}
                                >
                                    Lizards are a widespread group of squamate reptiles, with over
                                    6,000 species
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
