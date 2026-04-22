import { JSX } from "react"

export interface NavItem {
  label: string
  href: string
  active?: boolean
}

export interface ServiceCard {
  id: string
  icon: string
  title: string
  description: string
  accentColor?: 'primary' | 'secondary'
  imageUrl?: string
  colSpan?: number
}

export interface CoveragePoint {
  number: string
  title: string
  description: string
  active?: boolean
}

export type ServiceIconComponent = (props: { variant?: 'primary' | 'secondary' | 'muted' | 'inverse' | 'default'; size?: number }) => JSX.Element

export interface ReliabilityFeature {
  icon: ServiceIconComponent
  title: string
  description: string
  accentColor: 'primary' | 'secondary'
}
