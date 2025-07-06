// app/page.tsx
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Navbar } from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProductCategories from '@/components/ProductCategories';
import FAQ from '@/components/FAQ';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <ProductCategories />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  );
}
