'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50"
      id="contact"
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <div data-aos="fade-up" className="text-center mb-10">
          <h2 className="text-4xl font-bold text-primary mb-2">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have questions, suggestions, or want to partner with us? We'd love to hear from you!
          </p>
        </div>

        <form className="space-y-6" data-aos="fade-up" data-aos-delay="100">
          <div className="grid md:grid-cols-2 gap-6">
            <Input placeholder="Your Name" className="bg-white" required />
            <Input type="email" placeholder="Your Email" className="bg-white" required />
          </div>
          <Input placeholder="Subject" className="bg-white" required />
          <Textarea placeholder="Your Message..." rows={5} className="bg-white" required />

          <div className="text-center">
            <Button size="lg" className="px-10">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

// This component can be imported and used in your main page or wherever you need the contact section.