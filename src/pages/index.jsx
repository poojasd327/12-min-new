import React, { useState, useEffect } from 'react'
import Header from '../components/header'
import HeroSection from '../components/hero/HeroSection'
import InfoSection from '../components/InfoSection'
import WhyTakeMockTestSection from '../components/WhyTakeMockTestSection'
import HighlightsSection from '../components/HighlightsSection'



import SmartWaySection from '../components/SmartWaySection'
import TestimonialsSection from '../components/TestimonialsSection'

import Footer from '../components/Footer'
import LeadCaptureFormDialog from '../components/LeadCaptureFormDialog'


import Head from 'next/head'
import SmoothScroll from '../components/SmoothScroll'

export default function Page() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLeadFormOpen(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);                                              
  }, []);

  const navItems = [
    { label: 'Home', target: 'hero-section' },



  ];

  const handleNavClick = (target) => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleRegisterClick = () => {
    setIsLeadFormOpen(true);
  };

  return (
    <>
      <Head>
        <title>7-Month CLAT 2027 Prep Plan | Free Webinar</title>
        <meta name="description" content="Learn CLAT prep from NLU grads. Join our free 7-month strategy session." />
      </Head>
      <SmoothScroll>
        <Header navItems={navItems} onNavClick={handleNavClick} />
        <HeroSection onRegisterClick={handleRegisterClick} />
        <InfoSection />
        <WhyTakeMockTestSection />
        <HighlightsSection />



        <SmartWaySection onRegisterClick={handleRegisterClick} />
        <TestimonialsSection />
        <Footer />
        <LeadCaptureFormDialog
          open={isLeadFormOpen}
          onClose={() => setIsLeadFormOpen(false)}
          formType="popup"
        />


      </SmoothScroll>
    </>
  );
}
