import { ReactNode } from 'react'

export type TVariant = 'small' | 'medium' | 'large'

export type TColor = 'light' | 'dark'

export interface IButton {
  children: ReactNode
  variant?: TVariant
  color?: TColor
  onClick?(): void
}
