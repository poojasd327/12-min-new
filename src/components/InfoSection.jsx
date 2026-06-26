import React from 'react'
import { Box, Typography } from '@mui/material'

export default function InfoSection() {
  return (
    <Box
      component="section"
      sx={{
        pt: '100px',
        pb: '100px',
        px: '50px',
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
          }}
        >
          <Typography
            variant="h2"
            sx={{
              m: 0,
              fontSize: '60px',
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
          {/* Row 1 */}
          <Box sx={{ display: 'flex', gap: '15px', flexDirection: { xs: 'column', md: 'row' } }}>
            {[
              {
                bgcolor: '#EBF2FD', borderColor: '#1567DB',
                heading: 'English | Online', para: 'Paper Medium & Mode', width: { xs: '100%', md: '239px' }
              },
              {
                bgcolor: '#E9F7EF', borderColor: '#44A77D',
                heading: '120', para: 'No. of Questions', width: { xs: '100%', md: '239px' }
              },
              {
                bgcolor: '#F1EDFD', borderColor: '#753FD4',
                heading: '120 min', para: ' Test Duration', width: { xs: '100%', md: '239px' }
              }
            ].map((item, index) => (
              <Box key={index} sx={{ width: item.width, height: '188px', bgcolor: item.bgcolor, borderRadius: '12px', border: `1px solid ${item.borderColor}`, pt: '20px', pr: '20px', pb: '24px', pl: '20px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <Box sx={{ width: '40px', height: '40px' }}></Box>
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
          {/* Row 2 */}
          <Box sx={{ display: 'flex', gap: '15px', flexDirection: { xs: 'column', md: 'row' } }}>
            {[
              {
                bgcolor: '#FFFAF2', borderColor: '#F2AE41',
                heading: '05 - July - 2025', para: 'Test Date', width: { xs: '100%', md: '367px' }
              },
              {
                bgcolor: '#FDEDF0', borderColor: '#DB5568',
                heading: '0.25 / Wrong Answers', para: 'Negative marking', width: { xs: '100%', md: '367px' }
              }
            ].map((item, index) => (
              <Box key={index} sx={{ width: item.width, height: '188px', bgcolor: item.bgcolor, borderRadius: '12px', border: `1px solid ${item.borderColor}`, pt: '20px', pr: '20px', pb: '24px', pl: '20px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <Box sx={{ width: '40px', height: '40px' }}></Box>
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
        </Box>
      </Box>
    </Box>
  )
}
