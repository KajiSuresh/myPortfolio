import React from 'react'
import { cn } from '@/lib/utils'
import { NeonText } from './NeonText'

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  highlight?: 'cyan' | 'purple' | 'pink'
}

export function SectionTitle({
  title,
  subtitle,
  highlight = 'cyan',
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div className={cn('text-center mb-16', className)} {...props}>
      <NeonText variant={highlight} as="h2" className="text-4xl md:text-5xl font-bold mb-4">
        {title}
      </NeonText>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}
