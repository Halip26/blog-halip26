import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <div className="max-w-3xl px-2 mx-auto  selection:text-gray-100 selection:bg-primary-700 dark:selection:text-gray-200 dark:selection:bg-green-600 sm:px-6 xl:max-w-5xl xl:px-0">
      {children}
    </div>
  )
}
