import React, { useState, useEffect } from "react"
import { Box, Typography, Button } from "@mui/material"
import { motion, AnimatePresence } from "framer-motion"
import { withBasePath } from "../basePath"

const testimonialsData = [
    {
        id: 1,
        heading: "",
        description: "12 Minutes to CLAT’s PG course was my one-stop solution to a top rank and my PSU job. I’m eternally grateful.",
        image: withBasePath("/assets/person.jpeg"),
        name: "Himanshu Rajpurohit",
        title: "AIR 10, CLAT PG 2025"
    }
]


export default function TestimonialsSection() {
    const currentTestimonial = testimonialsData[0]

    return (
        <Box
            id="testimonials"
            sx={{
                py: { xs: 8, md: 12 },
                bgcolor: "#fff",
                display: "flex",
                justifyContent: "center",
                width: "100%"
            }}
        >
            <Box
                sx={{
                    flexFlow: { xs: "column", md: "row" },
                    flex: "none",
                    justifyContent: "center",
                    alignContent: "flex-start",
                    alignItems: "flex-start",
                    gap: { xs: "32px", md: "74px" },
                    width: { xs: "95%", md: "1280px" },
                    height: { xs: "auto", md: "434px" },
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    margin: "0 auto",
                }}
            >
                {/* Left Side: Static Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ flex: 1 }}
                >
                    <Box
                        data-aos="fade-up"
                        sx={{
                            pt: { md: 4 },
                            ml: { xs: 0, md: 0 },
                            px: { xs: 2, md: 0 },
                            display: "flex",
                            flexDirection: "column",
                            alignItems: { xs: "flex-start", md: "flex-start" },
                            textAlign: { xs: "left", md: "left" }
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: "32px", md: "60px" },
                                fontWeight: 500,
                                letterSpacing: "-0.02em",
                                color: "#000",
                                lineHeight: 1.1,
                                mb: 3,
                            }}
                        >
                            What Our<br />
                            Learners Say
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: "1rem", md: "1.2rem" },
                                color: "#555",
                                lineHeight: 1.6,
                                textAlign: { xs: "left", md: "left" },
                            }}
                        >
                            Real feedback from students who<br />
                            completed courses on 12 Minutes to CLAT
                        </Typography>


                    </Box>
                </motion.div>

                {/* Right Side: Interactive Testimonial Carousel */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "769px" },
                        height: { xs: "auto", md: "434px" },
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    {/* The Dark Testimonial Card */}
                    <Box
                        sx={{
                            backgroundColor: "rgb(10, 10, 10)",
                            width: "100%",
                            height: { xs: "auto", md: "434px" },
                            borderRadius: "32px",
                            position: "relative",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            cursor: "pointer"
                        }}
                    >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                style={{ width: "100%" }}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: { xs: "auto", md: "434px" },
                                        padding: { xs: "32px", md: "37px" },
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        color: "#fff",
                                        boxSizing: "border-box",
                                    }}
                                >
                                    {/* Top Part: Content */}
                                    <Box>

                                        <Typography
                                            sx={{
                                                fontSize: { xs: "24px", md: "24px" },
                                                color: "#ffffff",
                                                lineHeight: 1.6,
                                                whiteSpace: "pre-line",
                                                fontFamily: 'var(--font-geist-sans), "Geist", sans-serif',
                                            }}
                                        >
                                            {currentTestimonial.description}
                                        </Typography>
                                    </Box>

                                    {/* Bottom Part: Profile */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            gap: { xs: "20px", md: "24px" },
                                            mt: { xs: 5, md: 0 }
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={currentTestimonial.image}
                                            alt={`Student Success Story - ${currentTestimonial.name}`}
                                            sx={{
                                                width: { xs: "100px", md: "120px" },
                                                height: { xs: "100px", md: "120px" },
                                                borderRadius: "16px",
                                                objectFit: "cover",
                                            }}
                                        />

                                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                            {/* SVG Icon (Quote decoration) */}
                                            <Box
                                                component="img"
                                                src="https://framerusercontent.com/images/brQR9jtVEeM45O6KjT0EcTLQuks.svg?width=24&height=21"
                                                alt="Quote decoration"
                                                sx={{ width: "24px", height: "21px", mb: 2, opacity: 0.5 }}
                                            />

                                            <Box>
                                                <Typography
                                                    sx={{
                                                        fontSize: { xs: "20px", md: "24px" },
                                                        fontWeight: 600,
                                                        mb: 0.5,
                                                        letterSpacing: "-0.01em",
                                                    }}
                                                >
                                                    {currentTestimonial.name}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: { xs: "14px", md: "16px" },
                                                        color: "rgba(255, 255, 255, 0.5)",
                                                        fontWeight: 400,
                                                    }}
                                                >
                                                    {currentTestimonial.title}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </motion.div>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
