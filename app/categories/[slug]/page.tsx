// app/categories/[slug]/page.tsx

import { productData } from '@/data/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

type CategoryParams = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return Object.keys(productData).map((slug) => ({ slug }));
}

export default async function CategoryPage({ params }: CategoryParams) {
  const category = productData[params.slug as keyof typeof productData];

  if (!category) return notFound();

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{category.name}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {category.products.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain rounded"
                  />
                </div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {product.description}
                </p>
                <p className="text-primary font-bold">
                  ₦{product.price.toLocaleString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
