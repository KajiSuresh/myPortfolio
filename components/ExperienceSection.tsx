import React from 'react'
import { SectionContainer } from './SectionContainer'
import { SectionTitle } from './SectionTitle'
import { GlassCard } from './GlassCard'
import { NeonText } from './NeonText'

const experiences = [
  
  {
    role: 'Graphic Designer & Video Editor',
    company: 'IBC Tamil Jaffna.',
    period: '2024 - Present',
    description:
      'Managed digital visuals, applied Design principles, created motion graphics, optimized assets, and collaborated in deadlines.',
    achievements: [
      'Reduced bundle size by 50%',
      'Achieved 98% accessibility score',
      'Implemented real-time features using WebSockets',
    ],
  },
  {
    role: 'Junior Web Developer',
    company: 'Web Agency Plus',
    period: '2018 - 2019',
    description:
      'Started career developing static and dynamic websites. Learned frontend fundamentals and best practices. Supported senior developers in project delivery.',
    achievements: [
      'Completed 20+ website projects',
      'Mastered HTML, CSS, and JavaScript',
      'Gained experience with WordPress and custom CMS',
    ],
  },
]

export function ExperienceSection() {
  return (
    <SectionContainer id="experience">
      <SectionTitle
        title="Professional Experience"
        subtitle="A timeline of my career growth and professional journey"
        highlight="cyan"
      />

      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-purple-500 -translate-x-1/2" />

        {/* Experiences */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`flex gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              {/* Timeline Dot */}
              <div className="hidden lg:flex flex-col items-center gap-4 flex-1">
                <div className="w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-cyan-400/30" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <GlassCard neonBorder={index % 3 === 0 ? 'cyan' : index % 3 === 1 ? 'purple' : 'pink'} className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-semibold mt-1">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground px-3 py-1 rounded bg-muted/20 w-fit ml-auto">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">{exp.description}</p>

                  {/* Achievements */}
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-3">Key Achievements:</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-16 pt-16 border-t border-blue-500/20">
          <h3 className="text-2xl font-bold text-foreground mb-8">Education</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard neonBorder="purple" className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-foreground">Higher Diploma (HD) in Computing & Software Engineering</h4>
                  <p className="text-primary font-semibold mt-2">Cardiff Metropolitan University</p>
                </div>
                <span className="text-3xl">🎓</span>
              </div>
              <p className="text-muted-foreground">
                Completed a comprehensive IT program covering computer architecture, programming, system analysis, databases, web and mobile development, networking, cybersecurity, business analytics, and project management.
              </p>
            </GlassCard>

            <GlassCard neonBorder="pink" className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-foreground">BSc (Hons) Software Engineering</h4>
                  <p className="text-accent font-semibold mt-2">Cardiff Metropolitan University</p>
                </div>
                <span className="text-3xl">📜</span>
              </div>
              <p className="text-muted-foreground">
               Completed an advanced IT curriculum covering professional ethics, programming, analytics, business intelligence, computational intelligence, and development projects.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
