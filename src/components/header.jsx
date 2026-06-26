"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
    Box,
    Stack,
    Button,
    IconButton,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NorthEastIcon from "@mui/icons-material/NorthEast";

const HERO_ORANGE = "#F2AE41";
const HEADER_LOGO_URL = "https://framerusercontent.com/images/r50688b1lCFM4QKupGAh7fOHkE.png?scale-down-to=512&width=828&height=166";
const HERO_LOGO_URL = "https://framerusercontent.com/images/9Z2jFD0J7AbXuNFrXM2GWfGw8.svg?scale-down-to=512&width=1000&height=289";

const pageGutterSx = {
    width: "100%",
    maxWidth: "100%",
    px: { xs: "20px", sm: "30px", md: "50px" },
    boxSizing: "border-box",
};

const heroCtaArrowIconSx = {
    fontSize: { xs: 16, md: 18 },
    transition: "transform 0.25s ease",
};

const HeroOrangeCta = (props) => (
    <Button
        variant="contained"
        disableElevation
        endIcon={<NorthEastIcon sx={{ ...heroCtaArrowIconSx, color: "#fff", fontWeight: 500 }} />}
        {...props}
        sx={{
            bgcolor: HERO_ORANGE,
            color: "#ffffff",
            fontWeight: 500,
            fontSize: { xs: 14, md: 16 },
            lineHeight: 1.8,
            borderRadius: "999px",
            px: { xs: 2, md: 2.75 },
            py: { xs: 1, md: 1.5 },
            textTransform: "none",
            transition: "background-color 0.25s ease, color 0.25s ease",
            "&:hover": {
                bgcolor: "#0b0b0b",
                color: "#ffffff",
                "& .MuiButton-endIcon .MuiSvgIcon-root": {
                    transform: "rotate(45deg)",
                },
            },
            ...(props.sx || {}),
        }}
    />
);

const MobileNavDrawer = ({ open, onClose, navItems, onOpenLeadForm }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleNavClick = (target, label) => {
        setSelectedItem(label);
        setTimeout(() => {
            const el = document.getElementById(target);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
            onClose();
            setSelectedItem(null);
        }, 200);
    };

    return (
        <>
            <Box
                sx={{
                    position: "fixed",
                    top: "16px",
                    right: "16px",
                    width: "70%",
                    maxWidth: "280px",
                    bgcolor: "#ffffff",
                    zIndex: 12000,
                    transform: open ? "translateX(0)" : "translateX(calc(100% + 32px))",
                    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
                    pt: 4,
                    px: 3,
                    pb: 6,
                    borderRadius: "24px",
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3 }}>
                    <IconButton
                        onClick={onClose}
                        sx={{
                            color: "#212121",
                            bgcolor: "rgba(33,33,33,0.05)",
                            "&:hover": { bgcolor: "rgba(33,33,33,1)" },
                            width: 40,
                            height: 40,
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Stack spacing={0.5} sx={{ mt: 1 }}>
                    {navItems.map(({ label, target }) => (
                        <Button
                            key={label}
                            onClick={() => handleNavClick(target, label)}
                            fullWidth
                            sx={{
                                justifyContent: "space-between",
                                py: 1.5,
                                px: 2,
                                borderRadius: "14px",
                                color: selectedItem === label ? HERO_ORANGE : "#212121",
                                bgcolor: selectedItem === label ? "rgba(224, 157, 46, 0.1)" : "transparent",
                                fontWeight: 500,
                                fontSize: "1.1rem",
                                textTransform: "none",
                                transition: "all 0.2s ease",
                                "&:hover": {
                                    bgcolor: "rgba(224, 157, 46, 0.08)",
                                    transform: "translateX(4px)",
                                },
                            }}
                        >
                            {label}
                        </Button>
                    ))}
                </Stack>
            </Box>

            {open && (
                <Box
                    onClick={onClose}
                    sx={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        bgcolor: "rgba(0,0,0,0.5)",
                        zIndex: 11000,
                    }}
                />
            )}
        </>
    );
};

export default function Header({ navItems, onNavClick, onOpenLeadForm }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            const hero = document.getElementById("hero-section");
            
            // Explicit trigger points
            const heroHeight = hero ? hero.offsetHeight : 800;
            const stickyThreshold = heroHeight - 80;
            
            if (y < 20) {
                // State 1: Very top (Hero Transparent)
                setIsVisible(true);
                setIsScrolled(false);
            } else if (y < stickyThreshold) {
                // State 2: Inside Hero (Hidden)
                setIsVisible(false);
                setIsScrolled(false);
            } else {
                // State 3: Past Hero (Sticky White)
                setIsVisible(true);
                setIsScrolled(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check
        
        // Secondary check to handle slow-loading images/dynamic heights
        const timer = setInterval(handleScroll, 500);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearInterval(timer);
        };
    }, []);

    const navTextColor = (isScrolled || mobileMenuOpen) ? "#212121" : "#ffffff";

    return (
        <>
        <Box
            component="header"
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 10000,
                transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease",
                transform: isVisible ? "translateY(0)" : "translateY(-100%)",
                bgcolor: (isScrolled || mobileMenuOpen) ? "rgba(255, 255, 255, 0.98)" : "transparent",
                backdropFilter: (isScrolled || mobileMenuOpen) ? "blur(12px)" : "none",
                boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
                borderBottom: ((isScrolled || mobileMenuOpen) && isVisible) ? "1px solid rgba(0,0,0,0.05)" : "none",
                "&": {
                    backgroundColor: (isScrolled || mobileMenuOpen) ? "rgba(255, 255, 255, 0.98) !important" : "transparent !important"
                }
            }}
        >
            <Box sx={{ ...pageGutterSx, py: { xs: 1.5, md: isScrolled ? 1.5 : 2.5 } }}>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    flexWrap="wrap"
                    rowGap={2}
                    columnGap={2}
                >
                    <Link
                        href="/"
                        style={{
                            position: "relative",
                            display: "block",
                            width: isScrolled ? "157px" : "169px",
                            height: isScrolled ? "36px" : "70px",
                            flexShrink: 0,
                            transition: "all 0.3s ease",
                        }}
                    >
                        <Box
                            component="img"
                            src={isScrolled ? HEADER_LOGO_URL : HERO_LOGO_URL}
                            alt="12 Minutes to CLAT Logo"
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                objectPosition: "left center",
                            }}
                        />
                    </Link>

                    {isMobile ? (
                        <IconButton
                            onClick={() => setMobileMenuOpen(true)}
                            sx={{
                                color: navTextColor,
                                "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Stack direction="row" spacing={isScrolled ? 4 : 6} alignItems="center">
                            <Stack
                                direction="row"
                                spacing={0.5}
                                sx={{
                                    display: "flex",
                                    flex: 1,
                                    justifyContent: "center",
                                    flexWrap: "wrap",
                                }}
                            >
                                {navItems.map(({ label, target }) => (
                                    <Button
                                        key={label}
                                        variant="text"
                                        onClick={() => onNavClick(target)}
                                        sx={{
                                            fontWeight: 500,
                                            fontSize: 17,
                                            lineHeight: 1.6,
                                            color: navTextColor,
                                            textTransform: "none",
                                            px: 1.5,
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                color: navTextColor,
                                                bgcolor: isScrolled ? "rgba(33,33,33,0.06)" : "rgba(255,255,255,0.15)",
                                            },
                                        }}
                                    >
                                        {label}
                                    </Button>
                                ))}
                            </Stack>
                            <HeroOrangeCta onClick={onOpenLeadForm} sx={{ bgcolor: "#000000", "&:hover": { bgcolor: "#333333" } }}>Contact Us</HeroOrangeCta>
                        </Stack>
                    )}
                </Stack>
            </Box>
        </Box>
        <MobileNavDrawer
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            navItems={navItems}
            onOpenLeadForm={onOpenLeadForm}
        />
        </>
    );
}