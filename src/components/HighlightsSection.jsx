import React from 'react'
import { Box, Typography } from '@mui/material'

export default function HighlightsSection() {
  return (
    <Box
      component="section"
      sx={{
        pt: '60px',
        pr: '60px',
        pb: '60px',
        pl: '60px',
        bgcolor: '#FAFAF7',
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
          fontFamily: 'var(--font-geist-sans), "Geist", ui-sans-serif, system-ui, sans-serif',
          textAlign: 'center'
        }}
      >
        Champion 2027 Batch Highlights
      </Typography>

      <Box
        sx={{
          mt: '50px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px 27px', // row-gap 24px, column-gap 27px
          justifyContent: 'center',
          maxWidth: '1200px',
          mx: 'auto'
        }}
      >
        {[
          {
            heading: 'Concepts & Practice Classes',
            para: 'Build a strong foundation with comprehensive concept-based learning and regular practice sessions.'
          },
          {
            heading: 'Monthly Case Law',
            para: 'Stay updated with important judgments and legal developments curated specifically for CLAT PG preparation.'
          },
          {
            heading: 'Expert Mentorship & Guidance',
            para: 'Receive personalized support, strategic preparation advice, and guidance from experienced mentors.'
          },
          {
            heading: '30+ Full-Length Mock Tests',
            para: 'Simulate the actual exam environment and improve your speed, accuracy, and confidence.'
          },
          {
            heading: 'Detailed Performance Analysis',
            para: 'Identify strengths and improvement areas through in-depth test analytics and feedback.'
          },
          {
            heading: 'Comprehensive Study Materials',
            para: 'Access concise, exam-focused study resources and notes designed for effective revision and retention.'
          }
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: '100%', md: '364px' },
              height: '235px',
              bgcolor: '#ffffff',
              border: '1px solid #E8E8E8',
              p: '16px',
              borderRadius: '16px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            {/* Icon Space */}
            <Box sx={{ width: '46px', height: '40px' }}></Box>
            
            {/* Content */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Typography
                variant="h3"
                sx={{
                  m: 0,
                  fontSize: '24px',
                  fontWeight: 500,
                  lineHeight: '1.4em',
                  letterSpacing: '0px',
                  fontFamily: 'var(--font-geist-sans), "Geist", ui-sans-serif, system-ui, sans-serif',
                  color: '#000000'
                }}
              >
                {item.heading}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  m: 0,
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.4em',
                  letterSpacing: '0em',
                  fontFamily: '"Inter Display", sans-serif',
                  color: '#a2a2a2'
                }}
              >
                {item.para}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
