'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 bg-background" id="about">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center">
          <Badge className="bg-indigo-100 text-indigo-600 animate__animated animate__bounceInDown">
            Who We Are
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 animate__animated animate__fadeInDown animate__delay-1s">
            About ShopEase
          </h2>
          <p className="mt-4 text-muted-foreground text-lg animate__animated animate__fadeIn animate__delay-2s">
            At ShopEase, we’re passionate about making quality products accessible and stylish.
            Whether you’re shopping for the latest fashion trends, must-have gadgets, or everyday essentials, we’re here to help you upgrade your lifestyle effortlessly.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Fast Shipping',
              text: 'We deliver your orders quickly and reliably nationwide.',
              animation: 'animate__fadeInLeft',
            },
            {
              title: 'Premium Products',
              text: 'We handpick high-quality products you’ll love and trust.',
              animation: 'animate__zoomIn',
            },
            {
              title: 'Exceptional Support',
              text: 'Our support team is ready to help with anything, anytime.',
              animation: 'animate__fadeInRight',
            },
          ].map((item, index) => (
            <Card
              key={index}
              data-aos="zoom-in"
              className={`animate__animated ${item.animation} animate__delay-${index + 2}s`}
            >
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
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
