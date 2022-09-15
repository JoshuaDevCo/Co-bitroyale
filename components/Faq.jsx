import bg from "../image/sasa.PNG"
import Image from "next/image"
// or
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Grid } from "@mui/material"

export default function FAQ() {
    return (
        <div style={{ backgroundColor: "#000" }} className="">
            <div className="container">
                <Grid container spacing={2}>
                    <Grid item md={12} lg={12} xs={12} sm={12}>
                        <br />
                        <Accordion
                            style={{
                                backgroundColor: "#4343",
                                borderRadius: "20px",
                                border: "3px solid #f12",
                            }}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{ color: "#fff" }}>What is an NFT?</Typography>
                            </AccordionSummary>
                            <AccordionDetails style={{ color: "#fff" }}>
                                <Typography>
                                    NFT stands for non-fungible token, which means that its a
                                    unique, digital item with block chain-managed ownership that
                                    users can buy, own, and trade. NFTs can be solely digital art,
                                    or can give owners exclusive access to events, games, websites,
                                    physical items, etc.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <br />

                        <Accordion style={{ backgroundColor: "#4343", borderRadius: "20px" }}>
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{ color: "#fff" }}>
                                    What is Battle Slayers NFT?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails style={{ color: "#fff" }}>
                                <Typography>
                                    Battle slayers are a new class of warriors forged by combining
                                    new school tech with the heart of a traditional warrior. Battle
                                    Slayers is a 6969 collection made up of unique designs,
                                    randomly assigned when minted on the Ethereum block chain. Each
                                    design has a unique level of rarity. This collection has been
                                    designed by an artist based in Madrid
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <br />
                        <Accordion style={{ backgroundColor: "#4343", borderRadius: "20px" }}>
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{ color: "#fff" }}>
                                    What is Battle Slayers NFT?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails style={{ color: "#fff" }}>
                                <Typography>
                                    Battle slayers are a new class of warriors forged by combining
                                    new school tech with the heart of a traditional warrior. Battle
                                    Slayers is a 6969 collection made up of unique designs,
                                    randomly assigned when minted on the Ethereum block chain. Each
                                    design has a unique level of rarity. This collection has been
                                    designed by an artist based in Madrid
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <br />
                        <Accordion style={{ backgroundColor: "#4343", borderRadius: "20px" }}>
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{ color: "#fff" }}>
                                    What is Battle Slayers NFT?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails style={{ color: "#fff" }}>
                                <Typography>
                                    Battle slayers are a new class of warriors forged by combining
                                    new school tech with the heart of a traditional warrior. Battle
                                    Slayers is a 6969 collection made up of unique designs,
                                    randomly assigned when minted on the Ethereum block chain. Each
                                    design has a unique level of rarity. This collection has been
                                    designed by an artist based in Madrid
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <br />

                        <Accordion style={{ backgroundColor: "#4343", borderRadius: "20px" }}>
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{ color: "#fff" }}>
                                    What is Battle Slayers NFT?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails style={{ color: "#fff" }}>
                                <Typography>
                                    Battle slayers are a new class of warriors forged by combining
                                    new school tech with the heart of a traditional warrior. Battle
                                    Slayers is a 6969 collection made up of unique designs,
                                    randomly assigned when minted on the Ethereum block chain. Each
                                    design has a unique level of rarity. This collection has been
                                    designed by an artist based in Madrid
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <br />

                        <Accordion style={{ backgroundColor: "#4343", borderRadius: "20px" }}>
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
                                }
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography style={{ color: "#fff" }}>
                                    What is Battle Slayers NFT?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails style={{ color: "#fff" }}>
                                <Typography>
                                    Battle slayers are a new class of warriors forged by combining
                                    new school tech with the heart of a traditional warrior. Battle
                                    Slayers is a 6969 collection made up of unique designs,
                                    randomly assigned when minted on the Ethereum block chain. Each
                                    design has a unique level of rarity. This collection has been
                                    designed by an artist based in Madrid
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <br />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
