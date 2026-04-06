'use client'

import React, { useState } from 'react'
import { SectionContainer } from './SectionContainer'
import { SectionTitle } from './SectionTitle'
import { GlassCard } from './GlassCard'
import { GlowButton } from './GlowButton'
import { Mail } from 'lucide-react'

const socialLinks = [
  {
    label: 'Email',
    href: 'mailto:hello@example.com',
    icon: Mail,
    color: 'cyan',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    // icon: Linkedin,
    color: 'purple',
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    // icon: Github,
    color: 'pink',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    // icon: Twitter,
    color: 'cyan',
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <SectionContainer id="contact">
      <SectionTitle title="Get In Touch" subtitle="Let's discuss your next project" highlight="purple" />

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <GlassCard neonBorder="cyan" className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project inquiry"
                required
                className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            <GlowButton type="submit" variant="cyan" className="w-full">
              Send Message
            </GlowButton>
          </form>
        </GlassCard>

        {/* Contact Info */}
        <div className="space-y-8">
          <GlassCard neonBorder="purple" className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Let's Connect</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Email</p>
                <a href="mailto:hello@example.com" className="text-primary hover:text-cyan-300 transition-colors">
                  hello@example.com
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Location</p>
                <p className="text-foreground">San Francisco, CA</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Availability</p>
                <p className="text-foreground">Open to freelance & full-time roles</p>
              </div>
            </div>
          </GlassCard>

          {/* Social Links */}
          <GlassCard neonBorder="pink" className="p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Follow Me</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all hover:scale-110 ${
                      link.color === 'cyan'
                        ? 'border-cyan-500/30 hover:bg-cyan-500/10 text-cyan-400'
                        : link.color === 'purple'
                          ? 'border-purple-500/30 hover:bg-purple-500/10 text-purple-400'
                          : 'border-pink-500/30 hover:bg-pink-500/10 text-pink-400'
                    }`}
                  >
                    {/* <Icon size={20} /> */}
                    <span className="text-sm font-semibold">{link.label}</span>
                  </a>
                )
              })}
            </div>
          </GlassCard>
        </div>
      </div>
    </SectionContainer>
  )
}
