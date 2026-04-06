import React from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  neonBorder?: 'cyan' | 'purple' | 'pink' | 'none'
}

export function GlassCard({
  children,
  className,
  neonBorder = 'cyan',
  ...props
}: GlassCardProps) {
  const borderStyles = {
    cyan: 'border-cyan-500/30 shadow-[0_0_20px_rgba(0,212,255,0.2)]',
    purple: 'border-purple-500/30 shadow-[0_0_20px_rgba(181,0,255,0.2)]',
    pink: 'border-pink-500/30 shadow-[0_0_20px_rgba(255,0,110,0.2)]',
    none: 'border-blue-500/10',
  }

  return (
    <div
      className={cn(
        'glass rounded-xl border backdrop-blur-md transition-all duration-300 hover:shadow-lg',
        borderStyles[neonBorder],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
