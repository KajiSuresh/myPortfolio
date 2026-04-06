'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { GlowButton } from './GlowButton'
import { NeonText } from './NeonText'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md glass">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
            <NeonText variant="cyan" className="text-white font-bold text-sm">
              SK
            </NeonText>
          </div>
          <NeonText variant="cyan" className="text-xl font-bold">
            KAJEEPAN SURESH
          </NeonText>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScroll(item.href)}
              className="text-foreground hover:text-primary transition-colors text-sm"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <GlowButton variant="cyan" size="sm">
            Download CV
          </GlowButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-blue-500/10 animate-in fade-in slide-in-from-top-2">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScroll(item.href)}
                className="text-foreground hover:text-primary transition-colors text-left py-2 border-b border-blue-500/10 last:border-0"
              >
                {item.label}
              </button>
            ))}
            <GlowButton variant="cyan" className="w-full mt-2">
              Download CV
            </GlowButton>
          </div>
        </div>
      )}
    </nav>
  )
}
