'use client'

import React from 'react'
import { SectionContainer } from './SectionContainer'
import { GlowButton } from './GlowButton'
import { NeonText } from './NeonText'
import { ArrowDown } from 'lucide-react'

export function HeroSection() {
  return (
    <SectionContainer id="home" className="pt-32 md:pt-40">
      <div className="flex flex-col items-center justify-center text-center gap-8">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Main Content */}
        <div className="space-y-6 max-w-3xl">
          <div className="text-lg text-muted-foreground">
            Welcome to my digital space
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            I'm a <br/> <NeonText variant="cyan">Creative Developer</NeonText> and <br/> 
            <NeonText variant="cyan">Creative Designer</NeonText>
            <br />
            crafting <NeonText variant="purple">modern web experiences.</NeonText>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Specializing in building beautiful, functional web applications with modern technologies. Let's create something extraordinary together.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
          <GlowButton variant="cyan" size="lg">
            View My Work
          </GlowButton>
          <GlowButton variant="purple" size="lg">
            Get in Touch
          </GlowButton>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <ArrowDown className="text-cyan-400" size={32} />
        </div>
      </div>
    </SectionContainer>
  )
}
