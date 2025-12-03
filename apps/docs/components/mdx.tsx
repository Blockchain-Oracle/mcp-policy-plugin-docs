import { ReactNode } from 'react'

export function Cards({ children }: { children: ReactNode }) {
  return (
    <div className="nx-mt-4 nx-grid nx-grid-cols-1 nx-gap-4 sm:nx-grid-cols-2">
      {children}
    </div>
  )
}

export function Card({
  title,
  href,
  description,
}: {
  title: string
  href: string
  description: string
}) {
  return (
    <a
      href={href}
      className="nx-block nx-rounded-lg nx-border nx-border-gray-200 nx-p-6 nx-transition-colors hover:nx-border-gray-300 dark:nx-border-gray-800 dark:hover:nx-border-gray-700"
    >
      <h3 className="nx-text-lg nx-font-semibold nx-mb-2">{title}</h3>
      <p className="nx-text-gray-600 dark:nx-text-gray-400">{description}</p>
    </a>
  )
}

export function Steps({ children }: { children: ReactNode }) {
  return <div className="nextra-steps nx-ml-4 nx-mb-12 nx-border-l nx-border-gray-200 nx-pl-6 dark:nx-border-neutral-800 [counter-reset:step]">{children}</div>
}
