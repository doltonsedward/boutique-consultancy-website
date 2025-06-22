import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

// Mock data for products
const featuredProducts = [
  {
    id: 1,
    name: "Elegant Cream Dress",
    price: 299,
    image: "/assets/Elegant-Cream-Dress.png",
  },
  {
    id: 2,
    name: "Classic Tan Blazer",
    price: 459,
    image: "/assets/Classic-Tan-Blazer.png",
  },
  {
    id: 3,
    name: "Camel Wool Coat",
    price: 699,
    image: "/assets/Camel-Wool-Coat.png",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-stone-100 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-playfair text-5xl lg:text-7xl font-light text-stone-900 leading-tight">
                BOUTIQUE
                <br />
                CONSULTANCY
              </h1>
              <p className="text-xl lg:text-2xl text-stone-700 font-light">
                Expert fashion advice
                <br />
                to elevate your style
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-stone-800 hover:bg-stone-900 text-white px-8 py-3"
              >
                <Link href="/booking">Book Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white px-8 py-3"
              >
                <Link href="/catalog">View Collection</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4ywwKXlyF9InTwvj1XC1ouauQP8Z04.png"
              alt="Professional fashion consultant"
              width={600}
              height={800}
              className="rounded-lg shadow-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Collection Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl lg:text-5xl font-light text-stone-900 mb-4">
              COLLECTION
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Discover our curated selection of timeless pieces designed to
              elevate your wardrobe
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={400}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-playfair text-xl text-stone-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-stone-600 font-medium">${product.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white px-12 py-3"
            >
              <Link href="/catalog">VIEW CATALOG</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl lg:text-5xl font-light text-stone-900 mb-6">
            BOOK A CONSULTATION
          </h2>
          <p className="text-xl text-stone-700 mb-8 max-w-2xl mx-auto">
            Schedule a 1-hour personal consultation with our expert stylists to
            transform your wardrobe.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-stone-800 hover:bg-stone-900 text-white px-12 py-4 text-lg"
          >
            <Link href="/booking">BOOK NOW</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
