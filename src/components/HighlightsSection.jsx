import React from 'react'
import { Box, Typography } from '@mui/material'
import { withBasePath } from '../basePath'
import { motion } from 'framer-motion'

export default function HighlightsSection() {
  return (
    <Box
      id="batch-details"
      component="section"
      sx={{
        pt: { xs: '30px', md: '60px' },
        pr: { xs: '20px', md: '60px' },
        pb: { xs: '30px', md: '60px' },
        pl: { xs: '20px', md: '60px' },
        bgcolor: '#FAFAF7',
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
              width: { xs: '100%', md: '364px' },
              height: { xs: 'auto', md: '235px' },
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
            <Box sx={{ width: '46px', height: '40px', display: 'flex' }}>
              <Box component="img" src={withBasePath(`/assets/${item.icon}`)} alt={item.heading} sx={{ width: 'auto', height: '100%', objectFit: 'contain' }} />
            </Box>

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
