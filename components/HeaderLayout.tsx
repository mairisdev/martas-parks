'use client'

import React from 'react'
import Header from './topbar/TopBar'
import Navigation from './menu/Menu'

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header komponents */}
      <Header />
      
      {/* Navigation komponents */}
      <Navigation />
      
      {/* Galvenais saturs */}
      <main className={className}>
        {children}
      </main>
      
      {/* Footer (vienkāršs piemērs) */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Uzņēmuma info */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-red-400">MartasMēbeles</h3>
              <p className="text-gray-300 text-sm">
                Kvalitatīvas mēbeles jūsu mājoklim. Plaša izvēle, pieejamas cenas un ātru piegāde.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>📞 +371 20000000</p>
                <p>✉️ info@martasmebeles.lv</p>
                <p>📍 Rīga, Latvija</p>
              </div>
            </div>
            
            {/* Kategorijas */}
            <div className="space-y-4">
              <h4 className="font-semibold">Kategorijas</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/kategorijas/dzivojama-istaba" className="hover:text-white transition-colors">Dzīvojamā istaba</a></li>
                <li><a href="/kategorijas/gulamistaba" className="hover:text-white transition-colors">Guļamistaba</a></li>
                <li><a href="/kategorijas/virtuve" className="hover:text-white transition-colors">Virtuve</a></li>
                <li><a href="/kategorijas/birojs" className="hover:text-white transition-colors">Birojs</a></li>
              </ul>
            </div>
            
            {/* Klientu serviss */}
            <div className="space-y-4">
              <h4 className="font-semibold">Klientu serviss</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/piegade" className="hover:text-white transition-colors">Piegāde</a></li>
                <li><a href="/apmaksa" className="hover:text-white transition-colors">Apmaksa</a></li>
                <li><a href="/garantija" className="hover:text-white transition-colors">Garantija</a></li>
                <li><a href="/kontakti" className="hover:text-white transition-colors">Kontakti</a></li>
              </ul>
            </div>
            
            {/* Juridiskā info */}
            <div className="space-y-4">
              <h4 className="font-semibold">Juridiskā informācija</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/noteikumi" className="hover:text-white transition-colors">Lietošanas noteikumi</a></li>
                <li><a href="/privatums" className="hover:text-white transition-colors">Privātuma politika</a></li>
                <li><a href="/cookies" className="hover:text-white transition-colors">Sīkdatņu politika</a></li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 Martas Mēbeles, Visas tiesības aizsargātas.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Eksportējam arī atsevišķos komponentus
export { default as Header } from './topbar/TopBar'
export { default as Navigation } from './menu/Menu'