import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

// Create a styled button to handle the complex animations and pseudo-elements
const AnimatedButton = styled(Button)(({ theme }) => ({
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
    backgroundColor: 'transparent',
  },
  '&:focus': {
    background: 'linear-gradient(180deg, #FF9E59 0%, #FF9E59 100%)',
    backgroundColor: 'transparent',
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
    transition: 'all 0.3s ease',
  },
  '&:hover::after': {
    opacity: 0.4, // Reduce glow on hover for a cleaner effect
  },
  // Responsive font size and padding
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    padding: '12px 16px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    padding: '10px 14px',
  },
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
const GlobalKeyframes = () => {
  React.useEffect(() => {
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

const RegisterButton = ({
  id,
  onClick,
  text = "Register Now at ₹99/- Only",
  sx = {},
  endIcon,
  startIcon,
  fullWidth = false,
  href,
  ...props
}) => {
  return (
    <>
      <GlobalKeyframes />
      <AnimatedButton
        id={id}
        variant="contained"
        onClick={onClick}
        endIcon={endIcon}
        startIcon={startIcon}
        fullWidth={fullWidth}
        href={href}
        sx={{
          ...sx,
        }}
        {...props}
      >
        {text}
      </AnimatedButton>
    </>
  );
};

export default RegisterButton;