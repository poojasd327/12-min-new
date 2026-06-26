import React, { useState, useEffect } from 'react'
import { Box, Typography, Button, Container, Stack } from '@mui/material'
import { motion } from 'framer-motion'
import RegisterButton from './RegisterButton'
import NorthEastIcon from '@mui/icons-material/NorthEast'

const TimeUnit = ({ value, label, showColon }) => (
  <Stack direction="row" alignItems="flex-start">
    <Stack alignItems="center" spacing={0}>
      <Typography sx={{ color: '#F2AE41', fontSize: { xs: '20px', md: '28px' }, fontWeight: 700, lineHeight: 1 }}>
        {value}
      </Typography>
      <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '10px', fontWeight: 500, textTransform: 'lowercase', display: { xs: 'block', md: 'none' }, mt: 0.5 }}>
        {label}
      </Typography>
    </Stack>
    <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '16px', fontWeight: 500, textTransform: 'lowercase', ml: 1, display: { xs: 'none', md: 'block' }, mr: showColon ? 0 : 2, mt: { md: '4px' } }}>
      {label}
    </Typography>
    {showColon && (
      <Typography sx={{
        color: '#F2AE41',
        fontSize: { xs: '20px', md: '28px' },
        fontWeight: 700,
        lineHeight: 1,
        mx: { xs: 0.5, md: 1 },
        mt: { xs: '2px', md: '4px' } // Aligns colon with the numbers
      }}>
        :
      </Typography>
    )}
  </Stack>
);

/**
 * Parse a date string as IST (Indian Standard Time, UTC+5:30).
 *  - Date only (e.g. "2026-04-18")             → end of that day IST: 23:59:59+05:30
 *  - Date + time, no timezone                   → treat as IST: append +05:30
 *  - Date + time + timezone                     → use as-is
 */
function parseAsIST(dateStr) {
  if (!dateStr) return null;
  const s = dateStr.trim();
  const hasTime = s.includes('T');
  const hasTimezone = /[Z]$/.test(s) || /[+-]\d{2}:?\d{2}$/.test(s);

  if (!hasTime) {
    return new Date(s + 'T23:59:59+05:30');
  }
  if (hasTimezone) {
    return new Date(s);
  }
  return new Date(s + '+05:30');
}

const StickyStrip = ({ onRegisterClick }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [targetDate] = useState(() => {
    const envDate = process.env.NEXT_PUBLIC_TARGET_DATE;
    if (envDate) {
      const parsed = parseAsIST(envDate);
      if (parsed && !isNaN(parsed.getTime())) return parsed;
    }
    // Fallback: end of 19th April 2026 IST
    return parseAsIST("2026-04-19");
  });

  useEffect(() => {
    setIsMounted(true);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isMounted) return null;

  return (
    <Box
      component={motion.div}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: '#0f0f0f',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        py: { xs: 2.5, md: 2 },
        zIndex: 9999,
        boxShadow: '0 -4px 20px rgba(0,0,0,0.5)',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          {/* Price Section */}
          <Box>
            {/* Desktop View: Full Countdown (Visible only on LG and above) */}
            <Box
              sx={{
                display: { xs: 'none', lg: 'block' },
              }}
            >
              <Stack direction="row" alignItems="center">
                <TimeUnit value={timeLeft.days} label="days" showColon={false} />
                <TimeUnit value={timeLeft.hours} label="hours" showColon={false} />
                <TimeUnit value={timeLeft.minutes} label="minutes" showColon={false} />
                <TimeUnit value={timeLeft.seconds} label="seconds" showColon={false} />
              </Stack>
            </Box>

            {/* Mobile View: Days, Hours, Minutes (Visible for everything below LG) */}
            <Box
              sx={{
                display: { xs: 'block', lg: 'none' },
              }}
            >
              <Stack direction="row" alignItems="center">
                <TimeUnit value={timeLeft.days} label="days" showColon={true} />
                <TimeUnit value={timeLeft.hours} label="hours" showColon={true} />
                <TimeUnit value={timeLeft.minutes} label="mins" showColon={true} />
                <TimeUnit value={timeLeft.seconds} label="secs" showColon={false} />
              </Stack>
            </Box>
          </Box>

          {/* CTA Button */}
          <RegisterButton
            id="sticky_register_btn"
            onClick={onRegisterClick}
            text="Book Your Free Webinar"
            endIcon={<NorthEastIcon sx={{ fontSize: { xs: '14px', md: '20px' }, ml: { xs: 0, md: 0.5 }, color: '#ffffff', fontWeight: 500 }} />}
            sx={{
              width: { xs: '145px', md: '300px' },
              height: { xs: '42px', md: '52.8px' },
              fontSize: { xs: '13px', md: '18px' },
              borderRadius: '15px',
              textTransform: 'none',
              justifyContent: { xs: 'flex-start', md: 'center' },
              gap: { xs: 0, md: '8px' },
              px: { xs: 1, md: 3 },
              textAlign: 'left',
              '&::after': {
                borderRadius: '15px',
              },
              '&:hover': {
                '& .MuiButton-endIcon .MuiSvgIcon-root': {
                  transform: 'rotate(45deg)',
                },
              },
            }}
          />
        </Stack>
      </Container>
    </Box>
  )
}

export default StickyStrip
