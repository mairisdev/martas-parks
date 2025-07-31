'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { 
  User, 
  Settings, 
  LogOut, 
  Heart, 
  ShoppingCart, 
  Search,
  Menu,
  X,
  UserCircle,
  Phone,
  Mail,
  ChevronDown
} from 'lucide-react'

interface HeaderProps {
  className?: string
}

export default function Header({ className }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Simulēts state
  const [cartCount, setCartCount] = useState(0)
  const [wishlistCount, setWishlistCount] = useState(0)

  // Simulēts lietotājs
  const user = isLoggedIn ? {
    name: 'Jānis Bērziņš',
    email: 'janis@example.com'
  } : null

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Meklēt:', searchQuery)
    // Šeit būtu meklēšanas loģika
  }

  const handleSignOut = () => {
    setIsLoggedIn(false)
    console.log('Lietotājs izrakstījās')
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-4">
        {/* Augšējā rinda */}
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors">
              MartasMēbeles
            </Link>
          </div>

          {/* Meklēšanas forma - desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Meklēt produktus..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </form>

          {/* Labā puse */}
          <div className="flex items-center space-x-4">

            {/* Kontakti - desktop */}
            <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1 hover:text-gray-800 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+371 20000000</span>
              </div>
              <div className="flex items-center space-x-1 hover:text-gray-800 transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@martasmebeles.lv</span>
              </div>
            </div>

            {/* Vēlmju saraksts */}
            <Button variant="ghost" size="sm" className="relative hover:bg-gray-100" asChild>
              <Link href="/wishlist">
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center min-w-[20px]">
                    {wishlistCount}
                  </span>
                )}
              </Link>
            </Button>

            {/* Iepirkumu grozs */}
            <Button variant="ghost" size="sm" className="relative hover:bg-gray-100" asChild>
              <Link href="/cart">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center min-w-[20px]">
                    {cartCount}
                  </span>
                )}
              </Link>
            </Button>

            {/* Lietotāja profils */}
            {user ? (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2 hover:bg-gray-100">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="hidden md:block text-sm font-medium max-w-24 truncate">
                      {user.name.split(' ')[0]}
                    </span>
                    <ChevronDown className="w-3 h-3 hidden md:block" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Mans profils</DialogTitle>
                    <DialogDescription>
                      Pārvaldiet savu kontu un iestatījumus
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {user.name}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link href="/profile">
                          <Settings className="w-4 h-4 mr-3" />
                          Mans profils
                        </Link>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link href="/orders">
                          <ShoppingCart className="w-4 h-4 mr-3" />
                          Mani pasūtījumi
                        </Link>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link href="/wishlist">
                          <Heart className="w-4 h-4 mr-3" />
                          Vēlmju saraksts
                        </Link>
                      </Button>
                    </div>
                    
                    <div className="border-t pt-4">
                      <Button
                        onClick={handleSignOut}
                        variant="ghost"
                        className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <LogOut className="w-4 h-4 mr-3" />
                        Iziet
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/auth/login">
                    <UserCircle className="w-4 h-4 mr-1" />
                    Ieiet
                  </Link>
                </Button>
                <Button size="sm" className="bg-red-600 hover:bg-red-700" asChild>
                  <Link href="/auth/register">
                    Reģistrēties
                  </Link>
                </Button>
              </div>
            )}

            {/* Mobile menu toggle */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-b border-gray-100 animate-in slide-in-from-top duration-200">
            {/* Meklēšana mobile */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Meklēt produktus..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </form>

            {/* Kontakti mobile */}
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+371 20000000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@martasmebeles.lv</span>
              </div>
            </div>

            {/* Mobile navigation links */}
            {user && (
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/profile">
                    <Settings className="w-4 h-4 mr-3" />
                    Mans profils
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/orders">
                    <ShoppingCart className="w-4 h-4 mr-3" />
                    Mani pasūtījumi
                  </Link>
                </Button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Demo pogas (noņemamas production versijā) */}
      <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-2">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between text-sm">
          <span className="text-yellow-800">Demo režīms:</span>
          <div className="flex space-x-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="text-xs"
            >
              {isLoggedIn ? 'Iziet' : 'Ieiet kā lietotājs'}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setCartCount(prev => prev + 1)}
              className="text-xs"
            >
              Pievienot grozam ({cartCount})
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setWishlistCount(prev => prev + 1)}
              className="text-xs"
            >
              Pievienot vēlmēm ({wishlistCount})
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}