import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-light">Boutique</h3>
            <p className="text-stone-300">Expert fashion advice to elevate your style and transform your wardrobe.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/catalog" className="text-stone-300 hover:text-white transition-colors">
                Catalog
              </Link>
              <Link href="/booking" className="text-stone-300 hover:text-white transition-colors">
                Book Consultation
              </Link>
              <Link href="/about" className="text-stone-300 hover:text-white transition-colors">
                About Us
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="text-stone-300 space-y-2">
              <p>hello@boutiqueconsultancy.com</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Fashion Street, NY 10001</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Follow Us</h4>
            <div className="flex space-x-4">
              <Instagram className="w-6 h-6 text-stone-300 hover:text-white cursor-pointer transition-colors" />
              <Facebook className="w-6 h-6 text-stone-300 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-stone-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-12 pt-8 text-center text-stone-400">
          <p>&copy; 2024 Boutique Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
