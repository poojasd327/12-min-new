import React from 'react'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'

export default function WhyTakeMockTestSection() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      sx={{
        pt: '31px',
        pr: { xs: '20px', md: '60px' },
        pb: '31px',
        pl: { xs: '20px', md: '60px' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
        Why Take This Mock Test?
      </Typography>

      <Box sx={{ mt: { xs: '40px', md: '70px' }, display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', width: '100%', maxWidth: '900px' }}>
        {[
          {
            bg: '#FFEED1', border: '#F28511',
            heading: 'Assess Your Preparation',
            para: 'Know your current CLAT PG preparation level'
          },
          {
            bg: '#C4F2D4', border: '#22A70D',
            heading: 'Benchmark Your Performance',
            para: 'Benchmark yourself against other aspirants'
          },
          {
            bg: '#D7DDFC', border: '#404AF0',
            heading: 'Get Detailed Insights',
            para: 'Get a detailed performance analysis'
          },
          {
            bg: '#FCD5E2', border: '#D81C62',
            heading: 'Earn a 100% Scholarship',
            para: 'Earn up to 100% Scholarship for the Champion 2027 batch'
          },
        ].map((item, index) => (
          <Box
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ 
              scale: 1.01,
              boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
              transition: { duration: 0.2 }
            }}
            sx={{
              width: '100%',
              height: { xs: 'auto', md: '193px' },
              bgcolor: item.bg,
              border: 'none',
              borderRadius: '25px',
              pt: { xs: '32px', md: '56px' },
              pr: { xs: '20px', md: '32px' },
              pb: { xs: '32px', md: '56px' },
              pl: { xs: '20px', md: '32px' },
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              position: 'sticky',
              top: `calc(150px + ${index * 25}px)`,
              zIndex: index,
              overflow: 'hidden'
            }}
          >
            {/* Large Number */}
            <Typography
              sx={{
                position: 'absolute',
                left: { xs: '-10px', md: '-40px' },
                bottom: '0px',
                fontSize: { xs: '90px', md: '180px' },
                fontWeight: 400,
                lineHeight: 1,
                fontFamily: '"Inter Display", sans-serif',
                color: item.border,
                opacity: 0.2,
                userSelect: 'none',
                pointerEvents: 'none'
              }}
            >
              {String(index + 1).padStart(2, '0')}
            </Typography>
            {/* Content */}
            <Box sx={{ ml: { xs: '90px', md: '190px' }, display: 'flex', flexDirection: 'column', gap: '16px', zIndex: 1, position: 'relative' }}>
              <Typography
                variant="h3"
                sx={{
                  m: 0,
                  fontSize: { xs: '24px', md: '40px' },
                  fontWeight: 500,
                  lineHeight: '1.1em',
                  letterSpacing: '-0.03em',
                  fontFamily: '"Inter Display", sans-serif',
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
                  lineHeight: '1.3em',
                  letterSpacing: '0em',
                  fontFamily: '"Inter", sans-serif',
                  color: '#464A52'
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
