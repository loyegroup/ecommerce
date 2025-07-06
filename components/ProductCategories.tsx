'use client';

import Link from 'next/link';
import { productData } from '@/data/products';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

const ProductCategories = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center animate__animated animate__fadeInDown">
          🛍️ Shop by Category
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(productData).map(([slug, category], index) => (
            <Link href={`/categories?type=${slug}`} key={slug}>
              <Card
                className="hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <CardContent className="p-6 text-center">
                  <Badge className="mb-2 text-sm px-3 py-1 bg-primary/10 text-primary border border-primary/30">
                    🎯 {category.name}
                  </Badge>
                  <h3 className="text-xl font-semibold mt-2">
                    {category.products.length} {category.products.length === 1 ? 'Product' : 'Products'}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
