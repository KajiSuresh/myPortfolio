import React from 'react'
import { NeonText } from './NeonText'

const currentYear = new Date().getFullYear()

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="bg-background-secondary/50 backdrop-blur-md border-t border-blue-500/10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <NeonText variant="cyan" className="text-white font-bold text-sm">
                  V
                </NeonText>
              </div>
              <NeonText variant="cyan" className="text-lg font-bold">
                Portfolio
              </NeonText>
            </div>
            <p className="text-muted-foreground">
              A creative developer crafting digital experiences that matter. Let's build something extraordinary.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground text-sm">Web Development</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">UI/UX Design</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Consulting</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Optimization</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-500/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} All rights reserved. Designed & developed with care.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
