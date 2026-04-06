import React from 'react'
import { cn } from '@/lib/utils'

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'cyan' | 'purple' | 'pink'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function GlowButton({
  variant = 'cyan',
  size = 'md',
  className,
  children,
  ...props
}: GlowButtonProps) {
  const variantStyles = {
    cyan: 'bg-transparent border border-cyan-400 text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200 glow-cyan',
    purple: 'bg-transparent border border-purple-400 text-purple-300 hover:bg-purple-500/10 hover:text-purple-200 glow-purple',
    pink: 'bg-transparent border border-pink-400 text-pink-300 hover:bg-pink-500/10 hover:text-pink-200 glow-pink',
  }

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      className={cn(
        'font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
