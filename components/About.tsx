'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Truck, Star, Headset } from 'lucide-react';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const features = [
    {
      title: 'Fast Shipping',
      text: 'We deliver your orders quickly and reliably nationwide.',
      Icon: Truck,
      animation: 'animate__fadeInLeft',
    },
    {
      title: 'Premium Products',
      text: 'We handpick high-quality products you’ll love and trust.',
      Icon: Star,
      animation: 'animate__zoomIn',
    },
    {
      title: 'Exceptional Support',
      text: 'Our support team is ready to help with anything, anytime.',
      Icon: Headset,
      animation: 'animate__fadeInRight',
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100"
      id="about"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center">
          <Badge className="bg-indigo-100 text-indigo-600 animate__animated animate__bounceInDown text-base px-3 py-1.5">
            Who We Are
          </Badge>

          <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-foreground animate__animated animate__fadeInDown animate__delay-1s">
            About ShopEase
          </h2>
          <p className="mt-4 text-muted-foreground text-lg sm:text-xl animate__animated animate__fadeIn animate__delay-2s">
            At ShopEase, we’re passionate about making quality products accessible and stylish.
            Whether you’re shopping for the latest fashion trends, must-have gadgets, or everyday essentials,
            we’re here to help you upgrade your lifestyle effortlessly.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <Card
              key={index}
              data-aos="zoom-in"
              className={`group relative bg-white shadow-lg border animate__animated ${item.animation} animate__delay-${index + 2}s hover:scale-[1.02] transition-transform duration-300`}
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <item.Icon className="h-10 w-10 text-indigo-600 group-hover:rotate-6 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
