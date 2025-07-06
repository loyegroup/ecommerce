'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit/debit cards, PayPal, and bank transfers.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3–7 business days, depending on your location.',
    },
    {
      question: 'Can I track my order?',
      answer: 'Yes, you’ll receive a tracking link by email once your order ships.',
    },
    {
      question: 'What is your return policy?',
      answer: 'You can return items within 14 days of delivery for a full refund or exchange.',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we offer worldwide shipping. Delivery times and fees vary by country.',
    },
    {
      question: 'How do I contact support?',
      answer: 'You can reach us via email, phone, or live chat through our Contact page.',
    },
    {
      question: 'Do I need an account to place an order?',
      answer: 'No, you can check out as a guest, but having an account lets you track orders and save preferences.',
    },
  ];

  return (
    <section className="py-16 bg-background" id="faq">
      <div className="container mx-auto px-4 max-w-3xl" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <Accordion type="multiple" className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
