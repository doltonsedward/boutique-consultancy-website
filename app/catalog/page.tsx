import Image from "next/image";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import products from "./data";

export default function CatalogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl lg:text-5xl font-light text-stone-900 mb-4">
            Our Complete Collection
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Discover our full range of carefully curated pieces designed to
            elevate your style
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                {product.featured && (
                  <Badge className="absolute top-3 left-3 z-10 bg-stone-800 text-white">
                    Featured
                  </Badge>
                )}
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-stone-500 uppercase tracking-wide">
                  {product.category}
                </p>
                <h3 className="font-playfair text-lg text-stone-900">
                  {product.name}
                </h3>
                <p className="text-stone-700 font-medium">${product.price}</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-stone-300 hover:bg-stone-800 hover:text-white"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
