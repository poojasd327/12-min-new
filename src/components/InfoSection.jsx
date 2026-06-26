import React, { useRef } from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { motion } from 'framer-motion'

export default function InfoSection() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };
  return (
    <Box
      id="test-details"
      component={motion.div}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      sx={{
        pt: { xs: '50px', md: '100px' },
        pb: { xs: '50px', md: '100px' },
        px: { xs: '20px', md: '50px' },
        bgcolor: '#FAFAF7',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1140px',
          height: { xs: 'auto', md: '386px' },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        {/* Left Side */}
        <Box
          sx={{
            width: { xs: '100%', md: '372px' },
            height: { xs: 'auto', md: '130px' },
            display: 'flex',
            flexDirection: 'column',
            gap: '23px',
            mb: { xs: 4, md: 0 },
            mt: { xs: 0, md: '110px' },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              m: 0,
              fontSize: { xs: '32px', md: '60px' },
              fontWeight: 500,
              lineHeight: '1.08em',
              letterSpacing: '-0.02em',
              color: '#000000',
              fontFamily: 'var(--font-geist-sans), "Geist", ui-sans-serif, system-ui, sans-serif'
            }}
          >
            Test Details
          </Typography>
          <Typography
            variant="body1"
            sx={{
              m: 0,
              color: '#212121',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '1.3em',
              letterSpacing: '0em',
              fontFamily: '"Inter", sans-serif'
            }}
          >
            Everything you need to know about the test <br />
            before you register
          </Typography>
        </Box>

        {/* Right Side Box */}
        <Box
          sx={{
            width: { xs: '100%', md: '748px' },
            height: { xs: 'auto', md: '386px' },
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
          {/* Single Container for Desktop Wrapping & Mobile Slider */}
          <Box ref={sliderRef} sx={{
            display: 'flex',
            gap: '15px',
            flexDirection: 'row',
            overflowX: { xs: 'auto', md: 'visible' },
            flexWrap: { xs: 'nowrap', md: 'wrap' },
            scrollSnapType: { xs: 'x mandatory', md: 'none' },
            scrollPaddingLeft: { xs: '20px', md: '0px' },
            pb: { xs: 1, md: 0 },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' }
          }}>
            {[
              {
                bgcolor: '#EBF2FD', borderColor: '#1567DB',
                heading: 'English | Online', para: 'Paper Medium & Mode',
                width: { xs: '280px', md: 'calc((100% - 30px) / 3)' },
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#1567db" viewBox="0 0 256 256"><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"></path></svg>'
              },
              {
                bgcolor: '#E9F7EF', borderColor: '#44A77D',
                heading: '120', para: 'No. of Questions',
                width: { xs: '280px', md: 'calc((100% - 30px) / 3)' },
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#44a77d" viewBox="0 0 256 256"><path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-11.55,39.29c-4.79,5-9.75,10.17-12.38,16.52-2.52,6.1-2.63,13.07-2.73,19.82-.1,7-.21,14.33-3.32,17.43s-10.39,3.22-17.43,3.32c-6.75.1-13.72.21-19.82,2.73-6.35,2.63-11.52,7.59-16.52,12.38S132,224,128,224s-9.15-4.92-14.11-9.69-10.17-9.75-16.52-12.38c-6.1-2.52-13.07-2.63-19.82-2.73-7-.1-14.33-.21-17.43-3.32s-3.22-10.39-3.32-17.43c-.1-6.75-.21-13.72-2.73-19.82-2.63-6.35-7.59-11.52-12.38-16.52S32,132,32,128s4.92-9.15,9.69-14.11,9.75-10.17,12.38-16.52c2.52-6.1,2.63-13.07,2.73-19.82.1-7,.21-14.33,3.32-17.43S70.51,56.9,77.55,56.8c6.75-.1,13.72-.21,19.82-2.73,6.35-2.63,11.52-7.59,16.52-12.38S124,32,128,32s9.15,4.92,14.11,9.69,10.17,9.75,16.52,12.38c6.1,2.52,13.07,2.63,19.82,2.73,7,.1,14.33.21,17.43,3.32s3.22,10.39,3.32,17.43c.1,6.75.21,13.72,2.73,19.82,2.63,6.35,7.59,11.52,12.38,16.52S224,124,224,128,219.08,137.15,214.31,142.11ZM140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180Zm28-72c0,17.38-13.76,31.93-32,35.28V144a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8c13.23,0,24-9,24-20s-10.77-20-24-20-24,9-24,20v4a8,8,0,0,1-16,0v-4c0-19.85,17.94-36,40-36S168,88.15,168,108Z"></path></svg>'
              },
              {
                bgcolor: '#F1EDFD', borderColor: '#753FD4',
                heading: '120 min', para: ' Test Duration',
                width: { xs: '280px', md: 'calc((100% - 30px) / 3)' },
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#753fd4" viewBox="0 0 256 256"><path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z"></path></svg>'
              },
              {
                bgcolor: '#FFFAF2', borderColor: '#F2AE41',
                heading: '05 - July - 2025', para: 'Test Date',
                width: { xs: '280px', md: 'calc((100% - 15px) / 2)' },
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#f2ae41" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"></path></svg>'
              },
              {
                bgcolor: '#FDEDF0', borderColor: '#DB5568',
                heading: '0.25 / Wrong Answers', para: 'Negative marking',
                width: { xs: '280px', md: 'calc((100% - 15px) / 2)' },
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#db5568" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg>'
              }
            ].map((item, index) => (
              <Box 
                key={index} 
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
                  transition: { duration: 0.2 }
                }}
                sx={{
                flexShrink: 0,
                width: item.width,
                height: '188px',
                bgcolor: item.bgcolor,
                borderRadius: '12px',
                border: `1px solid ${item.borderColor}`,
                pt: '20px', pr: '20px', pb: '24px', pl: '20px',
                display: 'flex', flexDirection: 'column', gap: '40px'
              }}>
                <Box sx={{ width: '40px', height: '40px', borderRadius: '8px', border: `1px solid ${item.borderColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }} dangerouslySetInnerHTML={{ __html: item.svg }}></Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontSize: '16px', fontFamily: 'var(--font-geist-sans), "Geist", ui-sans-serif, system-ui, sans-serif', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: '1.4em', color: '#212121' }}>
                    {item.para}
                  </Typography>
                  <Typography sx={{ fontSize: '24px', fontFamily: 'var(--font-geist-sans), "Geist", ui-sans-serif, system-ui, sans-serif', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: '1.4em', color: item.borderColor }}>
                    {item.heading}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          {/* Arrows for Mobile Slider */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', gap: '20px', mt: 1 }}>
            <IconButton onClick={scrollLeft} sx={{ border: '1px solid #ccc', bgcolor: 'white' }}>
              <ArrowBackIosNewIcon sx={{ fontSize: '18px', color: '#333' }} />
            </IconButton>
            <IconButton onClick={scrollRight} sx={{ border: '1px solid #ccc', bgcolor: 'white' }}>
              <ArrowForwardIosIcon sx={{ fontSize: '18px', color: '#333' }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
