import Image from 'next/image'
import { Box, Typography, Container, Button, Stack, useMediaQuery, useTheme } from '@mui/material'
import NorthEastIcon from '@mui/icons-material/NorthEast'
import { withBasePath } from '../../basePath'
import { useState, useEffect } from 'react'
import RegisterButton from '../RegisterButton'

const HERO_IMAGE_URL = '/assets/hero section-1.webp'
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
          <Box
            data-aos="fade-right"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mb: '20px',
              alignSelf: { xs: 'flex-start', md: 'flex-start' }
            }}
          >
            <Box
              component="img"
              src={withBasePath('/assets/Join.svg')}
              alt="Join"
              sx={{
                height: { xs: '32px', md: '24px' },
                width: 'auto'
              }}
            />
            <Typography
              sx={{
                fontSize: '16px',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 400,
                lineHeight: '1.3em',
                letterSpacing: '0em',
                color: '#ffffff'
              }}
            >
              1000+ Positive Student Reviews
            </Typography>
          </Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '28px', sm: '48px', md: '72px' },
              fontWeight: 500,
              lineHeight: '1.2em',
              color: '#ffffff',
              mb: 2,
              textTransform: 'none',
              fontFamily: 'inherit'
            }}
          >
            ALL INDIA <Box component="span" sx={{ color: '#F2AE41' }}>CLAT PG</Box> <Box component="br" />
            <Box component="span" sx={{ color: '#F2AE41' }}>2027</Box> MOCK TEST
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '18px', md: '24px' },
              fontWeight: 'regular',
              letterSpacing: '-0.02em',
              lineHeight: '1.6em',
              color: '#F8F9FB',
              mb: { xs: '15px', md: 4 },
              maxWidth: '500px',
              fontFamily: '"Inter Display", sans-serif',
              mx: { xs: 0, md: 0 }
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
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default HeroSection
