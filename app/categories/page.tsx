//categories/page.tsx
// --- a/file:///c%3A/Users/HP/Documents/ecommerce/categories/page.ts

'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { productData } from '@/data/products';

export default function CategoriesPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(productData).map(([slug, category]) => (
            <Link href={`/categories/${slug}`} key={slug}>
              <Card className="hover:shadow-lg transition">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    {category.products.length} products
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
