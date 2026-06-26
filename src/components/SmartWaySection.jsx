import React from "react"
import { Box, Typography } from "@mui/material"
import { motion } from "framer-motion"
import { withBasePath } from "../basePath"
import RegisterButton from "./RegisterButton"
import NorthEastIcon from '@mui/icons-material/NorthEast'

const SMART_WAY_IMAGE = withBasePath("/assets/keshav malpani_11zon.webp")

export default function SmartWaySection({ onRegisterClick }) {
    return (
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography
                variant="h2"
                data-aos="fade-up"
                sx={{
                    fontSize: { xs: "32px", md: "52px" },
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    color: "#000",
                    mb: { xs: 5, md: 7 },
                    textAlign: "center",
                    px: 3
                }}
            >
                Learn from an Expert CLAT Mentor
            </Typography>
            <Box
                data-aos="fade-up"
                sx={{
                    width: { xs: "95%", md: "1200px" },
                    height: { xs: "auto", md: "652px" },
                    minHeight: { xs: "400px", md: "652px" },
                    borderRadius: "40px",
                    overflow: "hidden",
                    position: "relative",
                    border: "2px solid #e0e0e0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    backgroundImage: `url("${SMART_WAY_IMAGE}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                role="img"
                aria-label="Keshav Malpani - CLAT Expert and Mentor"
            >
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Box sx={{ color: "#000", p: { xs: "30px", md: 8 }, transform: { xs: "translateY(-50px)", md: "translateY(-40px)" } }}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: "32px", sm: "3.5rem", md: "60px" },
                                fontWeight: 500,
                                letterSpacing: "-0.02em",
                                lineHeight: 1.1,
                                mb: 2,
                            }}
                        >
                            Keshav Malpani
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, alignItems: "flex-start" }}>
                            {/* Grouping Founder and Guided Students lines */}
                            <Box sx={{ mb: { xs: 0, md: "20px" }, display: "flex", flexDirection: "column", gap: 0.5 }}>
                                <Typography
                                    sx={{
                                        m: 0,
                                        fontFamily: 'var(--font-geist-sans), "Geist", ui-sans-serif, system-ui, sans-serif',
                                        fontWeight: 400,
                                        fontSize: { xs: "18px", md: "32px" },
                                        letterSpacing: "-0.02em",
                                        lineHeight: 1.2,
                                        color: "#212121",
                                        maxWidth: "100%",
                                    }}
                                >
                                    Founder, 12 Minutes to CLAT,
                                </Typography>
                                <Typography
                                    sx={{
                                        m: 0,
                                        fontFamily: 'var(--font-geist-sans), "Geist", ui-sans-serif, system-ui, sans-serif',
                                        fontWeight: 400,
                                        fontSize: { xs: "18px", md: "32px" },
                                        letterSpacing: "-0.02em",
                                        lineHeight: 1.2,
                                        color: "#212121",
                                        maxWidth: "100%",
                                    }}
                                >
                                    Guided 20k+ students to NLUs
                                </Typography>
                            </Box>

                            <Typography
                                sx={{
                                    m: 0,
                                    fontFamily: 'var(--font-geist-sans), "Geist", ui-sans-serif, system-ui, sans-serif',
                                    fontWeight: 400,
                                    fontSize: { xs: "16px", md: "24px" },
                                    letterSpacing: "-0.02em",
                                    lineHeight: 1.2,
                                    color: "#212121",
                                    maxWidth: "100%",
                                    mt: 0.5
                                }}
                            >
                                NLU Jodhpur Alumnus,   CLAT {" "}
                                <Box component="br" sx={{ display: { xs: "block", sm: "none" } }} />
                                Strategy Expert
                            </Typography>

                            <RegisterButton
                                id="mentor_register_btn"
                                onClick={onRegisterClick}
                                text="Register Now"
                                endIcon={<NorthEastIcon sx={{ fontSize: { xs: '16px', md: '20px' }, ml: 0.5, color: '#ffffff', fontWeight: 500 }} />}
                                sx={{
                                    width: { xs: '156px', md: '172.7px' },
                                    height: { xs: '42px', md: '52.8px' },
                                    borderRadius: '999px',
                                    mt: 3,
                                    textTransform: 'none',
                                    '&::after': {
                                        display: 'none',
                                    },
                                    '&:hover': {
                                        '& .MuiButton-endIcon .MuiSvgIcon-root': {
                                            transform: 'rotate(45deg)',
                                        },
                                    },
                                }}
                            />
                        </Box>
                    </Box>
                </motion.div>
            </Box>
        </Box>
    )
}
