import React from 'react'
import { cn } from '@/lib/utils'

interface NeonTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'cyan' | 'purple' | 'pink'
  children: React.ReactNode
  as?: keyof React.ReactHTML
}

export function NeonText({
  variant = 'cyan',
  children,
  className,
  as: Component = 'span',
  ...props
}: NeonTextProps & { as?: any }) {
  const variantStyles = {
    cyan: 'neon-text-cyan',
    purple: 'neon-text-purple',
    pink: 'neon-text-pink',
  }

  return (
    <Component className={cn(variantStyles[variant], className)} {...props}>
      {children}
    </Component>
  )
}
