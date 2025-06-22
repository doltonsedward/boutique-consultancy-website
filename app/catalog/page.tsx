import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Mock data for all products
const products = [
  {
    id: 1,
    name: "Elegant Cream Dress",
    price: 299,
    category: "Dresses",
    image: "/placeholder.svg?height=400&width=300",
    featured: true,
  },
  {
    id: 2,
    name: "Classic Tan Blazer",
    price: 459,
    category: "Blazers",
    image: "/placeholder.svg?height=400&width=300",
    featured: true,
  },
  {
    id: 3,
    name: "Camel Wool Coat",
    price: 699,
    category: "Outerwear",
    image: "/placeholder.svg?height=400&width=300",
    featured: true,
  },
  { id: 4, name: "Silk Blouse", price: 189, category: "Tops", image: "/placeholder.svg?height=400&width=300" },
  { id: 5, name: "Tailored Trousers", price: 259, category: "Bottoms", image: "/placeholder.svg?height=400&width=300" },
  { id: 6, name: "Cashmere Sweater", price: 349, category: "Knitwear", image: "/placeholder.svg?height=400&width=300" },
  {
    id: 7,
    name: "Leather Handbag",
    price: 599,
    category: "Accessories",
    image: "/placeholder.svg?height=400&width=300",
  },
  { id: 8, name: "Pearl Necklace", price: 199, category: "Jewelry", image: "/placeholder.svg?height=400&width=300" },
  { id: 9, name: "Midi Skirt", price: 179, category: "Bottoms", image: "/placeholder.svg?height=400&width=300" },
  { id: 10, name: "Wool Cardigan", price: 289, category: "Knitwear", image: "/placeholder.svg?height=400&width=300" },
]

export default function CatalogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl lg:text-5xl font-light text-stone-900 mb-4">Our Complete Collection</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Discover our full range of carefully curated pieces designed to elevate your style
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                {product.featured && (
                  <Badge className="absolute top-3 left-3 z-10 bg-stone-800 text-white">Featured</Badge>
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
                <p className="text-sm text-stone-500 uppercase tracking-wide">{product.category}</p>
                <h3 className="font-playfair text-lg text-stone-900">{product.name}</h3>
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
  )
}
