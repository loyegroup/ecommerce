import { productData } from '@/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function ProductPage({ params }: { params: { id: string } }) {
  const allProducts = Object.values(productData).flatMap((cat) => cat.products);
  const product = allProducts.find((p) => p.id === params.id);

  if (!product) return notFound();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-[400px] bg-gray-100 rounded">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain rounded"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-muted-foreground mb-6">{product.description}</p>
          <p className="text-2xl font-semibold mb-6">₦{product.price.toLocaleString()}</p>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </section>
  );
}
