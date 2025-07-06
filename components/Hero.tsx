'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-indigo-50 to-pink-50 overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Text */}
        <div data-aos="fade-right">
          <Badge className="mb-4 bg-pink-100 text-pink-600 animate__animated animate__fadeInDown">
            New Arrival
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 animate__animated animate__fadeInUp">
            Upgrade Your Style <br />
            <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Discover the Trend
            </span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground animate__animated animate__fadeInUp animate__delay-1s">
            Explore our latest collection of fashion, gadgets, and accessories at unbeatable prices.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 animate__animated animate__fadeInUp animate__delay-2s">
            <Button size="lg">Shop Now</Button>
            <Button size="lg" variant="outline">
              Browse Categories
            </Button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative w-full h-[400px] md:h-[500px]" data-aos="fade-left">
          <Image
            src="/hero-product.png"
            alt="Featured Product"
            fill
            className="object-contain animate__animated animate__zoomIn"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
