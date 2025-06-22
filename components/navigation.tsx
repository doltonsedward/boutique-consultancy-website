"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, User } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-stone-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-playfair text-2xl font-light text-stone-900">
            Boutique
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-stone-700 hover:text-stone-900 transition-colors">
              Home
            </Link>
            <Link href="/catalog" className="text-stone-700 hover:text-stone-900 transition-colors">
              Catalog
            </Link>
            <Link href="/booking" className="text-stone-700 hover:text-stone-900 transition-colors">
              Booking
            </Link>
            <Link
              href="/auth/signin"
              className="text-stone-700 hover:text-stone-900 transition-colors flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Sign In
            </Link>
            <Button asChild size="sm" className="bg-stone-800 hover:bg-stone-900">
              <Link href="/auth/register">Register</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-stone-700 hover:text-stone-900 transition-colors">
                Home
              </Link>
              <Link href="/catalog" className="text-stone-700 hover:text-stone-900 transition-colors">
                Catalog
              </Link>
              <Link href="/booking" className="text-stone-700 hover:text-stone-900 transition-colors">
                Booking
              </Link>
              <Link href="/auth/signin" className="text-stone-700 hover:text-stone-900 transition-colors">
                Sign In
              </Link>
              <Link href="/auth/register" className="text-stone-700 hover:text-stone-900 transition-colors">
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
