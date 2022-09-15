import bg from "../image/cgirl.png"
import Image from "next/image"
// or

import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"
import ImageIcon from "@mui/icons-material/Image"
import WorkIcon from "@mui/icons-material/Work"
import BeachAccessIcon from "@mui/icons-material/BeachAccess"
import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit"
import { Grid } from "@mui/material"
import Divider from "@mui/material/Divider"
export default function WinnerList() {
    return (
        <div className="container" style={{ backgroundColor: "#000" }}>
            <br />
            <br />
            <Grid style={{ justifyContent: "center", display: "flex" }}>
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 350,
                        bgcolor: "#4242",
                        borderRadius: "20px",
                        boxShadow: "10px 10px 10px 10px #4242",
                    }}
                >
                    <ListItem
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                            backgroundColor: "rgb(168, 74, 231)",
                            borderRadius: "10px 10px 10px 10px",
                        }}
                    >
                        <h4 style={{ color: "#fff", fontWeight: "900" }}>LATEST WINNERS</h4>
                    </ListItem>
                    <Divider variant="middle" />
                    <ListItem
                        style={{
                            color: "#fff",
                            fontWeight: "700",
                            backgroundColor: "rgb(34, 0, 61)",
                        }}
                    >
                        <ListItemText primary="Alle" secondary="03/04 - 15:34 GMT" />
                        <p className="winner_price">$2335</p>
                    </ListItem>
                    <Divider variant="middle" />
                    <ListItem
                        style={{
                            color: "#fff",
                            fontWeight: "700",
                            backgroundColor: "rgb(34, 0, 61)",
                        }}
                    >
                        <ListItemText primary="Alle" secondary="03/04 - 15:34 GMT" />
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp;
                        <p className="winner_price">$8985</p>
                    </ListItem>
                    <Divider variant="middle" />
                    <ListItem
                        style={{
                            color: "#fff",
                            fontWeight: "700",
                            backgroundColor: "rgb(34, 0, 61)",
                        }}
                    >
                        <ListItemText primary="Alle" secondary="03/04 - 15:34 GMT" />
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp;
                        <p className="winner_price">$9435</p>
                    </ListItem>
                    <Divider variant="middle" />
                    <ListItem
                        style={{
                            color: "#fff",
                            fontWeight: "700",
                            backgroundColor: "rgb(34, 0, 61)",
                        }}
                    >
                        <ListItemText primary="Alle" secondary="03/04 - 15:34 GMT" />
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp;
                        <p className="winner_price">$1735</p>
                    </ListItem>
                    <Divider variant="middle" />
                    <ListItem
                        style={{
                            color: "#fff",
                            fontWeight: "700",
                            backgroundColor: "rgb(34, 0, 61)",
                        }}
                    >
                        <ListItemText primary="Alle" secondary="03/04 - 15:34 GMT" />
                        <p className="winner_price">$2155</p>
                    </ListItem>
                    <Divider variant="middle" />
                    <ListItem
                        style={{
                            color: "#fff",
                            fontWeight: "700",
                            backgroundColor: "rgb(34, 0, 61)",
                        }}
                    >
                        <ListItemText primary="Alle" secondary="03/04 - 15:34 GMT" />

                        <p className="winner_price">$6335</p>
                    </ListItem>
                </List>
            </Grid>
        </div>
    )
}
