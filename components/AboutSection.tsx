import React from 'react'
import Image from 'next/image'
import { SectionContainer } from './SectionContainer'
import { SectionTitle } from './SectionTitle'
import { GlassCard } from './GlassCard'

export function AboutSection() {
  return (
    <SectionContainer id="about">
      <SectionTitle
        title="About Me"
        subtitle="Learn more about my background and what drives my passion"
        highlight="purple"
      />

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Text */}
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I’m a Front-End Developer and Creative Designer passionate about building modern, visually engaging digital experiences. With 1 year of experience using Next.js and Tailwind CSS, and 2 years in graphic design, UI/UX, animation, and video editing, I blend creativity with technical skills.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
           I turn ideas into clean, interactive, and user-friendly interfaces. With a strong design background, I focus on aesthetics, usability, and detail, while continuously learning and improving to build better digital experiences.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <GlassCard neonBorder="cyan" className="p-4 text-center">
              <div className="text-3xl font-bold text-cyan-400">10+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </GlassCard>
            {/* <GlassCard neonBorder="purple" className="p-4 text-center">
              <div className="text-3xl font-bold text-purple-400">5+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </GlassCard> */}
            <GlassCard neonBorder="pink" className="p-4 text-center">
              <div className="text-3xl font-bold text-pink-400">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </GlassCard>
            {/* <GlassCard neonBorder="cyan" className="p-4 text-center">
              <div className="text-3xl font-bold text-cyan-400">200+</div>
              <div className="text-sm text-muted-foreground">Code Commits</div>
            </GlassCard> */}
          </div>
        </div>

        {/* Right Column - Image Placeholder */}
       <GlassCard neonBorder="purple" className="h-full min-h-96 p-8 flex items-center justify-center">
  <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center relative overflow-hidden ">
    
    <Image
      src="/images/1.jpg"
      alt="My Photo"
      fill
      className="object-cover rounded-lg"
    />

  </div>
</GlassCard>
      </div>
    </SectionContainer>
  )
}
