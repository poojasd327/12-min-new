module.exports = [
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/src/components/header.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Stack$2f$Stack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Stack/Stack.js [ssr] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Button/Button.js [ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$useMediaQuery$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/useMediaQuery/index.js [ssr] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/useTheme.js [ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Menu.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Close.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$NorthEast$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/NorthEast.js [ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const HERO_ORANGE = "#F2AE41";
const HEADER_LOGO_URL = "https://framerusercontent.com/images/r50688b1lCFM4QKupGAh7fOHkE.png?scale-down-to=512&width=828&height=166";
const HERO_LOGO_URL = "https://framerusercontent.com/images/9Z2jFD0J7AbXuNFrXM2GWfGw8.svg?scale-down-to=512&width=1000&height=289";
const pageGutterSx = {
    width: "100%",
    maxWidth: "100%",
    px: {
        xs: "20px",
        sm: "30px",
        md: "50px"
    },
    boxSizing: "border-box"
};
const heroCtaArrowIconSx = {
    fontSize: {
        xs: 16,
        md: 18
    },
    transition: "transform 0.25s ease"
};
const HeroOrangeCta = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
        variant: "contained",
        disableElevation: true,
        endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$NorthEast$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                ...heroCtaArrowIconSx,
                color: "#fff",
                fontWeight: 500
            }
        }, void 0, false, {
            fileName: "[project]/src/components/header.jsx",
            lineNumber: 38,
            columnNumber: 18
        }, void 0),
        ...props,
        sx: {
            bgcolor: HERO_ORANGE,
            color: "#ffffff",
            fontWeight: 500,
            fontSize: {
                xs: 14,
                md: 16
            },
            lineHeight: 1.8,
            borderRadius: "999px",
            px: {
                xs: 2,
                md: 2.75
            },
            py: {
                xs: 1,
                md: 1.5
            },
            textTransform: "none",
            transition: "background-color 0.25s ease, color 0.25s ease",
            "&:hover": {
                bgcolor: "#0b0b0b",
                color: "#ffffff",
                "& .MuiButton-endIcon .MuiSvgIcon-root": {
                    transform: "rotate(45deg)"
                }
            },
            ...props.sx || {}
        }
    }, void 0, false, {
        fileName: "[project]/src/components/header.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const MobileNavDrawer = ({ open, onClose, navItems, onOpenLeadForm })=>{
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const handleNavClick = (target, label)=>{
        setSelectedItem(label);
        setTimeout(()=>{
            const el = document.getElementById(target);
            if (el) {
                el.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
            onClose();
            setSelectedItem(null);
        }, 200);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
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
                    borderRadius: "24px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            display: "flex",
                            justifyContent: "flex-end",
                            mb: 3
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                            onClick: onClose,
                            sx: {
                                color: "#212121",
                                bgcolor: "rgba(33,33,33,0.05)",
                                "&:hover": {
                                    bgcolor: "rgba(33,33,33,1)"
                                },
                                width: 40,
                                height: 40
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/header.jsx",
                                lineNumber: 109,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/header.jsx",
                            lineNumber: 99,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/header.jsx",
                        lineNumber: 98,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Stack$2f$Stack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                        spacing: 0.5,
                        sx: {
                            mt: 1
                        },
                        children: navItems.map(({ label, target })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                onClick: ()=>handleNavClick(target, label),
                                fullWidth: true,
                                sx: {
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
                                        transform: "translateX(4px)"
                                    }
                                },
                                children: label
                            }, label, false, {
                                fileName: "[project]/src/components/header.jsx",
                                lineNumber: 115,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/header.jsx",
                        lineNumber: 113,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/header.jsx",
                lineNumber: 80,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                onClick: onClose,
                sx: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: "rgba(0,0,0,0.5)",
                    zIndex: 11000
                }
            }, void 0, false, {
                fileName: "[project]/src/components/header.jsx",
                lineNumber: 143,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
function Header({ navItems, onNavClick, onOpenLeadForm }) {
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$useMediaQuery$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])(theme.breakpoints.down("md"));
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
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
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
            clearInterval(timer);
        };
    }, []);
    const navTextColor = isScrolled || mobileMenuOpen ? "#212121" : "#ffffff";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                component: "header",
                sx: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 10000,
                    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease",
                    transform: isVisible ? "translateY(0)" : "translateY(-100%)",
                    bgcolor: isScrolled || mobileMenuOpen ? "rgba(255, 255, 255, 0.98)" : "transparent",
                    backdropFilter: isScrolled || mobileMenuOpen ? "blur(12px)" : "none",
                    boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
                    borderBottom: (isScrolled || mobileMenuOpen) && isVisible ? "1px solid rgba(0,0,0,0.05)" : "none",
                    "&": {
                        backgroundColor: isScrolled || mobileMenuOpen ? "rgba(255, 255, 255, 0.98) !important" : "transparent !important"
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        ...pageGutterSx,
                        py: {
                            xs: 1.5,
                            md: isScrolled ? 1.5 : 2.5
                        }
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Stack$2f$Stack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                        direction: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        rowGap: 2,
                        columnGap: 2,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                style: {
                                    position: "relative",
                                    display: "block",
                                    width: isScrolled ? "157px" : "169px",
                                    height: isScrolled ? "36px" : "70px",
                                    flexShrink: 0,
                                    transition: "all 0.3s ease"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    component: "img",
                                    src: isScrolled ? HEADER_LOGO_URL : HERO_LOGO_URL,
                                    alt: "12 Minutes to CLAT Logo",
                                    sx: {
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                        objectPosition: "left center"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header.jsx",
                                    lineNumber: 246,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.jsx",
                                lineNumber: 235,
                                columnNumber: 21
                            }, this),
                            isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                onClick: ()=>setMobileMenuOpen(true),
                                sx: {
                                    color: navTextColor,
                                    "&:hover": {
                                        bgcolor: "rgba(255,255,255,0.1)"
                                    }
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/components/header.jsx",
                                    lineNumber: 267,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/header.jsx",
                                lineNumber: 260,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Stack$2f$Stack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                direction: "row",
                                spacing: isScrolled ? 4 : 6,
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Stack$2f$Stack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                        direction: "row",
                                        spacing: 0.5,
                                        sx: {
                                            display: "flex",
                                            flex: 1,
                                            justifyContent: "center",
                                            flexWrap: "wrap"
                                        },
                                        children: navItems.map(({ label, target })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                variant: "text",
                                                onClick: ()=>onNavClick(target),
                                                sx: {
                                                    fontWeight: 500,
                                                    fontSize: 17,
                                                    lineHeight: 1.6,
                                                    color: navTextColor,
                                                    textTransform: "none",
                                                    px: 1.5,
                                                    transition: "all 0.3s ease",
                                                    "&:hover": {
                                                        color: navTextColor,
                                                        bgcolor: isScrolled ? "rgba(33,33,33,0.06)" : "rgba(255,255,255,0.15)"
                                                    }
                                                },
                                                children: label
                                            }, label, false, {
                                                fileName: "[project]/src/components/header.jsx",
                                                lineNumber: 282,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header.jsx",
                                        lineNumber: 271,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(HeroOrangeCta, {
                                        onClick: onOpenLeadForm,
                                        sx: {
                                            bgcolor: "#000000",
                                            "&:hover": {
                                                bgcolor: "#333333"
                                            }
                                        },
                                        children: "Contact Us"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header.jsx",
                                        lineNumber: 304,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/header.jsx",
                                lineNumber: 270,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/header.jsx",
                        lineNumber: 227,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/header.jsx",
                    lineNumber: 226,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/header.jsx",
                lineNumber: 207,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MobileNavDrawer, {
                open: mobileMenuOpen,
                onClose: ()=>setMobileMenuOpen(false),
                navItems: navItems,
                onOpenLeadForm: onOpenLeadForm
            }, void 0, false, {
                fileName: "[project]/src/components/header.jsx",
                lineNumber: 310,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/basePath.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "withBasePath",
    ()=>withBasePath
]);
const BASE_PATH = "";
function withBasePath(path) {
    if ("TURBOPACK compile-time truthy", 1) return path;
    //TURBOPACK unreachable
    ;
}
const __TURBOPACK__default__export__ = BASE_PATH;
}),
"[project]/src/components/RegisterButton.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Button/Button.js [ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/styled.js [ssr] (ecmascript) <locals> <export default as styled>");
;
;
;
;
// Create a styled button to handle the complex animations and pseudo-elements
const AnimatedButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"])(({ theme })=>({
        position: 'relative',
        zIndex: 1,
        background: 'linear-gradient(-45deg, #fc6076, #ff9a44, #ef9d43, #e75516)',
        backgroundSize: '600%',
        animation: 'anime 5.5s linear infinite',
        color: '#ffffff',
        fontFamily: '"Montserrat", Sans-serif',
        fontSize: '15px',
        fontWeight: 550,
        textTransform: 'uppercase',
        padding: '16px 20px',
        borderRadius: '12px',
        border: 'none',
        boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s ease',
        lineHeight: 1,
        textAlign: 'center',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover': {
            background: 'linear-gradient(180deg, #FF9E59 0%, #FF9E59 100%)',
            backgroundColor: 'transparent'
        },
        '&:focus': {
            background: 'linear-gradient(180deg, #FF9E59 0%, #FF9E59 100%)',
            backgroundColor: 'transparent'
        },
        // Glow effect behind the button (matches .btnAnimation .elementor-button-link:after)
        '&::after': {
            content: '""',
            position: 'absolute',
            top: '10px',
            left: '0px',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(-45deg, #fc6076, #ff9a44, #ef9d43, #e75516)',
            backgroundSize: '600%',
            filter: 'blur(20px)',
            opacity: 0.8,
            zIndex: -1,
            animation: 'anime 5.5s linear infinite',
            borderRadius: '12px',
            transition: 'all 0.3s ease'
        },
        '&:hover::after': {
            opacity: 0.4
        },
        // Responsive font size and padding
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            padding: '12px 16px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            padding: '10px 14px'
        }
    }));
// Define the keyframes globally (add this to your global CSS file or component)
// If you cannot add to global CSS, you can inject it using a style tag in your component
const keyframes = `
  @keyframes anime {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
// Component to inject keyframes (optional - if not in global CSS)
const GlobalKeyframes = ()=>{
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useEffect(()=>{
        // Check if styles already exist to avoid duplicates
        if (!document.getElementById('anime-keyframes')) {
            const style = document.createElement('style');
            style.id = 'anime-keyframes';
            style.textContent = keyframes;
            document.head.appendChild(style);
        }
    }, []);
    return null;
};
const RegisterButton = ({ id, onClick, text = "Register Now at ₹99/- Only", sx = {}, endIcon, startIcon, fullWidth = false, href, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(GlobalKeyframes, {}, void 0, false, {
                fileName: "[project]/src/components/RegisterButton.jsx",
                lineNumber: 112,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AnimatedButton, {
                id: id,
                variant: "contained",
                onClick: onClick,
                endIcon: endIcon,
                startIcon: startIcon,
                fullWidth: fullWidth,
                href: href,
                sx: {
                    ...sx
                },
                ...props,
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/RegisterButton.jsx",
                lineNumber: 113,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = RegisterButton;
}),
"[externals]/framer-motion [external] (framer-motion, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("framer-motion");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/components/hero/HeroSection.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.js [ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Container$2f$Container$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Container/Container.js [ssr] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Stack$2f$Stack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Stack/Stack.js [ssr] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$useMediaQuery$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/useMediaQuery/index.js [ssr] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/useTheme.js [ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$NorthEast$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/NorthEast.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$basePath$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/basePath.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RegisterButton$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RegisterButton.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const HERO_IMAGE_URL = '/assets/hero_image.webp';
const MOBILE_HERO_IMAGE_URL = '/assets/mob_hero.jpeg';
function HeroSection({ onRegisterClick }) {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const isMobileQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$useMediaQuery$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])(theme.breakpoints.down('sm'));
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // Avoid hydration mismatch by only setting isMobile on client
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        setIsMobile(isMobileQuery);
    }, [
        isMobileQuery
    ]);
    const currentImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$basePath$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["withBasePath"])(isMobile ? MOBILE_HERO_IMAGE_URL : HERO_IMAGE_URL);
    const heroCtaArrowIconSx = {
        fontSize: {
            xs: 16,
            md: 18
        },
        transition: 'transform 0.25s ease'
    };
    const heroContactButtonSx = {
        bgcolor: '#F2AE41',
        color: '#ffffff',
        fontWeight: 500,
        textTransform: 'none',
        borderRadius: '999px',
        fontSize: {
            xs: '14px',
            md: '16px'
        },
        letterSpacing: '-0.01em',
        lineHeight: '1.8em',
        fontFamily: 'inherit',
        transition: 'background-color 0.25s ease, color 0.25s ease',
        '&:hover': {
            bgcolor: '#0b0b0b',
            color: '#ffffff',
            '& .MuiButton-endIcon .MuiSvgIcon-root': {
                transform: 'rotate(45deg)'
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        component: "section",
        id: "hero-section",
        sx: {
            width: '100%',
            minHeight: {
                xs: '100dvh',
                md: '100vh'
            },
            display: 'flex',
            alignItems: {
                xs: 'flex-start',
                md: 'center'
            },
            justifyContent: 'center',
            bgcolor: '#0f0f0f',
            overflow: 'hidden',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: currentImage,
                    alt: "CLAT 2027 Preparation Strategy Webinar Hero Image",
                    fill: true,
                    priority: true,
                    sizes: "100vw",
                    style: {
                        objectFit: 'cover',
                        objectPosition: 'center',
                        zIndex: 0
                    }
                }, isMobile ? 'mobile' : 'desktop', false, {
                    fileName: "[project]/src/components/hero/HeroSection.jsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/hero/HeroSection.jsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Container$2f$Container$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                sx: {
                    maxWidth: '1300px !important',
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: {
                        xs: 'flex-start',
                        md: 'center'
                    },
                    pt: {
                        xs: '120px',
                        md: 0
                    },
                    zIndex: 1,
                    pointerEvents: 'none'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    component: __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div,
                    initial: {
                        opacity: 0,
                        x: -20
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6
                    },
                    sx: {
                        maxWidth: '800px',
                        pointerEvents: 'auto',
                        textAlign: {
                            xs: 'left',
                            md: 'left'
                        },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: {
                            xs: 'flex-start',
                            md: 'flex-start'
                        },
                        transform: {
                            xs: 'none',
                            md: 'none'
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "h1",
                            sx: {
                                fontSize: {
                                    xs: '32px',
                                    sm: '48px',
                                    md: '72px'
                                },
                                fontWeight: 500,
                                lineHeight: '1.2em',
                                color: '#000000',
                                mb: 2,
                                textTransform: 'none',
                                fontFamily: 'inherit'
                            },
                            children: [
                                "All India ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    component: "span",
                                    sx: {
                                        color: '#ffffff'
                                    },
                                    children: "CLAT PG"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/hero/HeroSection.jsx",
                                    lineNumber: 129,
                                    columnNumber: 23
                                }, this),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    component: "br"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/hero/HeroSection.jsx",
                                    lineNumber: 129,
                                    columnNumber: 85
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    component: "span",
                                    sx: {
                                        color: '#ffffff'
                                    },
                                    children: "2027"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/hero/HeroSection.jsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                " Mock Test"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/hero/HeroSection.jsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                width: {
                                    xs: 'fit-content',
                                    md: '450px'
                                },
                                height: {
                                    xs: 'auto',
                                    md: '52px'
                                },
                                bgcolor: '#FFF2DE',
                                padding: {
                                    xs: '10px 12px',
                                    md: '10px 20px'
                                },
                                mb: 2,
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'nowrap',
                                justifyContent: {
                                    xs: 'flex-start',
                                    md: 'flex-start'
                                },
                                borderRadius: '15px',
                                gap: {
                                    xs: '10px',
                                    md: '13px'
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: {
                                            xs: '4px',
                                            md: '8px'
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            component: "img",
                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$basePath$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["withBasePath"])('/assets/Group.svg'),
                                            alt: "Date Icon",
                                            sx: {
                                                width: {
                                                    xs: '20px',
                                                    md: '29px'
                                                },
                                                height: {
                                                    xs: '20px',
                                                    md: '29px'
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hero/HeroSection.jsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            sx: {
                                                fontSize: {
                                                    xs: '13px',
                                                    md: '20px'
                                                },
                                                fontFamily: 'var(--font-geist-sans), "Geist", sans-serif',
                                                fontWeight: 400,
                                                color: '#000000',
                                                lineHeight: 1,
                                                whiteSpace: 'nowrap'
                                            },
                                            children: "05 - July - 2025"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hero/HeroSection.jsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/hero/HeroSection.jsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: {
                                            xs: '4px',
                                            md: '8px'
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            component: "img",
                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$basePath$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["withBasePath"])('/assets/1111.svg'),
                                            alt: "Time Icon",
                                            sx: {
                                                width: {
                                                    xs: '20px',
                                                    md: '29px'
                                                },
                                                height: {
                                                    xs: '20px',
                                                    md: '29px'
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hero/HeroSection.jsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            sx: {
                                                fontSize: {
                                                    xs: '13px',
                                                    md: '20px'
                                                },
                                                fontFamily: 'var(--font-geist-sans), "Geist", sans-serif',
                                                fontWeight: 400,
                                                color: '#000000',
                                                lineHeight: 1,
                                                whiteSpace: 'nowrap'
                                            },
                                            children: "2:00 PM - 4:00 PM"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hero/HeroSection.jsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/hero/HeroSection.jsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/hero/HeroSection.jsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "body1",
                            sx: {
                                fontSize: {
                                    xs: '18px',
                                    md: '24px'
                                },
                                fontWeight: 'regular',
                                letterSpacing: '-0.02em',
                                lineHeight: '1.6em',
                                color: '#000000',
                                mb: {
                                    xs: '15px',
                                    md: 4
                                },
                                fontFamily: '"Inter Display", sans-serif'
                            },
                            children: "Win Up to a 100% Scholarship"
                        }, void 0, false, {
                            fileName: "[project]/src/components/hero/HeroSection.jsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Stack$2f$Stack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                            direction: {
                                xs: 'column',
                                sm: 'row'
                            },
                            spacing: 2,
                            sx: {
                                alignItems: {
                                    xs: 'flex-start',
                                    md: 'flex-start'
                                },
                                width: {
                                    xs: '100%',
                                    sm: 'auto'
                                }
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RegisterButton$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                id: "hero_register_btn",
                                onClick: onRegisterClick,
                                text: "Register Now",
                                endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$NorthEast$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        ...heroCtaArrowIconSx,
                                        color: '#ffffff',
                                        fontWeight: 500
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/hero/HeroSection.jsx",
                                    lineNumber: 213,
                                    columnNumber: 24
                                }, void 0),
                                sx: {
                                    width: {
                                        xs: '145px',
                                        md: '172.7px'
                                    },
                                    height: {
                                        xs: '40px',
                                        md: '52.8px'
                                    },
                                    borderRadius: '999px',
                                    fontSize: {
                                        xs: '13px',
                                        md: '15px'
                                    },
                                    textTransform: 'none',
                                    background: '#000000',
                                    color: '#ffffff',
                                    '&::after': {
                                        display: 'none'
                                    },
                                    '&:hover': {
                                        background: '#000000',
                                        '& .MuiButton-endIcon .MuiSvgIcon-root': {
                                            transform: 'rotate(45deg)'
                                        }
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/hero/HeroSection.jsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/hero/HeroSection.jsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/hero/HeroSection.jsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/hero/HeroSection.jsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/hero/HeroSection.jsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = HeroSection;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/InfoSection.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>InfoSection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.js [ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowBackIosNew$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ArrowBackIosNew.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowForwardIos$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ArrowForwardIos.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
function InfoSection() {
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const scrollLeft = ()=>{
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: -280,
                behavior: 'smooth'
            });
        }
    };
    const scrollRight = ()=>{
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: 280,
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        id: "test-details",
        component: __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div,
        initial: {
            opacity: 0,
            x: -20
        },
        whileInView: {
            opacity: 1,
            x: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.6
        },
        sx: {
            pt: {
                xs: '50px',
                md: '100px'
            },
            pb: {
                xs: '50px',
                md: '100px'
            },
            px: {
                xs: '20px',
                md: '50px'
            },
            bgcolor: '#FAFAF7',
            display: 'flex',
            justifyContent: 'center'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                width: '100%',
                maxWidth: '1140px',
                height: {
                    xs: 'auto',
                    md: '386px'
                },
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    md: 'row'
                },
                justifyContent: 'space-between',
                alignItems: 'flex-start'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        width: {
                            xs: '100%',
                            md: '372px'
                        },
                        height: {
                            xs: 'auto',
                            md: '130px'
                        },
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '23px',
                        mb: {
                            xs: 4,
                            md: 0
                        },
                        mt: {
                            xs: 0,
                            md: '110px'
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "h2",
                            sx: {
                                m: 0,
                                fontSize: {
                                    xs: '32px',
                                    md: '60px'
                                },
                                fontWeight: 500,
                                lineHeight: '1.08em',
                                letterSpacing: '-0.02em',
                                color: '#000000',
                                fontFamily: 'var(--font-geist-sans), "Geist", ui-sans-serif, system-ui, sans-serif'
                            },
                            children: "Test Details"
                        }, void 0, false, {
                            fileName: "[project]/src/components/InfoSection.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "body1",
                            sx: {
                                m: 0,
                                color: '#212121',
                                fontSize: '16px',
                                fontWeight: 400,
                                lineHeight: '1.3em',
                                letterSpacing: '0em',
                                fontFamily: '"Inter", sans-serif'
                            },
                            children: [
                                "Everything you need to know about the test ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/components/InfoSection.jsx",
                                    lineNumber: 87,
                                    columnNumber: 56
                                }, this),
                                "before you register"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InfoSection.jsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/InfoSection.jsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        width: {
                            xs: '100%',
                            md: '748px'
                        },
                        height: {
                            xs: 'auto',
                            md: '386px'
                        },
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            ref: sliderRef,
                            sx: {
                                display: 'flex',
                                gap: '15px',
                                flexDirection: 'row',
                                overflowX: {
                                    xs: 'auto',
                                    md: 'visible'
                                },
                                flexWrap: {
                                    xs: 'nowrap',
                                    md: 'wrap'
                                },
                                scrollSnapType: {
                                    xs: 'x mandatory',
                                    md: 'none'
                                },
                                scrollPaddingLeft: {
                                    xs: '20px',
                                    md: '0px'
                                },
                                pb: {
                                    xs: 1,
                                    md: 0
                                },
                                msOverflowStyle: 'none',
                                scrollbarWidth: 'none',
                                '&::-webkit-scrollbar': {
                                    display: 'none'
                                }
                            },
                            children: [
                                {
                                    bgcolor: '#EBF2FD',
                                    borderColor: '#1567DB',
                                    heading: 'English | Online',
                                    para: 'Paper Medium & Mode',
                                    width: {
                                        xs: '280px',
                                        md: 'calc((100% - 30px) / 3)'
                                    },
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#1567db" viewBox="0 0 256 256"><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"></path></svg>'
                                },
                                {
                                    bgcolor: '#E9F7EF',
                                    borderColor: '#44A77D',
                                    heading: '120',
                                    para: 'No. of Questions',
                                    width: {
                                        xs: '280px',
                                        md: 'calc((100% - 30px) / 3)'
                                    },
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#44a77d" viewBox="0 0 256 256"><path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-11.55,39.29c-4.79,5-9.75,10.17-12.38,16.52-2.52,6.1-2.63,13.07-2.73,19.82-.1,7-.21,14.33-3.32,17.43s-10.39,3.22-17.43,3.32c-6.75.1-13.72.21-19.82,2.73-6.35,2.63-11.52,7.59-16.52,12.38S132,224,128,224s-9.15-4.92-14.11-9.69-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82-2.63-6.35-7.59-11.52-12.38-16.52S32,132,32,128s4.92-9.15,9.69-14.11,9.75-10.17,12.38-16.52c2.52-6.1,2.63-13.07,2.73-19.82.1-7,.21-14.33,3.32-17.43S70.51,56.9,77.55,56.8c6.75-.1,13.72-.21,19.82-2.73,6.35-2.63,11.52-7.59,16.52-12.38S124,32,128,32s9.15,4.92,14.11,9.69,10.17,9.75,16.52,12.38c6.1,2.52,13.07,2.63,19.82,2.73,7,.1,14.33.21,17.43,3.32s3.22,10.39,3.32,17.43c.1,6.75.21,13.72,2.73,19.82,2.63,6.35,7.59,11.52,12.38,16.52S224,124,224,128,219.08,137.15,214.31,142.11ZM140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180Zm28-72c0,17.38-13.76,31.93-32,35.28V144a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8c13.23,0,24-9,24-20s-10.77-20-24-20-24,9-24,20v4a8,8,0,0,1-16,0v-4c0-19.85,17.94-36,40-36S168,88.15,168,108Z"></path></svg>'
                                },
                                {
                                    bgcolor: '#F1EDFD',
                                    borderColor: '#753FD4',
                                    heading: '120 min',
                                    para: ' Test Duration',
                                    width: {
                                        xs: '280px',
                                        md: 'calc((100% - 30px) / 3)'
                                    },
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#753fd4" viewBox="0 0 256 256"><path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z"></path></svg>'
                                },
                                {
                                    bgcolor: '#FFFAF2',
                                    borderColor: '#F2AE41',
                                    heading: '05 - July - 2025',
                                    para: 'Test Date',
                                    width: {
                                        xs: '280px',
                                        md: 'calc((100% - 15px) / 2)'
                                    },
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#f2ae41" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"></path></svg>'
                                },
                                {
                                    bgcolor: '#FDEDF0',
                                    borderColor: '#DB5568',
                                    heading: '0.25 / Wrong Answers',
                                    para: 'Negative marking',
                                    width: {
                                        xs: '280px',
                                        md: 'calc((100% - 15px) / 2)'
                                    },
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#db5568" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>'
                                }
                            ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    component: __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div,
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.5,
                                        delay: index * 0.15
                                    },
                                    whileHover: {
                                        y: -8,
                                        boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
                                        transition: {
                                            duration: 0.2
                                        }
                                    },
                                    sx: {
                                        flexShrink: 0,
                                        width: item.width,
                                        height: '188px',
                                        bgcolor: item.bgcolor,
                                        borderRadius: '12px',
                                        border: `1px solid ${item.borderColor}`,
                                        pt: '20px',
                                        pr: '20px',
                                        pb: '24px',
                                        pl: '20px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '40px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            sx: {
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '8px',
                                                border: `1px solid ${item.borderColor}`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            },
                                            dangerouslySetInnerHTML: {
                                                __html: item.svg
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InfoSection.jsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            sx: {
                                                display: 'flex',
                                                flexDirection: 'column'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    sx: {
                                                        fontSize: '16px',
                                                        fontFamily: 'var(--font-geist-sans), "Geist", ui-sans-serif, system-ui, sans-serif',
                                                        fontWeight: 400,
                                                        letterSpacing: '-0.02em',
                                                        lineHeight: '1.4em',
                                                        color: '#212121'
                                                    },
                                                    children: item.para
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InfoSection.jsx",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    sx: {
                                                        fontSize: '24px',
                                                        fontFamily: 'var(--font-geist-sans), "Geist", ui-sans-serif, system-ui, sans-serif',
                                                        fontWeight: 500,
                                                        letterSpacing: '-0.02em',
                                                        lineHeight: '1.4em',
                                                        color: item.borderColor
                                                    },
                                                    children: item.heading
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/InfoSection.jsx",
                                                    lineNumber: 175,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/InfoSection.jsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/InfoSection.jsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/InfoSection.jsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: {
                                    xs: 'flex',
                                    md: 'none'
                                },
                                justifyContent: 'center',
                                gap: '20px',
                                mt: 1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                    onClick: scrollLeft,
                                    sx: {
                                        border: '1px solid #ccc',
                                        bgcolor: 'white'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowBackIosNew$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            fontSize: '18px',
                                            color: '#333'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InfoSection.jsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InfoSection.jsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                    onClick: scrollRight,
                                    sx: {
                                        border: '1px solid #ccc',
                                        bgcolor: 'white'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowForwardIos$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            fontSize: '18px',
                                            color: '#333'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InfoSection.jsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InfoSection.jsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InfoSection.jsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/InfoSection.jsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/InfoSection.jsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/InfoSection.jsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/WhyTakeMockTestSection.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>WhyTakeMockTestSection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.js [ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
function WhyTakeMockTestSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        component: __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div,
        initial: {
            opacity: 0,
            x: -20
        },
        whileInView: {
            opacity: 1,
            x: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.6
        },
        sx: {
            pt: '31px',
            pr: {
                xs: '20px',
                md: '60px'
            },
            pb: '31px',
            pl: {
                xs: '20px',
                md: '60px'
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "h2",
                sx: {
                    m: 0,
                    fontSize: {
                        xs: '32px',
                        md: '60px'
                    },
                    fontWeight: 500,
                    lineHeight: '1.08em',
                    letterSpacing: '-0.02em',
                    color: '#000000',
                    fontFamily: 'var(--font-geist-sans), "Geist", ui-sans-serif, system-ui, sans-serif',
                    textAlign: 'center'
                },
                children: "Why Take This Mock Test?"
            }, void 0, false, {
                fileName: "[project]/src/components/WhyTakeMockTestSection.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    mt: {
                        xs: '40px',
                        md: '70px'
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '900px'
                },
                children: [
                    {
                        bg: '#FFEED1',
                        border: '#F28511',
                        heading: 'Assess Your Preparation',
                        para: 'Know your current CLAT PG preparation level'
                    },
                    {
                        bg: '#C4F2D4',
                        border: '#22A70D',
                        heading: 'Benchmark Your Performance',
                        para: 'Benchmark yourself against other aspirants'
                    },
                    {
                        bg: '#D7DDFC',
                        border: '#404AF0',
                        heading: 'Get Detailed Insights',
                        para: 'Get a detailed performance analysis'
                    },
                    {
                        bg: '#FCD5E2',
                        border: '#D81C62',
                        heading: 'Earn a 100% Scholarship',
                        para: 'Earn up to 100% Scholarship for the Champion 2027 batch'
                    }
                ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        component: __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div,
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.5,
                            delay: index * 0.15
                        },
                        whileHover: {
                            scale: 1.01,
                            boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
                            transition: {
                                duration: 0.2
                            }
                        },
                        sx: {
                            width: '100%',
                            height: {
                                xs: 'auto',
                                md: '193px'
                            },
                            bgcolor: item.bg,
                            border: 'none',
                            borderRadius: '25px',
                            pt: {
                                xs: '32px',
                                md: '56px'
                            },
                            pr: {
                                xs: '20px',
                                md: '32px'
                            },
                            pb: {
                                xs: '32px',
                                md: '56px'
                            },
                            pl: {
                                xs: '20px',
                                md: '32px'
                            },
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            position: 'sticky',
                            top: `calc(150px + ${index * 25}px)`,
                            zIndex: index,
                            overflow: 'hidden'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: {
                                    position: 'absolute',
                                    left: {
                                        xs: '-10px',
                                        md: '-40px'
                                    },
                                    bottom: '0px',
                                    fontSize: {
                                        xs: '90px',
                                        md: '180px'
                                    },
                                    fontWeight: 400,
                                    lineHeight: 1,
                                    fontFamily: '"Inter Display", sans-serif',
                                    color: item.border,
                                    opacity: 0.2,
                                    userSelect: 'none',
                                    pointerEvents: 'none'
                                },
                                children: String(index + 1).padStart(2, '0')
                            }, void 0, false, {
                                fileName: "[project]/src/components/WhyTakeMockTestSection.jsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    ml: {
                                        xs: '90px',
                                        md: '190px'
                                    },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '16px',
                                    zIndex: 1,
                                    position: 'relative'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "h3",
                                        sx: {
                                            m: 0,
                                            fontSize: {
                                                xs: '24px',
                                                md: '40px'
                                            },
                                            fontWeight: 500,
                                            lineHeight: '1.1em',
                                            letterSpacing: '-0.03em',
                                            fontFamily: '"Inter Display", sans-serif',
                                            color: '#000000'
                                        },
                                        children: item.heading
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WhyTakeMockTestSection.jsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "body1",
                                        sx: {
                                            m: 0,
                                            fontSize: '16px',
                                            fontWeight: 400,
                                            lineHeight: '1.3em',
                                            letterSpacing: '0em',
                                            fontFamily: '"Inter", sans-serif',
                                            color: '#464A52'
                                        },
                                        children: item.para
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/WhyTakeMockTestSection.jsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/WhyTakeMockTestSection.jsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/WhyTakeMockTestSection.jsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/WhyTakeMockTestSection.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WhyTakeMockTestSection.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/HighlightsSection.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>HighlightsSection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.js [ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$basePath$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/basePath.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
function HighlightsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        id: "batch-details",
        component: "section",
        sx: {
            pt: {
                xs: '30px',
                md: '60px'
            },
            pr: {
                xs: '20px',
                md: '60px'
            },
            pb: {
                xs: '30px',
                md: '60px'
            },
            pl: {
                xs: '20px',
                md: '60px'
            },
            bgcolor: '#FAFAF7'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "h2",
                sx: {
                    m: 0,
                    fontSize: {
                        xs: '32px',
                        md: '60px'
                    },
                    fontWeight: 500,
                    lineHeight: '1.08em',
                    letterSpacing: '-0.02em',
                    color: '#000000',
                    fontFamily: 'var(--font-geist-sans), "Geist", ui-sans-serif, system-ui, sans-serif',
                    textAlign: 'center'
                },
                children: "Champion 2027 Batch Highlights"
            }, void 0, false, {
                fileName: "[project]/src/components/HighlightsSection.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    mt: '50px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '24px 27px',
                    justifyContent: 'center',
                    maxWidth: '1200px',
                    mx: 'auto'
                },
                children: [
                    {
                        heading: 'Concepts & Practice Classes',
                        para: 'Build a strong foundation with comprehensive concept-based learning and regular practice sessions.',
                        icon: '1.svg'
                    },
                    {
                        heading: 'Monthly Case Law',
                        para: 'Stay updated with important judgments and legal developments curated specifically for CLAT PG preparation.',
                        icon: '2.svg'
                    },
                    {
                        heading: 'Expert Mentorship & Guidance',
                        para: 'Receive personalized support, strategic preparation advice, and guidance from experienced mentors.',
                        icon: '3.svg'
                    },
                    {
                        heading: '30+ Full-Length Mock Tests',
                        para: 'Simulate the actual exam environment and improve your speed, accuracy, and confidence.',
                        icon: '4.svg'
                    },
                    {
                        heading: 'Detailed Performance Analysis',
                        para: 'Identify strengths and improvement areas through in-depth test analytics and feedback.',
                        icon: '5.svg'
                    },
                    {
                        heading: 'Comprehensive Study Materials',
                        para: 'Access concise, exam-focused study resources and notes designed for effective revision and retention.',
                        icon: '6.svg'
                    }
                ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        component: __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div,
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.5,
                            delay: index * 0.15
                        },
                        whileHover: {
                            y: -8,
                            boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
                            transition: {
                                duration: 0.2
                            }
                        },
                        sx: {
                            width: {
                                xs: '100%',
                                md: '364px'
                            },
                            height: {
                                xs: 'auto',
                                md: '235px'
                            },
                            bgcolor: '#ffffff',
                            border: '1px solid #E8E8E8',
                            p: '16px',
                            borderRadius: '16px',
                            boxSizing: 'border-box',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    width: '46px',
                                    height: '40px',
                                    display: 'flex'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    component: "img",
                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$basePath$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["withBasePath"])(`/assets/${item.icon}`),
                                    alt: item.heading,
                                    sx: {
                                        width: 'auto',
                                        height: '100%',
                                        objectFit: 'contain'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HighlightsSection.jsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/HighlightsSection.jsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "h3",
                                        sx: {
                                            m: 0,
                                            fontSize: '24px',
                                            fontWeight: 500,
                                            lineHeight: '1.4em',
                                            letterSpacing: '0px',
                                            fontFamily: 'var(--font-geist-sans), "Geist", ui-sans-serif, system-ui, sans-serif',
                                            color: '#000000'
                                        },
                                        children: item.heading
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HighlightsSection.jsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "body1",
                                        sx: {
                                            m: 0,
                                            fontSize: '16px',
                                            fontWeight: 400,
                                            lineHeight: '1.4em',
                                            letterSpacing: '0em',
                                            fontFamily: '"Inter Display", sans-serif',
                                            color: '#a2a2a2'
                                        },
                                        children: item.para
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HighlightsSection.jsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HighlightsSection.jsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/HighlightsSection.jsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/HighlightsSection.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HighlightsSection.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/SmartWaySection.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>SmartWaySection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.js [ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$basePath$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/basePath.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RegisterButton$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RegisterButton.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$NorthEast$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/NorthEast.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const SMART_WAY_IMAGE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$basePath$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["withBasePath"])("/assets/girl.avif");
function SmartWaySection({ onRegisterClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        id: "scholarship-criteria",
        sx: {
            py: {
                xs: 8,
                md: 12
            },
            bgcolor: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            "data-aos": "fade-up",
            sx: {
                width: {
                    xs: "95%",
                    md: "1200px"
                },
                height: {
                    xs: "auto",
                    md: "585px"
                },
                minHeight: {
                    xs: "400px",
                    md: "585px"
                },
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
                backgroundPosition: "center"
            },
            role: "img",
            "aria-label": "Keshav Malpani - CLAT Expert and Mentor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    x: -20
                },
                whileInView: {
                    opacity: 1,
                    x: 0
                },
                viewport: {
                    once: true
                },
                transition: {
                    duration: 0.8
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        color: "#000",
                        p: {
                            xs: "30px",
                            md: 8
                        },
                        transform: {
                            xs: "translateY(-50px)",
                            md: "translateY(-40px)"
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "h1",
                            sx: {
                                fontSize: {
                                    xs: "32px",
                                    sm: "3.5rem",
                                    md: "60px"
                                },
                                fontWeight: 500,
                                letterSpacing: "-0.02em",
                                lineHeight: 1.1,
                                mb: 2
                            },
                            children: "Scholarship Criteria"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SmartWaySection.jsx",
                            lineNumber: 42,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: "flex",
                                flexDirection: "column",
                                gap: 0.5,
                                alignItems: "flex-start"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        mb: {
                                            xs: 0,
                                            md: "20px"
                                        },
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 0.5
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        sx: {
                                            m: 0,
                                            fontFamily: 'var(--font-geist-sans), "Geist", ui-sans-serif, system-ui, sans-serif',
                                            fontWeight: 400,
                                            fontSize: {
                                                xs: "18px",
                                                md: "27px"
                                            },
                                            letterSpacing: "-0.02em",
                                            lineHeight: 1.3,
                                            color: "#212121",
                                            maxWidth: "100%"
                                        },
                                        children: [
                                            "The first 5 eligible students ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                component: "br",
                                                sx: {
                                                    display: {
                                                        xs: 'block',
                                                        md: 'none'
                                                    }
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SmartWaySection.jsx",
                                                lineNumber: 70,
                                                columnNumber: 67
                                            }, this),
                                            "will receive a 100% ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                component: "br",
                                                sx: {
                                                    display: {
                                                        xs: 'block',
                                                        md: 'block'
                                                    }
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SmartWaySection.jsx",
                                                lineNumber: 71,
                                                columnNumber: 57
                                            }, this),
                                            "Scholarship for the ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                component: "br",
                                                sx: {
                                                    display: {
                                                        xs: 'block',
                                                        md: 'none'
                                                    }
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SmartWaySection.jsx",
                                                lineNumber: 72,
                                                columnNumber: 57
                                            }, this),
                                            "Champion 2027 Batch"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SmartWaySection.jsx",
                                        lineNumber: 58,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SmartWaySection.jsx",
                                    lineNumber: 57,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RegisterButton$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    id: "mentor_register_btn",
                                    onClick: onRegisterClick,
                                    text: "Register Now",
                                    endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$NorthEast$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            fontSize: {
                                                xs: '16px',
                                                md: '20px'
                                            },
                                            ml: 0.5,
                                            color: '#ffffff',
                                            fontWeight: 500
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SmartWaySection.jsx",
                                        lineNumber: 83,
                                        columnNumber: 42
                                    }, void 0),
                                    sx: {
                                        width: {
                                            xs: '156px',
                                            md: '172.7px'
                                        },
                                        height: {
                                            xs: '42px',
                                            md: '52.8px'
                                        },
                                        borderRadius: '999px',
                                        mt: 3,
                                        textTransform: 'none',
                                        '&::after': {
                                            display: 'none'
                                        },
                                        '&:hover': {
                                            '& .MuiButton-endIcon .MuiSvgIcon-root': {
                                                transform: 'rotate(45deg)'
                                            }
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SmartWaySection.jsx",
                                    lineNumber: 79,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SmartWaySection.jsx",
                            lineNumber: 55,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SmartWaySection.jsx",
                    lineNumber: 41,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SmartWaySection.jsx",
                lineNumber: 35,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SmartWaySection.jsx",
            lineNumber: 14,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SmartWaySection.jsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/TestimonialsSection.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>TestimonialsSection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.js [ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Button/Button.js [ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$NorthEast$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/NorthEast.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$basePath$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/basePath.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const testimonialCtaArrowIconSx = {
    fontSize: 18,
    transition: "transform 0.25s ease"
};
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
            transform: "rotate(45deg)"
        }
    }
};
const testimonialsData = [
    {
        id: 1,
        heading: "",
        description: "12 Minutes to CLAT’s PG course was my one-stop solution to a top rank and my PSU job. I’m eternally grateful.",
        image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$basePath$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["withBasePath"])("/assets/person.jpeg"),
        name: "Himanshu Rajpurohit",
        title: "AIR 10, CLAT PG 2025"
    }
];
const ChevronRight = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 640 640",
        style: {
            width: '100%',
            height: '100%',
            fill: 'currentColor'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            d: "M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"
        }, void 0, false, {
            fileName: "[project]/src/components/TestimonialsSection.jsx",
            lineNumber: 51,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/TestimonialsSection.jsx",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const ChevronLeft = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 640 640",
        style: {
            width: '100%',
            height: '100%',
            fill: 'currentColor'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            d: "M169.4 297.4C156.9 309.9 156.9 330.2 169.4 342.7L361.4 534.7C373.9 547.2 394.2 547.2 406.7 534.7C419.2 522.2 419.2 501.9 406.7 489.4L237.3 320L406.6 150.6C419.1 138.1 419.1 117.8 406.6 105.3C394.1 92.8 373.8 92.8 361.3 105.3L169.3 297.3z"
        }, void 0, false, {
            fileName: "[project]/src/components/TestimonialsSection.jsx",
            lineNumber: 57,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/TestimonialsSection.jsx",
        lineNumber: 56,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [isAutoPlaying, setIsAutoPlaying] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const currentTestimonial = testimonialsData[currentIndex] || testimonialsData[0];
    const handleNext = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useCallback(()=>{
        setCurrentIndex((prev)=>(prev + 1) % testimonialsData.length);
    }, []);
    const handlePrev = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useCallback(()=>{
        setCurrentIndex((prev)=>(prev - 1 + testimonialsData.length) % testimonialsData.length);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(()=>{
                handleNext();
            }, 5000);
        }
        return ()=>clearInterval(interval);
    }, [
        isAutoPlaying,
        handleNext
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        id: "testimonials",
        sx: {
            py: {
                xs: 8,
                md: 12
            },
            bgcolor: "#fff",
            display: "flex",
            justifyContent: "center",
            width: "100%"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                flexFlow: {
                    xs: "column",
                    md: "row"
                },
                flex: "none",
                justifyContent: "center",
                alignContent: "flex-start",
                alignItems: "flex-start",
                gap: {
                    xs: "32px",
                    md: "74px"
                },
                width: {
                    xs: "95%",
                    md: "1280px"
                },
                height: {
                    xs: "auto",
                    md: "434px"
                },
                display: "flex",
                position: "relative",
                overflow: "visible",
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: -20
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6
                    },
                    style: {
                        flex: 1
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        "data-aos": "fade-up",
                        sx: {
                            pt: {
                                md: 4
                            },
                            ml: {
                                xs: 0,
                                md: 0
                            },
                            px: {
                                xs: 2,
                                md: 0
                            },
                            display: "flex",
                            flexDirection: "column",
                            alignItems: {
                                xs: "flex-start",
                                md: "flex-start"
                            },
                            textAlign: {
                                xs: "left",
                                md: "left"
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "h2",
                                sx: {
                                    fontSize: {
                                        xs: "32px",
                                        md: "60px"
                                    },
                                    fontWeight: 500,
                                    letterSpacing: "-0.02em",
                                    color: "#000",
                                    lineHeight: 1.1,
                                    mb: 3
                                },
                                children: [
                                    "What Our",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/TestimonialsSection.jsx",
                                        lineNumber: 142,
                                        columnNumber: 37
                                    }, this),
                                    "Learners Say"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestimonialsSection.jsx",
                                lineNumber: 131,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "body1",
                                sx: {
                                    fontSize: {
                                        xs: "1rem",
                                        md: "1.2rem"
                                    },
                                    color: "#555",
                                    lineHeight: 1.6,
                                    textAlign: {
                                        xs: "left",
                                        md: "left"
                                    }
                                },
                                children: [
                                    "Real feedback from students who",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/TestimonialsSection.jsx",
                                        lineNumber: 155,
                                        columnNumber: 60
                                    }, this),
                                    "completed courses on 12 Minutes to CLAT"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TestimonialsSection.jsx",
                                lineNumber: 146,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                component: "a",
                                href: "https://12minutestoclat.com/new-courses/170",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                variant: "contained",
                                disableElevation: true,
                                endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$NorthEast$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        ...testimonialCtaArrowIconSx,
                                        color: "#fff",
                                        fontWeight: 500
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TestimonialsSection.jsx",
                                    lineNumber: 167,
                                    columnNumber: 38
                                }, void 0),
                                sx: {
                                    mt: "30px",
                                    width: "181.4px",
                                    height: "52.8px",
                                    ...testimonialCtaButtonSx
                                },
                                children: "View Course"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestimonialsSection.jsx",
                                lineNumber: 160,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TestimonialsSection.jsx",
                        lineNumber: 119,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/TestimonialsSection.jsx",
                    lineNumber: 112,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        width: {
                            xs: "100%",
                            md: "769px"
                        },
                        height: {
                            xs: "auto",
                            md: "434px"
                        },
                        position: "relative",
                        display: "flex",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            onClick: handlePrev,
                            sx: {
                                position: "absolute",
                                left: -58,
                                zIndex: 20,
                                width: 48,
                                height: 48,
                                bgcolor: "#fff",
                                border: "1px solid #eee",
                                borderRadius: "50%",
                                display: {
                                    xs: "none",
                                    md: "flex"
                                },
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                color: "#000",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    bgcolor: "#f8f8f8",
                                    scale: 1.1,
                                    boxShadow: "0 6px 16px rgba(0,0,0,0.1)"
                                }
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    width: 24,
                                    height: 24
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ChevronLeft, {}, void 0, false, {
                                    fileName: "[project]/src/components/TestimonialsSection.jsx",
                                    lineNumber: 212,
                                    columnNumber: 61
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestimonialsSection.jsx",
                                lineNumber: 212,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/TestimonialsSection.jsx",
                            lineNumber: 191,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            onClick: handleNext,
                            sx: {
                                position: "absolute",
                                right: -58,
                                zIndex: 20,
                                width: 48,
                                height: 48,
                                bgcolor: "#fff",
                                border: "1px solid #eee",
                                borderRadius: "50%",
                                display: {
                                    xs: "none",
                                    md: "flex"
                                },
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                color: "#000",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    bgcolor: "#f8f8f8",
                                    scale: 1.1,
                                    boxShadow: "0 6px 16px rgba(0,0,0,0.1)"
                                }
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    width: 24,
                                    height: 24
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ChevronRight, {}, void 0, false, {
                                    fileName: "[project]/src/components/TestimonialsSection.jsx",
                                    lineNumber: 236,
                                    columnNumber: 61
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestimonialsSection.jsx",
                                lineNumber: 236,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/TestimonialsSection.jsx",
                            lineNumber: 215,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                position: "absolute",
                                bottom: 24,
                                left: "50%",
                                transform: "translateX(-50%)",
                                zIndex: 30,
                                display: "flex",
                                gap: 1.5
                            },
                            children: testimonialsData.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    onClick: ()=>setCurrentIndex(idx),
                                    sx: {
                                        width: 10,
                                        height: 10,
                                        borderRadius: "50%",
                                        bgcolor: idx === currentIndex ? "#fff" : "rgba(255,255,255,0.3)",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            scale: 1.2,
                                            bgcolor: "#fff"
                                        }
                                    }
                                }, idx, false, {
                                    fileName: "[project]/src/components/TestimonialsSection.jsx",
                                    lineNumber: 252,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/TestimonialsSection.jsx",
                            lineNumber: 240,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            onMouseEnter: ()=>setIsAutoPlaying(false),
                            onMouseLeave: ()=>setIsAutoPlaying(true),
                            sx: {
                                backgroundColor: "rgb(10, 10, 10)",
                                width: "100%",
                                height: {
                                    xs: "auto",
                                    md: "434px"
                                },
                                borderRadius: "32px",
                                position: "relative",
                                overflow: "hidden",
                                display: "flex",
                                alignItems: "center",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                cursor: "pointer"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeInOut"
                                    },
                                    style: {
                                        width: "100%"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            width: "100%",
                                            height: {
                                                xs: "auto",
                                                md: "434px"
                                            },
                                            padding: {
                                                xs: "32px",
                                                md: "37px"
                                            },
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                            color: "#fff",
                                            boxSizing: "border-box"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    sx: {
                                                        fontSize: {
                                                            xs: "24px",
                                                            md: "24px"
                                                        },
                                                        color: "#ffffff",
                                                        lineHeight: 1.6,
                                                        whiteSpace: "pre-line",
                                                        fontFamily: 'var(--font-geist-sans), "Geist", sans-serif'
                                                    },
                                                    children: currentTestimonial.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TestimonialsSection.jsx",
                                                    lineNumber: 309,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TestimonialsSection.jsx",
                                                lineNumber: 307,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    gap: {
                                                        xs: "20px",
                                                        md: "24px"
                                                    },
                                                    mt: {
                                                        xs: 5,
                                                        md: 0
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        component: "img",
                                                        src: currentTestimonial.image,
                                                        alt: `Student Success Story - ${currentTestimonial.name}`,
                                                        sx: {
                                                            width: {
                                                                xs: "100px",
                                                                md: "120px"
                                                            },
                                                            height: {
                                                                xs: "100px",
                                                                md: "120px"
                                                            },
                                                            borderRadius: "16px",
                                                            objectFit: "cover"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TestimonialsSection.jsx",
                                                        lineNumber: 332,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        sx: {
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            justifyContent: "center"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                component: "img",
                                                                src: "https://framerusercontent.com/images/brQR9jtVEeM45O6KjT0EcTLQuks.svg?width=24&height=21",
                                                                alt: "Quote decoration",
                                                                sx: {
                                                                    width: "24px",
                                                                    height: "21px",
                                                                    mb: 2,
                                                                    opacity: 0.5
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/TestimonialsSection.jsx",
                                                                lineNumber: 346,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                        sx: {
                                                                            fontSize: {
                                                                                xs: "20px",
                                                                                md: "24px"
                                                                            },
                                                                            fontWeight: 600,
                                                                            mb: 0.5,
                                                                            letterSpacing: "-0.01em"
                                                                        },
                                                                        children: currentTestimonial.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/TestimonialsSection.jsx",
                                                                        lineNumber: 354,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                        sx: {
                                                                            fontSize: {
                                                                                xs: "14px",
                                                                                md: "16px"
                                                                            },
                                                                            color: "rgba(255, 255, 255, 0.5)",
                                                                            fontWeight: 400
                                                                        },
                                                                        children: currentTestimonial.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/TestimonialsSection.jsx",
                                                                        lineNumber: 364,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/TestimonialsSection.jsx",
                                                                lineNumber: 353,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/TestimonialsSection.jsx",
                                                        lineNumber: 344,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/TestimonialsSection.jsx",
                                                lineNumber: 323,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TestimonialsSection.jsx",
                                        lineNumber: 294,
                                        columnNumber: 33
                                    }, this)
                                }, currentIndex, false, {
                                    fileName: "[project]/src/components/TestimonialsSection.jsx",
                                    lineNumber: 286,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestimonialsSection.jsx",
                                lineNumber: 285,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/TestimonialsSection.jsx",
                            lineNumber: 269,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TestimonialsSection.jsx",
                    lineNumber: 181,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TestimonialsSection.jsx",
            lineNumber: 95,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/TestimonialsSection.jsx",
        lineNumber: 85,
        columnNumber: 9
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/Footer.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Stack$2f$Stack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Stack/Stack.js [ssr] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.js [ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Button/Button.js [ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Divider/Divider.js [ssr] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$NorthEast$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/NorthEast.js [ssr] (ecmascript)");
;
;
;
;
;
const footerCtaArrowIconSx = {
    fontSize: 18,
    transition: "transform 0.25s ease"
};
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
            transform: "rotate(45deg)"
        }
    }
};
const FOOTER_SOCIAL_LINKS = [
    {
        label: "YouTube",
        href: "https://www.youtube.com/c/12MinutestoCLAT",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            width: "20",
            height: "20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.jsx",
                lineNumber: 37,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.jsx",
            lineNumber: 36,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/12_minutes_to_clat/",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            width: "20",
            height: "20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.jsx",
                lineNumber: 46,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.jsx",
            lineNumber: 45,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "Telegram",
        href: "https://t.me/twelveminutestoclat//",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            width: "20",
            height: "20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1 .22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.35-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.89.03-.25.38-.51 1.07-.78 4.2-1.82 7-3.03 8.4-3.61 4-.1.83-.15.93-.15.22 0 .44.05.62.15.18.1.32.25.4.45z"
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.jsx",
                lineNumber: 55,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.jsx",
            lineNumber: 54,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/12-mins-to-clat/",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            width: "20",
            height: "20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.jsx",
                lineNumber: 64,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.jsx",
            lineNumber: 63,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const scrollToTop = ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        component: "footer",
        sx: {
            bgcolor: "#000000",
            color: "#ffffff",
            py: {
                xs: 4,
                md: 8
            },
            mt: 2
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                width: "100%",
                maxWidth: "1280px",
                mx: "auto",
                px: {
                    xs: 2,
                    md: 4
                }
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    width: "100%",
                    maxWidth: "100%",
                    mx: "auto",
                    minWidth: 0,
                    boxSizing: "border-box"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Stack$2f$Stack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                        direction: {
                            xs: "column",
                            md: "row"
                        },
                        justifyContent: "space-between",
                        alignItems: {
                            xs: "center",
                            md: "center"
                        },
                        spacing: {
                            xs: 4,
                            md: 4
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Stack$2f$Stack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                spacing: {
                                    xs: 2,
                                    md: 3.5
                                },
                                alignItems: {
                                    xs: "center",
                                    md: "flex-start"
                                },
                                sx: {
                                    flex: 1,
                                    textAlign: {
                                        xs: "center",
                                        md: "left"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        component: "img",
                                        src: "https://framerusercontent.com/images/9Z2jFD0J7AbXuNFrXM2GWfGw8.svg?scale-down-to=512&width=1000&height=289",
                                        alt: "12 Minutes to CLAT Logo",
                                        sx: {
                                            width: "169px",
                                            height: "66.9px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 99,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        component: "p",
                                        sx: {
                                            fontWeight: 600,
                                            fontSize: {
                                                xs: 24,
                                                sm: 40,
                                                md: 56
                                            },
                                            lineHeight: 1.2,
                                            letterSpacing: "-0.03em",
                                            textAlign: {
                                                xs: "center",
                                                md: "left"
                                            },
                                            color: "#ffffff",
                                            maxWidth: {
                                                xs: "100%",
                                                md: 700
                                            },
                                            m: 0
                                        },
                                        children: [
                                            "Smart Prep. Strong",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 119,
                                                columnNumber: 51
                                            }, this),
                                            "Results. Real Success."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 106,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 94,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Stack$2f$Stack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                spacing: 2.5,
                                alignItems: {
                                    xs: "center",
                                    md: "flex-end"
                                },
                                width: {
                                    xs: "100%",
                                    md: "auto"
                                },
                                sx: {
                                    flex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Stack$2f$Stack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                        sx: {
                                            width: {
                                                xs: "100%",
                                                md: "auto"
                                            },
                                            textAlign: {
                                                xs: "center",
                                                md: "right"
                                            }
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            sx: {
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: {
                                                    xs: "center",
                                                    md: "flex-end"
                                                },
                                                gap: 0.5
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "mailto:support@12minutestoclat.com",
                                                style: {
                                                    color: "#ffffff",
                                                    textDecoration: "none",
                                                    fontSize: "18px",
                                                    transition: "color 0.2s ease"
                                                },
                                                onMouseEnter: (e)=>e.target.style.color = "#F2AE41",
                                                onMouseLeave: (e)=>e.target.style.color = "#ffffff",
                                                children: "support@12minutestoclat.com"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 133,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 132,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 131,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Stack$2f$Stack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                        direction: "row",
                                        spacing: 3,
                                        flexWrap: "wrap",
                                        sx: {
                                            width: {
                                                xs: "100%",
                                                md: "auto"
                                            },
                                            justifyContent: {
                                                xs: "center",
                                                md: "flex-end"
                                            },
                                            pt: "10px"
                                        },
                                        children: FOOTER_SOCIAL_LINKS.map(({ icon, label, href })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                component: "a",
                                                href: href,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                "aria-label": label,
                                                sx: {
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
                                                        transform: "translateY(-2px)"
                                                    }
                                                },
                                                children: icon
                                            }, label, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 152,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 145,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Stack$2f$Stack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                                        direction: "row",
                                        spacing: 1,
                                        sx: {
                                            width: {
                                                xs: "100%",
                                                md: "auto"
                                            },
                                            justifyContent: {
                                                xs: "center",
                                                md: "flex-end"
                                            },
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                type: "button",
                                                variant: "outlined",
                                                endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$NorthEast$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    sx: {
                                                        ...footerCtaArrowIconSx,
                                                        color: "#fff",
                                                        fontWeight: 500
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.jsx",
                                                    lineNumber: 190,
                                                    columnNumber: 46
                                                }, void 0),
                                                onClick: scrollToTop,
                                                sx: {
                                                    ...footerCtaButtonSx,
                                                    fontSize: {
                                                        xs: 13,
                                                        md: 12
                                                    },
                                                    px: {
                                                        xs: 2,
                                                        md: 2
                                                    },
                                                    py: {
                                                        xs: 0.8,
                                                        md: 1.1
                                                    }
                                                },
                                                children: "Back To Top"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 187,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                component: "button",
                                                onClick: scrollToTop,
                                                "aria-label": "Back to top",
                                                sx: {
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
                                                        transform: "translateY(-2px)"
                                                    }
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    width: "22",
                                                    height: "22",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                        d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.jsx",
                                                        lineNumber: 225,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.jsx",
                                                    lineNumber: 224,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 201,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 182,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 124,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.jsx",
                        lineNumber: 87,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Divider$2f$Divider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                        sx: {
                            borderColor: "rgba(255,255,255,0.12)",
                            my: {
                                xs: 3,
                                md: 5
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.jsx",
                        lineNumber: 232,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        textAlign: "center",
                        sx: {
                            fontWeight: 400,
                            fontSize: {
                                xs: 12,
                                md: 14
                            },
                            color: "rgba(255,255,255,0.5)"
                        },
                        children: "© 2026 12-Minutes. All rights reserved."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.jsx",
                        lineNumber: 234,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.jsx",
                lineNumber: 86,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.jsx",
            lineNumber: 85,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Footer.jsx",
        lineNumber: 76,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/LeadCaptureFormDialog.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LeadCaptureFormDialog
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Dialog/Dialog.js [ssr] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogTitle/DialogTitle.js [ssr] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogContent/DialogContent.js [ssr] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/TextField/TextField.js [ssr] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Select$2f$Select$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Select/Select.js [ssr] (ecmascript) <export default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/MenuItem/MenuItem.js [ssr] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$FormControl$2f$FormControl$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/FormControl/FormControl.js [ssr] (ecmascript) <export default as FormControl>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$InputLabel$2f$InputLabel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__InputLabel$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/InputLabel/InputLabel.js [ssr] (ecmascript) <export default as InputLabel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Button/Button.js [ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Stack$2f$Stack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Stack/Stack.js [ssr] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.js [ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Close.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DoneAllOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/DoneAllOutlined.js [ssr] (ecmascript)");
"use client";
;
;
;
;
;
const HERO_ORANGE = "#F2AE41";
const LEAD_CAPTURE_API_URL = "https://crm-leads-service.pointofconnect.com/api/leads/webapi/07bf1e31-6348-4c7a-bfc4-827e22176716";
function LeadCaptureFormDialog({ open, onClose, formType }) {
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [studentClass, setStudentClass] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [submitError, setSubmitError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!open) {
            setSubmitted(false);
            setName("");
            setPhone("");
            setStudentClass("");
            setEmail("");
            setIsSubmitting(false);
            setSubmitError("");
        }
    }, [
        open
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (name && phone && studentClass && email) {
            try {
                setIsSubmitting(true);
                setSubmitError("");
                const response = await fetch(LEAD_CAPTURE_API_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "name": name,
                        "phone-number": phone,
                        "current-class-": studentClass,
                        "email-address": email,
                        "source": "CLAT PG"
                    })
                });
                if (!response.ok) {
                    throw new Error(`Lead API failed with status ${response.status}`);
                }
                setSubmitted(true);
            } catch (error) {
                console.error("Failed to submit lead form:", error);
                setSubmitError("Something went wrong while submitting. Please try again.");
            } finally{
                setIsSubmitting(false);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: open,
        onClose: onClose,
        maxWidth: "sm",
        disableScrollLock: false,
        "aria-labelledby": "lead-form-title",
        slotProps: {
            backdrop: {
                sx: {
                    bgcolor: "rgba(0,0,0,0.7)",
                    backdropFilter: "blur(4px)"
                }
            }
        },
        PaperProps: {
            sx: {
                borderRadius: {
                    xs: "24px",
                    sm: "28px"
                },
                overflow: "visible",
                boxShadow: "0 32px 64px rgba(0,0,0,0.25)",
                position: "relative",
                maxHeight: "90vh",
                margin: {
                    xs: "16px",
                    sm: "32px"
                },
                width: {
                    xs: "calc(100% - 32px)",
                    sm: "500px"
                }
            }
        },
        sx: {
            zIndex: 1300,
            "& .MuiDialog-container": {
                alignItems: "center",
                justifyContent: "center"
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
            sx: {
                px: {
                    xs: 3,
                    sm: 4
                },
                pb: 4,
                pt: 1,
                overflowY: "auto",
                overflowX: "hidden"
            },
            children: submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Stack$2f$Stack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                spacing: 3,
                sx: {
                    py: 4,
                    textAlign: "center",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            width: 80,
                            height: 80,
                            borderRadius: "50%",
                            backgroundColor: "#4de71f",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DoneAllOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                fontSize: 40,
                                color: "#fff"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/LeadCaptureFormDialog.jsx",
                            lineNumber: 142,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/LeadCaptureFormDialog.jsx",
                        lineNumber: 130,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        sx: {
                            fontFamily: "inherit",
                            fontWeight: 700,
                            fontSize: 24,
                            color: "#0A0915"
                        },
                        children: "Thank You! 🎉"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LeadCaptureFormDialog.jsx",
                        lineNumber: 144,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        sx: {
                            fontFamily: "inherit",
                            fontSize: 15,
                            color: "#475569",
                            lineHeight: 1.6
                        },
                        children: "Your registration is confirmed."
                    }, void 0, false, {
                        fileName: "[project]/src/components/LeadCaptureFormDialog.jsx",
                        lineNumber: 154,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "contained",
                        onClick: onClose,
                        sx: {
                            alignSelf: "center",
                            mt: 2,
                            bgcolor: HERO_ORANGE,
                            color: "#fff",
                            fontFamily: "inherit",
                            textTransform: "none",
                            fontWeight: 600,
                            borderRadius: "40px",
                            px: 4,
                            py: 1.5,
                            "&:hover": {
                                bgcolor: "#e09d2e",
                                transform: "translateY(-2px)"
                            }
                        },
                        children: "Close"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LeadCaptureFormDialog.jsx",
                        lineNumber: 164,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LeadCaptureFormDialog.jsx",
                lineNumber: 126,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                component: "form",
                onSubmit: handleSubmit,
                sx: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 2.5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                        id: "lead-form-title",
                        sx: {
                            position: "relative",
                            pr: {
                                xs: 5,
                                sm: 0
                            },
                            pt: 3.5,
                            pb: 1.5,
                            fontFamily: "inherit",
                            fontWeight: 700,
                            fontSize: {
                                xs: 22,
                                sm: 28
                            },
                            lineHeight: 1.3,
                            color: "#0A0915",
                            letterSpacing: "-0.02em",
                            textAlign: "center",
                            whiteSpace: {
                                xs: "normal",
                                sm: "nowrap"
                            }
                        },
                        children: [
                            "Reserve Your Webinar Spot",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                component: "span",
                                display: "block",
                                sx: {
                                    mt: 1,
                                    fontFamily: "inherit",
                                    fontWeight: 500,
                                    fontSize: 14,
                                    lineHeight: 1.5,
                                    color: "#0A0915",
                                    whiteSpace: "normal"
                                },
                                children: "Learn the exact 7-month strategy to crack CLAT 2027"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LeadCaptureFormDialog.jsx",
                                lineNumber: 211,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                onClick: onClose,
                                "aria-label": "Close form",
                                sx: {
                                    position: "absolute",
                                    right: {
                                        xs: -10,
                                        sm: -6
                                    },
                                    top: 18,
                                    color: "#000",
                                    bgcolor: "#f1f5f9",
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                        bgcolor: HERO_ORANGE,
                                        color: "#fff",
                                        transform: "rotate(90deg)"
                                    },
                                    width: 36,
                                    height: 36
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        fontSize: 18
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LeadCaptureFormDialog.jsx",
                                    lineNumber: 245,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/LeadCaptureFormDialog.jsx",
                                lineNumber: 226,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LeadCaptureFormDialog.jsx",
                        lineNumber: 193,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                        required: true,
                        label: "Full name",
                        name: "name",
                        value: name,
                        onChange: (e)=>setName(e.target.value),
                        autoComplete: "name",
                        fullWidth: true,
                        placeholder: "e.g., Rahul Sharma",
                        sx: {
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "12px",
                                backgroundColor: "transparent",
                                transition: "all 0.2s",
                                "&:hover": {
                                    backgroundColor: "#ffffff",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                                },
                                "&.Mui-focused": {
                                    backgroundColor: "#ffffff",
                                    boxShadow: `0 0 0 2px rgba(224, 157, 46, 0.2)`
                                }
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/LeadCaptureFormDialog.jsx",
                        lineNumber: 249,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                        required: true,
                        type: "tel",
                        label: "Mobile number",
                        name: "phone",
                        value: phone,
                        onChange: (e)=>setPhone(e.target.value),
                        autoComplete: "tel",
                        fullWidth: true,
                        placeholder: "10-digit mobile number",
                        sx: {
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "12px",
                                backgroundColor: "transparent",
                                transition: "all 0.2s",
                                "&:hover": {
                                    backgroundColor: "#ffffff",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                                },
                                "&.Mui-focused": {
                                    backgroundColor: "#ffffff",
                                    boxShadow: `0 0 0 2px rgba(224, 157, 46, 0.2)`
                                }
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/LeadCaptureFormDialog.jsx",
                        lineNumber: 275,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$FormControl$2f$FormControl$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"], {
                        fullWidth: true,
                        required: true,
                        sx: {
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "12px",
                                backgroundColor: "transparent",
                                transition: "all 0.2s",
                                "&:hover": {
                                    backgroundColor: "#ffffff",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                                },
                                "&.Mui-focused": {
                                    backgroundColor: "#ffffff",
                                    boxShadow: `0 0 0 2px rgba(224, 157, 46, 0.2)`
                                }
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$InputLabel$2f$InputLabel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__InputLabel$3e$__["InputLabel"], {
                                sx: {
                                    fontFamily: "inherit"
                                },
                                children: "Current Academic Year"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LeadCaptureFormDialog.jsx",
                                lineNumber: 321,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Select$2f$Select$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
                                value: studentClass,
                                label: "Current Academic Year",
                                onChange: (e)=>setStudentClass(e.target.value),
                                MenuProps: {
                                    disableScrollLock: true,
                                    PaperProps: {
                                        sx: {
                                            zIndex: 1400,
                                            borderRadius: "12px",
                                            marginTop: "4px",
                                            maxHeight: "300px",
                                            boxShadow: "0 8px 24px rgba(0,0,0,0.12)"
                                        }
                                    },
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "left"
                                    },
                                    transformOrigin: {
                                        vertical: "top",
                                        horizontal: "left"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        value: "Final Year Law Student",
                                        children: "Final Year Law Student"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LeadCaptureFormDialog.jsx",
                                        lineNumber: 349,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        value: "Law Graduate",
                                        children: "Law Graduate"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LeadCaptureFormDialog.jsx",
                                        lineNumber: 350,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        value: "Working Professional",
                                        children: "Working Professional"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LeadCaptureFormDialog.jsx",
                                        lineNumber: 351,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LeadCaptureFormDialog.jsx",
                                lineNumber: 324,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LeadCaptureFormDialog.jsx",
                        lineNumber: 302,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                        required: true,
                        type: "email",
                        label: "Email address",
                        name: "email",
                        value: email,
                        onChange: (e)=>setEmail(e.target.value),
                        autoComplete: "email",
                        fullWidth: true,
                        placeholder: "e.g., rahul@example.com",
                        sx: {
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "12px",
                                backgroundColor: "transparent",
                                transition: "all 0.2s",
                                "&:hover": {
                                    backgroundColor: "#ffffff",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                                },
                                "&.Mui-focused": {
                                    backgroundColor: "#ffffff",
                                    boxShadow: `0 0 0 2px rgba(224, 157, 46, 0.2)`
                                }
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/LeadCaptureFormDialog.jsx",
                        lineNumber: 355,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        type: "submit",
                        variant: "contained",
                        disableElevation: true,
                        id: "pop_up_submit",
                        disabled: isSubmitting,
                        sx: {
                            mt: 1,
                            bgcolor: "#0b0b0b",
                            color: "#ffffff",
                            fontFamily: "inherit",
                            fontWeight: 600,
                            fontSize: 16,
                            width: "80%",
                            textTransform: "none",
                            mx: "auto",
                            borderRadius: "40px",
                            py: 1.5,
                            transition: "all 0.3s ease",
                            "&:hover": {
                                bgcolor: HERO_ORANGE,
                                transform: "translateY(-2px)",
                                boxShadow: "0 8px 20px rgba(224, 157, 46, 0.25)"
                            },
                            "&:active": {
                                transform: "translateY(0)"
                            },
                            "&.Mui-disabled": {
                                bgcolor: "#e2e8f0",
                                color: "#94a3b8"
                            }
                        },
                        children: isSubmitting ? "Submitting..." : "Submit →"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LeadCaptureFormDialog.jsx",
                        lineNumber: 382,
                        columnNumber: 13
                    }, this),
                    submitError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        sx: {
                            fontFamily: "inherit",
                            fontSize: 13,
                            color: "#b91c1c",
                            textAlign: "center"
                        },
                        children: submitError
                    }, void 0, false, {
                        fileName: "[project]/src/components/LeadCaptureFormDialog.jsx",
                        lineNumber: 418,
                        columnNumber: 15
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LeadCaptureFormDialog.jsx",
                lineNumber: 188,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/LeadCaptureFormDialog.jsx",
            lineNumber: 116,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/LeadCaptureFormDialog.jsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
}),
"[externals]/lenis [external] (lenis, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("lenis");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/components/SmoothScroll.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$lenis__$5b$external$5d$__$28$lenis$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/lenis [external] (lenis, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$lenis__$5b$external$5d$__$28$lenis$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$lenis__$5b$external$5d$__$28$lenis$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function SmoothScroll({ children }) {
    const lenisRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        // 1. Initialize Lenis
        const lenis = new __TURBOPACK__imported__module__$5b$externals$5d2f$lenis__$5b$external$5d$__$28$lenis$2c$__esm_import$29$__["default"]({
            duration: 1.2,
            easing: (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
            lerp: 0.1
        });
        lenisRef.current = lenis;
        // 2. Setup the requestAnimationFrame loop
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        // 3. Cleanup on unmount
        return ()=>{
            lenis.destroy();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/pages/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/header.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2f$HeroSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/hero/HeroSection.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InfoSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InfoSection.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WhyTakeMockTestSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WhyTakeMockTestSection.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HighlightsSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HighlightsSection.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SmartWaySection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SmartWaySection.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestimonialsSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TestimonialsSection.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LeadCaptureFormDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LeadCaptureFormDialog.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SmoothScroll$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SmoothScroll.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2f$HeroSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InfoSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WhyTakeMockTestSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HighlightsSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SmartWaySection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestimonialsSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SmoothScroll$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2f$HeroSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InfoSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WhyTakeMockTestSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HighlightsSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SmartWaySection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestimonialsSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SmoothScroll$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Page() {
    const [isLeadFormOpen, setIsLeadFormOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>{
            setIsLeadFormOpen(true);
        }, 10000); // 10 seconds
        return ()=>clearTimeout(timer);
    }, []);
    const navItems = [
        {
            label: 'Home',
            target: 'hero-section'
        },
        {
            label: 'Test Details',
            target: 'test-details'
        },
        {
            label: 'Batch Details',
            target: 'batch-details'
        },
        {
            label: 'Scholarship Criteria',
            target: 'scholarship-criteria'
        },
        {
            label: 'Success Stories',
            target: 'testimonials'
        }
    ];
    const handleNavClick = (target)=>{
        const el = document.getElementById(target);
        if (el) {
            el.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    const handleRegisterClick = ()=>{
        setIsLeadFormOpen(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "CLAT PG 2027 All India Mock Test | Register Now"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Learn CLAT prep from NLU grads. Join our free 7-month strategy session."
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/index.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SmoothScroll$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        navItems: navItems,
                        onNavClick: handleNavClick,
                        onOpenLeadForm: handleRegisterClick
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$hero$2f$HeroSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onRegisterClick: handleRegisterClick
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InfoSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WhyTakeMockTestSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HighlightsSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SmartWaySection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onRegisterClick: handleRegisterClick
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestimonialsSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LeadCaptureFormDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        open: isLeadFormOpen,
                        onClose: ()=>setIsLeadFormOpen(false),
                        formType: "popup"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/index.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5730beba._.js.map