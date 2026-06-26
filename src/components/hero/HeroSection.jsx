import Image from 'next/image'
import { Box, Typography, Container, Button, Stack, useMediaQuery, useTheme } from '@mui/material'
import NorthEastIcon from '@mui/icons-material/NorthEast'
import { withBasePath } from '../../basePath'
import { useState, useEffect } from 'react'
import RegisterButton from '../RegisterButton'

const HERO_IMAGE_URL = '/assets/hero_image.webp'
const MOBILE_HERO_IMAGE_URL = '/assets/mobile-hero.jpeg'

function HeroSection({ onRegisterClick }) {
  const theme = useTheme()
  const isMobileQuery = useMediaQuery(theme.breakpoints.down('sm'))
  const [isMobile, setIsMobile] = useState(false)

  // Avoid hydration mismatch by only setting isMobile on client
  useEffect(() => {
    setIsMobile(isMobileQuery)
  }, [isMobileQuery])

  const currentImage = withBasePath(isMobile ? MOBILE_HERO_IMAGE_URL : HERO_IMAGE_URL)

  const heroCtaArrowIconSx = {
    fontSize: { xs: 16, md: 18 },
    transition: 'transform 0.25s ease',
  }

  const heroContactButtonSx = {
    bgcolor: '#F2AE41',
    color: '#ffffff',
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: '999px',
    fontSize: { xs: '14px', md: '16px' },
    letterSpacing: '-0.01em',
    lineHeight: '1.8em',
    fontFamily: 'inherit',
    transition: 'background-color 0.25s ease, color 0.25s ease',
    '&:hover': {
      bgcolor: '#0b0b0b',
      color: '#ffffff',
      '& .MuiButton-endIcon .MuiSvgIcon-root': {
        transform: 'rotate(45deg)',
      },
    },
  }

  return (
    <Box
      component="section"
      id="hero-section"
      sx={{
        width: '100%',
        minHeight: { xs: '100dvh', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#0f0f0f',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          key={isMobile ? 'mobile' : 'desktop'}
          src={currentImage}
          alt="CLAT 2027 Preparation Strategy Webinar Hero Image"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0
          }}
        />
      </Box>

      {/* Text Overlay */}
      <Container
        sx={{
          maxWidth: '1300px !important',
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: { xs: 'flex-start', md: 'center' },
          pt: { xs: 8, md: 0 },
          zIndex: 1,
          pointerEvents: 'none'
        }}
      >
        <Box
          data-aos="fade-up"
          sx={{
            maxWidth: '800px',
            pointerEvents: 'auto',
            textAlign: { xs: 'left', md: 'left' }, // Fully left-aligned for mobile
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'flex-start', md: 'flex-start' }, // Left alignItems for mobile
            transform: { xs: 'translateY(-120px)', md: 'none' }
          }}
        >

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '28px', sm: '48px', md: '72px' },
              fontWeight: 500,
              lineHeight: '1.2em',
              color: '#000000',
              mb: 2,
              textTransform: 'none',
              fontFamily: 'inherit'
            }}
          >
            All India <Box component="span" sx={{ color: '#ffffff' }}>CLAT PG</Box> <Box component="br" />
            <Box component="span" sx={{ color: '#ffffff' }}>2027</Box> Mock Test
          </Typography>

          <Box
            sx={{
              width: { xs: '100%', md: '450px' },
              height: '52px',
              bgcolor: '#FFF2DE',
              padding: '10px 20px',
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'flex-start', md: 'flex-start' },
              borderRadius: '15px',
              gap: '13px'
            }}
          >
            <Box
              component="img"
              src={withBasePath('/assets/Group.svg')}
              alt="Date Icon"
              sx={{ width: '29px', height: '29px' }}
            />
            <Typography
              sx={{
                fontSize: '20px',
                fontFamily: 'var(--font-geist-sans), "Geist", sans-serif',
                fontWeight: 400,
                color: '#000000',
                lineHeight: 1
              }}
            >
              05 - July - 2025
            </Typography>
            <Box
              component="img"
              src={withBasePath('/assets/1111.svg')}
              alt="Time Icon"
              sx={{ width: '29px', height: '29px' }}
            />
            <Typography
              sx={{
                fontSize: '20px',
                fontFamily: 'var(--font-geist-sans), "Geist", sans-serif',
                fontWeight: 400,
                color: '#000000',
                lineHeight: 1
              }}
            >
              2:00 PM - 4:00 PM
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '18px', md: '24px' },
              fontWeight: 'regular',
              letterSpacing: '-0.02em',
              lineHeight: '1.6em',
              color: '#000000',
              mb: { xs: '15px', md: 4 },
              fontFamily: '"Inter Display", sans-serif',
            }}
          >
            Win Up to a 100% Scholarship
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ alignItems: { xs: 'flex-start', md: 'flex-start' }, width: { xs: '100%', sm: 'auto' } }}
          >
            <RegisterButton
              id="hero_register_btn"
              onClick={onRegisterClick}
              text="Register Now"
              endIcon={<NorthEastIcon sx={{ ...heroCtaArrowIconSx, color: '#ffffff', fontWeight: 500 }} />}
              sx={{
                width: { xs: '145px', md: '172.7px' },
                height: { xs: '34px', md: '52.8px' },
                borderRadius: '999px',
                fontSize: { xs: '13px', md: '15px' },
                textTransform: 'none',
                background: '#000000',
                color: '#ffffff',
                '&::after': {
                  display: 'none',
                },
                '&:hover': {
                  background: '#000000',
                  '& .MuiButton-endIcon .MuiSvgIcon-root': {
                    transform: 'rotate(45deg)',
                  },
                },
              }}
            />
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default HeroSection
