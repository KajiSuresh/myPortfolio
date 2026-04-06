import React from 'react'
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
            I'm a full-stack developer with a passion for creating beautiful, intuitive digital experiences. With over 5 years of experience in web development, I've worked with startups and established companies to bring their visions to life.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            My journey into tech started with a curiosity about how things work. Today, I combine that curiosity with modern technologies and best practices to solve real-world problems. I'm constantly learning and staying updated with the latest industry trends.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <GlassCard neonBorder="cyan" className="p-4 text-center">
              <div className="text-3xl font-bold text-cyan-400">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </GlassCard>
            <GlassCard neonBorder="purple" className="p-4 text-center">
              <div className="text-3xl font-bold text-purple-400">30+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </GlassCard>
            <GlassCard neonBorder="pink" className="p-4 text-center">
              <div className="text-3xl font-bold text-pink-400">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </GlassCard>
            <GlassCard neonBorder="cyan" className="p-4 text-center">
              <div className="text-3xl font-bold text-cyan-400">200+</div>
              <div className="text-sm text-muted-foreground">Code Commits</div>
            </GlassCard>
          </div>
        </div>

        {/* Right Column - Image Placeholder */}
        <GlassCard neonBorder="purple" className="h-full min-h-96 p-8 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📸</div>
              <p className="text-muted-foreground">Your photo here</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </SectionContainer>
  )
}
