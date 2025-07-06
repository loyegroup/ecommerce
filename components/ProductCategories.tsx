// components/ProductCategories.tsx
'use client';

import Link from 'next/link';
import { productData } from '@/data/products';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductCategories = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(productData).map(([slug, category]) => (
            <Link href={`/categories?type=${slug}`} key={slug}>
              <Card className="hover:shadow-md transition" data-aos="fade-up">
                <CardContent className="p-6 text-center">
                  <Badge className="mb-2">{category.name}</Badge>
                  <h3 className="text-xl font-semibold">{category.products.length} Products</h3>
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
