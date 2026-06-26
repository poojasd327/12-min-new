import React, { useState, useEffect } from "react"
import { Box, Typography, Button } from "@mui/material"
import { motion, AnimatePresence } from "framer-motion"
import NorthEastIcon from "@mui/icons-material/NorthEast"
import { withBasePath } from "../basePath"

const testimonialCtaArrowIconSx = {
    fontSize: 18,
    transition: "transform 0.25s ease",
}

const testimonialCtaButtonSx = {
    backgroundColor: "rgb(10, 10, 10)",
    borderRadius: "999px",
    border: "2px solid #fff",
    color: "#ffffff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    padding: "12px 20px",
    fontSize: "16px",
    fontWeight: 500,
    textTransform: "none",
    lineHeight: "1.8em",
    transition: "background-color 0.25s ease, color 0.25s ease",
    "&:hover": {
        bgcolor: "#f2ae41",
        color: "#ffffff",
        borderColor: "#f2ae41",
        "& .MuiButton-endIcon .MuiSvgIcon-root": {
            transform: "rotate(45deg)",
        },
    },
}

const testimonialsData = [
    {
        id: 1,
        heading: '"I can’t thank 12 Minutes to CLAT enough!"',
        description: "I’m incredibly grateful to Keshav Malpani sir and the 12 Minutes to CLAT team for helping me achieve AIR 16 and a seat at NLSIU. The live classes provided immense conceptual clarity, while the GK sessions were remarkably comprehensive yet concise. The offline mocks and detailed answer keys were instrumental in helping me identify and rectify my weaknesses effectively. Can’t thank the team enough for the guidance and support that made my law school dream a reality!",
        image: withBasePath("/assets/astha_photo_page-0001.webp"),
        name: "Astha Nayak",
        title: "AIR 16 - NLSIU (CLAT 2024)"
    },
    {
        id: 2,
        heading: '"Choosing 12mtc is one decision I do not regret at all."',
        description: "I am Nathan Prabu, and I've secured AIR 5 in CLAT 2026. I've had a wonderful experience at 12mtc, from the brilliant mentors to regular mock tests... This platform has helped me stay motivated and optimistic in my CLAT preparation, and I owe a huge deal to Keshav sir for making current affairs interesting. Choosing 12mtc for my CLAT prep is one decision I do not regret at all. Thank you 12 Minutes to CLAT!",
        image: withBasePath("/assets/5 AIR CLAT 2026 - Nathan Prabu.webp"),
        name: "Nathan Prabu",
        title: "AIR 5 - CLAT 2026"
    },
    {
        id: 3,
        heading: '"The faculty helped me get AIR 139."',
        description: "I was a dropper and was unsure about my prep from the big coaching centers. I joined 12mtc's first Aarambh batch and the faculty helped me get AIR 119. I'm really grateful to Keshav sir and all the other faculty for helping me get my dream college. Love you 12mtc ❤️",
        image: withBasePath("/assets/139 AIR KRISHIV .jpg"),
        name: "Krishiv Anand",
        title: "AIR 139 - CLAT 2024"
    }
]

const ChevronRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style={{ width: '100%', height: '100%', fill: 'currentColor' }}>
        <path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z" />
    </svg>
)

const ChevronLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style={{ width: '100%', height: '100%', fill: 'currentColor' }}>
        <path d="M169.4 297.4C156.9 309.9 156.9 330.2 169.4 342.7L361.4 534.7C373.9 547.2 394.2 547.2 406.7 534.7C419.2 522.2 419.2 501.9 406.7 489.4L237.3 320L406.6 150.6C419.1 138.1 419.1 117.8 406.6 105.3C394.1 92.8 373.8 92.8 361.3 105.3L169.3 297.3z" />
    </svg>
)

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const currentTestimonial = testimonialsData[currentIndex]

    const handleNext = React.useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length)
    }, [])

    const handlePrev = React.useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)
    }, [])

    useEffect(() => {
        let interval
        if (isAutoPlaying) {
            interval = setInterval(() => {
                handleNext()
            }, 5000)
        }
        return () => clearInterval(interval)
    }, [isAutoPlaying, handleNext])

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
                            ml: { xs: "37px", md: 0 },
                            display: "flex",
                            flexDirection: "column",
                            alignItems: { xs: "flex-start", md: "flex-start" },
                            textAlign: { xs: "left", md: "left" }
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: "2.5rem", md: "60px" },
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

                        {/* CTA Button with 131px margin */}
                        <Button
                            component="a"
                            href="https://12minutestoclat.com/new-courses/170"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="contained"
                            disableElevation
                            endIcon={<NorthEastIcon sx={{ ...testimonialCtaArrowIconSx, color: "#fff", fontWeight: 500 }} />}
                            sx={{
                                mt: "30px",
                                width: "181.4px",
                                height: "52.8px",
                                ...testimonialCtaButtonSx,
                            }}
                        >
                            View Course
                        </Button>
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
                    {/* Navigation Buttons (Now inside the card area) */}
                    <Box
                        onClick={handlePrev}
                        sx={{
                            position: "absolute",
                            left: -58,
                            zIndex: 20,
                            width: 48,
                            height: 48,
                            bgcolor: "#fff",
                            border: "1px solid #eee",
                            borderRadius: "50%",
                            display: { xs: "none", md: "flex" },
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            color: "#000",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                            transition: "all 0.3s ease",
                            "&:hover": { bgcolor: "#f8f8f8", scale: 1.1, boxShadow: "0 6px 16px rgba(0,0,0,0.1)" },
                        }}
                    >
                        <Box sx={{ width: 24, height: 24 }}><ChevronLeft /></Box>
                    </Box>

                    <Box
                        onClick={handleNext}
                        sx={{
                            position: "absolute",
                            right: -58,
                            zIndex: 20,
                            width: 48,
                            height: 48,
                            bgcolor: "#fff",
                            border: "1px solid #eee",
                            borderRadius: "50%",
                            display: { xs: "none", md: "flex" },
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            color: "#000",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                            transition: "all 0.3s ease",
                            "&:hover": { bgcolor: "#f8f8f8", scale: 1.1, boxShadow: "0 6px 16px rgba(0,0,0,0.1)" },
                        }}
                    >
                        <Box sx={{ width: 24, height: 24 }}><ChevronRight /></Box>
                    </Box>

                    {/* Pagination Dots */}
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: 24,
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: 30,
                            display: "flex",
                            gap: 1.5,
                        }}
                    >
                        {testimonialsData.map((_, idx) => (
                            <Box
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                sx={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    bgcolor: idx === currentIndex ? "#fff" : "rgba(255,255,255,0.3)",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    "&:hover": { scale: 1.2, bgcolor: "#fff" }
                                }}
                            />
                        ))}
                    </Box>

                    {/* The Dark Testimonial Card Slider Wrapper */}
                    <Box
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
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
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
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
                                                fontSize: { xs: "16px", md: "16px" },
                                                color: "rgba(255, 255, 255, 0.7)",
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
                        </AnimatePresence>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
