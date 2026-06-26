import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const CSS_CONTENT = `
/* ── Clock Row ── */
.flip-clock-row {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

/* ── Colon Separator ── */
.flip-colon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  height: 90px;
  padding: 0 4px;
}

.colon-dot {
  width: 8px;
  height: 8px;
  background-color: #0f0f0f;
  border-radius: 50%;
}

/* ── Individual Digit Box ── */
.flip-digit-box {
  display: inline-block;
  margin: 1px;
  width: 60px;
  height: 90px;
  line-height: 90px;
  border-radius: 6px;
  position: relative;
  font-family: var(--font-geist-sans);
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  perspective: 500px;
}

/* ── Seamless 180-Degree Flip Card ── */
.flip-card-180 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(50% - 1.5px);
  z-index: 5;
  transform-style: preserve-3d;
  transform-origin: 50% calc(100% + 1.5px);
  transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.flip-card-180.flipping {
  animation: flip180 600ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.flip-face {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 6px 6px 0 0;
}

.flip-face-back {
  transform: rotateX(-180deg);
  border-radius: 0 0 6px 6px;
}

@keyframes flip180 {
  0% { transform: rotateX(0deg); }
  100% { transform: rotateX(-180deg); }
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .flip-digit-box {
    width: 44px;
    height: 66px;
    line-height: 66px;
    font-size: 58px;
  }
  .flip-digit-box .inn { font-size: 58px !important; }
  .flip-colon { height: 66px; gap: 8px; }
  .colon-dot { width: 6px; height: 6px; }
  .flip-card-180 { height: calc(50% - 1px); transform-origin: 50% calc(100% + 1px); }
}

@media (max-width: 480px) {
  .flip-clock-row {
    gap: 6px;
  }
  .flip-digit-box {
    width: 38px;
    height: 56px;
    line-height: 56px;
    font-size: 48px;
  }
  .flip-digit-box .inn { font-size: 48px !important; }
  .flip-colon { height: 56px; gap: 6px; }
  .colon-dot { width: 4px; height: 4px; }
  .flip-card-180 { height: calc(50% - 1px); transform-origin: 50% calc(100% + 1px); }
}
`

/**
 * Parse a date string as IST (Indian Standard Time, UTC+5:30).
 *
 * Rules:
 *  - Date only (e.g. "2026-04-18")          → end of that day IST: 23:59:59+05:30
 *  - Date + time, no timezone (e.g. "2026-04-18T10:00:00") → treat as IST: append +05:30
 *  - Date + time + timezone (e.g. "2026-04-18T00:00:00+05:30") → use as-is
 */
function parseAsIST(dateStr) {
  if (!dateStr) return null;
  const s = dateStr.trim();
  const hasTime = s.includes('T');
  const hasTimezone = /[Z]$/.test(s) || /[+-]\d{2}:?\d{2}$/.test(s);

  if (!hasTime) {
    // Date-only: target 23:59:59 IST (end of that day in India)
    return new Date(s + 'T23:59:59+05:30');
  }
  if (hasTimezone) {
    // Full datetime with timezone: use as-is
    return new Date(s);
  }
  // Datetime without timezone: assume IST
  return new Date(s + '+05:30');
}

function getTimeLeft(targetDate) {
  const now = new Date().getTime()
  const distance = targetDate.getTime() - now

  if (distance <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  }
}

/* ── Individual Digit Component ── */
function FlipDigit({ digit, bgColor = '#000000' }) {
  const [flipping, setFlipping] = useState(false)
  const [currentValue, setCurrentValue] = useState(digit)
  const [nextValue, setNextValue] = useState(digit)
  const prevRef = useRef(digit)

  useEffect(() => {
    if (digit !== prevRef.current) {
      setNextValue(digit)
      setFlipping(true)

      const timer = setTimeout(() => {
        setCurrentValue(digit)
        setFlipping(false)
        prevRef.current = digit
      }, 600)

      return () => clearTimeout(timer)
    }
  }, [digit])

  const textColor = bgColor === '#F2AE41' ? '#000000' : '#ffffff'

  // Using dynamic gap for responsiveness in style
  const isSmall = typeof window !== 'undefined' && window.innerWidth <= 768
  const halfGap = isSmall ? 1 : 1.5
  const fullGap = halfGap * 2

  return (
    <div className="flip-digit-box">
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: `calc(50% - ${halfGap}px)`,
          overflow: 'hidden',
          zIndex: 1,
          borderTopLeftRadius: '6px',
          borderTopRightRadius: '6px',
        }}
      >
        <div
          className="inn"
          style={{
            position: 'absolute',
            left: 0,
            width: '100%',
            height: `calc(200% + ${fullGap}px)`,
            color: textColor,
            fontFamily: 'var(--font-geist-sans)',
            fontSize: 'inherit', // Uses box font-size
            textAlign: 'center',
            backgroundColor: bgColor,
            top: 0,
          }}
        >
          {nextValue}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: `calc(50% - ${halfGap}px)`,
          overflow: 'hidden',
          zIndex: 1,
          borderBottomLeftRadius: '6px',
          borderBottomRightRadius: '6px',
        }}
      >
        <div
          className="inn"
          style={{
            position: 'absolute',
            left: 0,
            width: '100%',
            height: `calc(200% + ${fullGap}px)`,
            color: textColor,
            fontFamily: 'var(--font-geist-sans)',
            fontSize: 'inherit',
            textAlign: 'center',
            backgroundColor: bgColor,
            bottom: 0,
          }}
        >
          {currentValue}
        </div>
      </div>

      {flipping && (
        <div
          className="flip-card-180 flipping"
          style={{
            transformOrigin: `50% calc(100% + ${halfGap}px)`
          }}
        >
          <div className="flip-face" style={{ backgroundColor: bgColor }}>
            <div
              className="inn"
              style={{
                position: 'absolute',
                left: 0,
                width: '100%',
                height: `calc(200% + ${fullGap}px)`,
                color: textColor,
                fontFamily: 'var(--font-geist-sans)',
                fontSize: 'inherit',
                textAlign: 'center',
                backgroundColor: bgColor,
                top: 0,
              }}
            >
              {currentValue}
            </div>
          </div>
          <div className="flip-face flip-face-back" style={{ backgroundColor: bgColor }}>
            <div
              className="inn"
              style={{
                position: 'absolute',
                left: 0,
                width: '100%',
                height: `calc(200% + ${fullGap}px)`,
                color: textColor,
                fontFamily: 'var(--font-geist-sans)',
                fontSize: 'inherit',
                textAlign: 'center',
                backgroundColor: bgColor,
                bottom: 0,
              }}
            >
              {nextValue}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function FlipUnit({ value, bgColor, label }) {
  const formatted = String(value).padStart(2, '0')
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <div style={{ display: 'flex' }}>
        <FlipDigit digit={formatted[0]} bgColor={bgColor} />
        <FlipDigit digit={formatted[1]} bgColor={bgColor} />
      </div>
      {label && (
        <span style={{
          color: '#000000',
          fontSize: '18px',
          fontFamily: 'var(--font-geist-sans), "Geist", sans-serif',
          fontWeight: 500,
          lineHeight: 1
        }}>
          {label}
        </span>
      )}
    </div>
  )
}

export default function FlipClock() {
  const [isMounted, setIsMounted] = useState(false)
  const [targetDate] = useState(() => {
    const envDate = process.env.NEXT_PUBLIC_TARGET_DATE;
    if (envDate) {
      // Parse as IST to avoid UTC/local-timezone ambiguity
      const parsed = parseAsIST(envDate);
      if (parsed && !isNaN(parsed.getTime())) return parsed;
    }
    // Fallback: midnight IST on 19th April 2026
    return parseAsIST("2026-04-19T00:00:00");
  });

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    setIsMounted(true)
    setTimeLeft(getTimeLeft(targetDate))

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate))
    }, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  if (!isMounted) {
    return <div style={{ minHeight: '90px' }} /> // Placeholder during hydration
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flip-clock-container"
    >
      <style dangerouslySetInnerHTML={{ __html: CSS_CONTENT }} />
      <div className="flip-clock-row">
        <FlipUnit value={timeLeft.days} label="Days" />
        <div className="flip-colon">
          <div className="colon-dot" />
          <div className="colon-dot" />
        </div>
        <FlipUnit value={timeLeft.hours} label="Hours" />
        <div className="flip-colon">
          <div className="colon-dot" />
          <div className="colon-dot" />
        </div>
        <FlipUnit value={timeLeft.minutes} label="Minutes" />
        <div className="flip-colon">
          <div className="colon-dot" />
          <div className="colon-dot" />
        </div>
        <FlipUnit value={timeLeft.seconds} bgColor="#F2AE41" label="Seconds" />
      </div>
    </motion.div>
  )
}