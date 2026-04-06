import React from 'react'
import { SectionContainer } from './SectionContainer'
import { SectionTitle } from './SectionTitle'
import { GlassCard } from './GlassCard'
import { GlowButton } from './GlowButton'
import { ExternalLink,  } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.',
    tech: ['Next.js', 'React', 'Stripe', 'PostgreSQL'],
    image: '🛍️',
    link: '#',
    github: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, team collaboration, and advanced filtering.',
    tech: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    image: '✅',
    link: '#',
    github: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Interactive analytics dashboard with real-time data visualization and custom report generation.',
    tech: ['Next.js', 'Chart.js', 'PostgreSQL', 'WebSocket'],
    image: '📊',
    link: '#',
    github: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'AI Chat Application',
    description: 'AI-powered chat application with natural language processing and contextual responses.',
    tech: ['React', 'OpenAI API', 'Node.js', 'MongoDB'],
    image: '🤖',
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Social Media Platform',
    description: 'Social platform with real-time notifications, image uploads, and community features.',
    tech: ['Next.js', 'GraphQL', 'AWS', 'Redis'],
    image: '👥',
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Mobile Fitness Tracker',
    description: 'Cross-platform fitness tracking app with health metrics and workout plans.',
    tech: ['React Native', 'Firebase', 'TypeScript', 'Expo'],
    image: '💪',
    link: '#',
    github: '#',
  },
]

export function ProjectsSection() {
  return (
    <SectionContainer id="projects">
      <SectionTitle
        title="Featured Projects"
        subtitle="Showcasing my best work and technical expertise"
        highlight="pink"
      />

      {/* Featured Projects Grid */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <GlassCard
              key={project.id}
              neonBorder={project.id % 3 === 0 ? 'cyan' : project.id % 3 === 1 ? 'purple' : 'pink'}
              className="group overflow-hidden flex flex-col h-full"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-background-secondary to-background flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-primary/10 text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 border border-primary/50 rounded-lg transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-secondary/20 hover:bg-secondary/30 border border-secondary/50 rounded-lg transition-colors text-sm"
                  >
                    {/* <Github size={16} /> */}
                    Code
                  </a>
                </div>
              </div>
            </GlassCard>
          ))}
      </div>

      {/* All Projects Grid */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-foreground mb-8">Other Notable Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <GlassCard
                key={project.id}
                neonBorder="cyan"
                className="p-6 group hover:scale-105 transition-transform"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-bold text-foreground">{project.title}</h4>
                  <span className="text-3xl">{project.image}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-primary/10 rounded text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
        </div>
      </div>

      {/* View More Button */}
      <div className="flex justify-center pt-8">
        <GlowButton variant="purple" size="lg">
          View All Projects →
        </GlowButton>
      </div>
    </SectionContainer>
  )
}
