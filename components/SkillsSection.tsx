import React from 'react'
import { SectionContainer } from './SectionContainer'
import { SectionTitle } from './SectionTitle'
import { GlassCard } from './GlassCard'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS','JavaScript', 'HTML', 'CSS'],
    icon: '🎨',
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MySQL', 'GraphQL', 'Firebase', 'SQL', ],
    icon: '⚙️',
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Figma', 'Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro'],
    icon: '🛠️',
  },
  {
    category: 'Design',
    skills: ['UI/UX Design', 'Responsive Design', 'Accessibility', 'Design Systems', 'Prototyping', 'Brand Design'],
    icon: '✨',
  },
]

export function SkillsSection() {
  return (
    <SectionContainer id="skills">
      <SectionTitle
        title="Skills & Expertise"
        subtitle="A comprehensive overview of my technical and creative capabilities"
        highlight="cyan"
      />

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <GlassCard
            key={category.category}
            neonBorder={Math.random() > 0.5 ? 'cyan' : 'purple'}
            className="p-8 hover:scale-105 transform transition-transform duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{category.icon}</span>
              <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-sm font-medium text-foreground hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Proficiency Levels */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <GlassCard neonBorder="cyan" className="p-6 text-center">
          <div className="text-5xl font-bold text-cyan-400 mb-2">95%</div>
          <p className="text-muted-foreground">Frontend Development</p>
        </GlassCard>
        <GlassCard neonBorder="purple" className="p-6 text-center">
          <div className="text-5xl font-bold text-purple-400 mb-2">85%</div>
          <p className="text-muted-foreground">Backend Development</p>
        </GlassCard>
        <GlassCard neonBorder="pink" className="p-6 text-center">
          <div className="text-5xl font-bold text-pink-400 mb-2">90%</div>
          <p className="text-muted-foreground">UI/UX Design</p>
        </GlassCard>
      </div>
    </SectionContainer>
  )
}
