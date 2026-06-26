import React from "react"
import { Box, Stack, Typography, Button, Divider } from "@mui/material"
import Link from "next/link"
import NorthEastIcon from "@mui/icons-material/NorthEast"

const footerCtaArrowIconSx = {
    fontSize: 18,
    transition: "transform 0.25s ease",
}

const footerCtaButtonSx = {
    borderColor: "rgba(255,255,255,0.55)",
    bgcolor: "transparent",
    color: "#ffffff",
    fontWeight: 500,
    lineHeight: 1.8,
    borderRadius: "999px",
    textTransform: "none",
    transition: "all 0.2s ease",
    "&:hover": {
        borderColor: "#ffffff",
        bgcolor: "rgba(255,255,255,0.06)",
        color: "#ffffff",
        transform: "translateY(-2px)",
        "& .MuiButton-endIcon .MuiSvgIcon-root": {
            transform: "rotate(45deg)",
        },
    },
}

const FOOTER_SOCIAL_LINKS = [
    {
        label: "YouTube",
        href: "https://www.youtube.com/c/12MinutestoCLAT",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        )
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/12_minutes_to_clat/",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
        )
    },
    {
        label: "Telegram",
        href: "https://t.me/twelveminutestoclat//",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1 .22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.35-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.89.03-.25.38-.51 1.07-.78 4.2-1.82 7-3.03 8.4-3.61 4-.1.83-.15.93-.15.22 0 .44.05.62.15.18.1.32.25.4.45z" />
            </svg>
        )
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/12-mins-to-clat/",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        )
    }
]

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
}

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "#000000",
                color: "#ffffff",
                py: { xs: 4, md: 8 },
                mt: 2,
            }}
        >
            <Box sx={{ width: "100%", maxWidth: "1280px", mx: "auto", px: { xs: 2, md: 4 } }}>
                <Box sx={{ width: "100%", maxWidth: "100%", mx: "auto", minWidth: 0, boxSizing: "border-box" }}>
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        justifyContent="space-between"
                        alignItems={{ xs: "center", md: "center" }}
                        spacing={{ xs: 4, md: 4 }}
                    >
                        {/* Left side - Logo and Tagline */}
                        <Stack
                            spacing={{ xs: 2, md: 3.5 }}
                            alignItems={{ xs: "center", md: "flex-start" }}
                            sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}
                        >
                            <Box
                                component="img"
                                src="https://framerusercontent.com/images/9Z2jFD0J7AbXuNFrXM2GWfGw8.svg?scale-down-to=512&width=1000&height=289"
                                alt="12 Minutes to CLAT Logo"
                                sx={{ width: "169px", height: "66.9px" }}
                            />

                            <Typography
                                component="p"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: 24, sm: 40, md: 56 },
                                    lineHeight: 1.2,
                                    letterSpacing: "-0.03em",
                                    textAlign: { xs: "center", md: "left" },
                                    color: "#ffffff",
                                    maxWidth: { xs: "100%", md: 700 },
                                    m: 0,
                                }}
                            >
                                Smart Prep. Strong<br />Results. Real Success.
                            </Typography>
                        </Stack>

                        {/* Right side */}
                        <Stack
                            spacing={2.5}
                            alignItems={{ xs: "center", md: "flex-end" }}
                            width={{ xs: "100%", md: "auto" }}
                            sx={{ flex: 1 }}
                        >
                            {/* Contact Information */}
                            <Stack sx={{ width: { xs: "100%", md: "auto" }, textAlign: { xs: "center", md: "right" } }}>
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-end" }, gap: 0.5 }}>
                                    <Link
                                        href="mailto:support@12minutestoclat.com"
                                        style={{ color: "#ffffff", textDecoration: "none", fontSize: "18px", transition: "color 0.2s ease" }}
                                        onMouseEnter={(e) => (e.target.style.color = "#F2AE41")}
                                        onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
                                    >
                                        support@12minutestoclat.com
                                    </Link>
                                </Box>
                            </Stack>

                            {/* Social Links */}
                            <Stack
                                direction="row"
                                spacing={3}
                                flexWrap="wrap"
                                sx={{ width: { xs: "100%", md: "auto" }, justifyContent: { xs: "center", md: "flex-end" }, pt: "10px" }}
                            >
                                {FOOTER_SOCIAL_LINKS.map(({ icon, label, href }) => (
                                    <Box
                                        key={label}
                                        component="a"
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            border: "1px solid rgba(255,255,255,0.35)",
                                            color: "#ffffff",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transition: "all 0.2s ease",
                                            "&:hover": {
                                                bgcolor: "rgba(255,255,255,0.08)",
                                                borderColor: "rgba(255,255,255,0.55)",
                                                transform: "translateY(-2px)",
                                            },
                                        }}
                                    >
                                        {icon}
                                    </Box>
                                ))}
                            </Stack>

                            {/* Back to Top */}
                            <Stack
                                direction="row"
                                spacing={1}
                                sx={{ width: { xs: "100%", md: "auto" }, justifyContent: { xs: "center", md: "flex-end" }, alignItems: "center" }}
                            >
                                <Button
                                    type="button"
                                    variant="outlined"
                                    endIcon={<NorthEastIcon sx={{ ...footerCtaArrowIconSx, color: "#fff", fontWeight: 500 }} />}
                                    onClick={scrollToTop}
                                    sx={{
                                        ...footerCtaButtonSx,
                                        fontSize: { xs: 13, md: 12 },
                                        px: { xs: 2, md: 2 },
                                        py: { xs: 0.8, md: 1.1 },
                                    }}
                                >
                                    Back To Top
                                </Button>
                                <Box
                                    component="button"
                                    onClick={scrollToTop}
                                    aria-label="Back to top"
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        border: "1px solid rgba(255,255,255,0.55)",
                                        color: "#ffffff",
                                        bgcolor: "transparent",
                                        borderRadius: "50%",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        transition: "all 0.2s ease",
                                        "&:hover": {
                                            bgcolor: "rgba(255,255,255,0.08)",
                                            borderColor: "#ffffff",
                                            transform: "translateY(-2px)",
                                        },
                                    }}
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                                        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
                                    </svg>
                                </Box>
                            </Stack>
                        </Stack>
                    </Stack>

                    <Divider sx={{ borderColor: "rgba(255,255,255,0.12)", my: { xs: 3, md: 5 } }} />

                    <Typography
                        textAlign="center"
                        sx={{ fontWeight: 400, fontSize: { xs: 12, md: 14 }, color: "rgba(255,255,255,0.5)" }}
                    >
                        © 2026 12-Minutes. All rights reserved.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
