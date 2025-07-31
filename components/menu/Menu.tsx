'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { 
  ChevronDown,
  Sofa,
  Bed,
  ChefHat,
  Lamp,
  Armchair,
  Home,
  Sparkles,
  Tag,
  Truck,
  Phone,
  Grid3X3,
  Menu,
  X
} from 'lucide-react'

interface NavigationProps {
  className?: string
}

interface Category {
  id: string
  name: string
  href: string
  icon: React.ReactNode
  subcategories?: {
    id: string
    name: string
    href: string
    items?: string[]
  }[]
}

export default function Navigation({ className }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Kategoriju definīcijas
  const categories: Category[] = [
    {
      id: 'living-room',
      name: 'Dzīvojamā istaba',
      href: '/kategorijas/dzivojama-istaba',
      icon: <Sofa className="w-4 h-4" />,
      subcategories: [
        {
          id: 'sofas',
          name: 'Dīvāni',
          href: '/kategorijas/divani',
          items: ['Stūra dīvāni', 'Taisnie dīvāni', 'Krēsli-gultas', 'Modulārie dīvāni']
        },
        {
          id: 'tables',
          name: 'Galdi',
          href: '/kategorijas/galdi',
          items: ['Kafijas galdiņi', 'TV galdiņi', 'Konsoles', 'Žurnālu galdiņi']
        },
        {
          id: 'storage',
          name: 'Uzglabāšana',
          href: '/kategorijas/uzglabāsana',
          items: ['Plaukti', 'Komodes', 'Vitrīnas', 'TV mēbeles']
        }
      ]
    },
    {
      id: 'bedroom',
      name: 'Guļamistaba',
      href: '/kategorijas/gulamistaba',
      icon: <Bed className="w-4 h-4" />,
      subcategories: [
        {
          id: 'beds',
          name: 'Gultas',
          href: '/kategorijas/gultas',
          items: ['Divguļamās gultas', 'Vienvietīgās gultas', 'Bērnu gultas', 'Gultas ar veļas kasti']
        },
        {
          id: 'wardrobes',
          name: 'Skapji',
          href: '/kategorijas/skapji',
          items: ['Drēbju skapji', 'Slīdošie skapji', 'Stūra skapji', 'Bērnu skapji']
        },
        {
          id: 'bedroom-furniture',
          name: 'Guļamistabas mēbeles',
          href: '/kategorijas/gulamistabas-mebeles',
          items: ['Naktsgaldiņi', 'Komodes', 'Tualetes galdiņi', 'Spoguļi']
        }
      ]
    },
    {
      id: 'kitchen',
      name: 'Virtuve',
      href: '/kategorijas/virtuve',
      icon: <ChefHat className="w-4 h-4" />,
      subcategories: [
        {
          id: 'kitchen-sets',
          name: 'Virtuves iekārtas',
          href: '/kategorijas/virtuves-iekartas',
          items: ['Virtuves komplekti', 'Virtuves skapīši', 'Darba virsmas', 'Virtuves salas']
        },
        {
          id: 'dining',
          name: 'Ēdamistaba',
          href: '/kategorijas/edamistaba',
          items: ['Ēdamgaldi', 'Krēsli', 'Bufetes', 'Bāra mēbeles']
        }
      ]
    },
    {
      id: 'lighting',
      name: 'Apgaismojums',
      href: '/kategorijas/apgaismojums',
      icon: <Lamp className="w-4 h-4" />,
      subcategories: [
        {
          id: 'ceiling-lights',
          name: 'Griestu lampas',
          href: '/kategorijas/griestu-lampas',
          items: ['Lustras', 'Griestu lampas', 'Iebūvējamās lampas', 'LED lampas']
        },
        {
          id: 'table-lamps',
          name: 'Galda lampas',
          href: '/kategorijas/galda-lampas',
          items: ['Darba lampas', 'Dekoratīvās lampas', 'Nakts lampas']
        }
      ]
    },
    {
      id: 'office',
      name: 'Birojs',
      href: '/kategorijas/birojs',
      icon: <Armchair className="w-4 h-4" />,
      subcategories: [
        {
          id: 'office-furniture',
          name: 'Biroja mēbeles',
          href: '/kategorijas/biroja-mebeles',
          items: ['Biroja galdi', 'Biroja krēsli', 'Biroja skapji', 'Failu skapis']
        }
      ]
    }
  ]

  const quickLinks = [
    { name: 'Mājas', href: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'Jaunumi', href: '/jaunumi', icon: <Sparkles className="w-4 h-4" /> },
    { name: 'Akcijas', href: '/akcijas', icon: <Tag className="w-4 h-4" /> },
    { name: 'Piegāde', href: '/piegade', icon: <Truck className="w-4 h-4" /> },
    { name: 'Kontakti', href: '/kontakti', icon: <Phone className="w-4 h-4" /> }
  ]

  const handleMouseEnter = (categoryId: string) => {
    setActiveDropdown(categoryId)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <nav className="bg-gray-50 border-b border-gray-200 sticky top-[73px] z-40">
      <div className="max-w-screen-2xl mx-auto px-4">
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between py-3">
          
          {/* Kategorijas */}
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              className="bg-red-600 text-white hover:bg-red-700 mr-4"
            >
              <Grid3X3 className="w-4 h-4 mr-2" />
              Visas kategorijas
            </Button>

            {categories.map((category) => (
              <div
                key={category.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(category.id)}
                onMouseLeave={handleMouseLeave}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-1 hover:bg-white hover:shadow-sm transition-all"
                  asChild
                >
                  <Link href={category.href}>
                    {category.icon}
                    <span>{category.name}</span>
                    {category.subcategories && <ChevronDown className="w-3 h-3" />}
                  </Link>
                </Button>

                {/* Dropdown menu */}
                {category.subcategories && activeDropdown === category.id && (
                  <div className="absolute top-full left-0 bg-white shadow-lg border border-gray-200 rounded-lg p-4 min-w-[500px] mt-1 animate-in fade-in-0 zoom-in-95 duration-200">
                    <div className="grid grid-cols-2 gap-4">
                      {category.subcategories.map((subcategory) => (
                        <div key={subcategory.id} className="space-y-2">
                          <Link
                            href={subcategory.href}
                            className="font-medium text-red-600 hover:text-red-700 transition-colors block"
                          >
                            {subcategory.name}
                          </Link>
                          {subcategory.items && (
                            <ul className="space-y-1">
                              {subcategory.items.map((item, index) => (
                                <li key={index}>
                                  <Link
                                    href={`${subcategory.href}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors block py-1"
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Ātrās saites */}
          <div className="flex items-center space-x-1">
            {quickLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                size="sm"
                className="hover:bg-white hover:shadow-sm transition-all"
                asChild
              >
                <Link href={link.href} className="flex items-center space-x-1">
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        <div className="lg:hidden py-3">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center space-x-2"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span>Kategorijas</span>
            </Button>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/akcijas" className="text-red-600 font-medium">
                  Akcijas
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/jaunumi">
                  Jaunumi
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="mt-4 bg-white rounded-lg shadow-lg border border-gray-200 animate-in slide-in-from-top duration-200">
              
              {/* Ātrās saites */}
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-medium text-gray-900 mb-3">Ātrās saites</h3>
                <div className="grid grid-cols-2 gap-2">
                  {quickLinks.map((link) => (
                    <Button
                      key={link.href}
                      variant="ghost"
                      size="sm"
                      className="justify-start"
                      asChild
                    >
                      <Link href={link.href}>
                        {link.icon}
                        <span className="ml-2">{link.name}</span>
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Kategorijas */}
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-3">Kategorijas</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <Dialog key={category.id}>
                      <div className="flex items-center justify-between">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex-1 justify-start"
                          asChild
                        >
                          <Link href={category.href}>
                            {category.icon}
                            <span className="ml-2">{category.name}</span>
                          </Link>
                        </Button>
                        
                        {category.subcategories && (
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="px-2">
                              <ChevronDown className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                        )}
                      </div>

                      {category.subcategories && (
                        <DialogContent className="sm:max-w-lg max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="flex items-center space-x-2">
                              {category.icon}
                              <span>{category.name}</span>
                            </DialogTitle>
                            <DialogDescription>
                              Izvēlieties apakškategoriju
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="space-y-4">
                            {category.subcategories.map((subcategory) => (
                              <div key={subcategory.id} className="space-y-2">
                                <Button
                                  variant="outline"
                                  className="w-full justify-start font-medium text-red-600 border-red-200 hover:bg-red-50"
                                  asChild
                                >
                                  <Link href={subcategory.href}>
                                    {subcategory.name}
                                  </Link>
                                </Button>
                                
                                {subcategory.items && (
                                  <div className="pl-4 space-y-1">
                                    {subcategory.items.map((item, index) => (
                                      <Button
                                        key={index}
                                        variant="ghost"
                                        size="sm"
                                        className="w-full justify-start text-gray-600"
                                        asChild
                                      >
                                        <Link href={`${subcategory.href}/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                                          {item}
                                        </Link>
                                      </Button>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </DialogContent>
                      )}
                    </Dialog>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}