import React from 'react'
import { cn } from '@/lib/utils'

interface SectionContainerProps extends React.HTMLAttributes<HTMLSection> {
  children: React.ReactNode
  className?: string
  id?: string
}

export function SectionContainer({
  children,
  className,
  ...props
}: SectionContainerProps) {
  return (
    <section
      className={cn(
        'min-h-screen flex items-center justify-center py-20 px-4 md:px-8 lg:px-12',
        className
      )}
      {...props}
    >
      <div className="w-full max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  )
}
