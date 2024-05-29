'use client'

import { ListCollapse, Table2, WandSparkles } from 'lucide-react'

export const sidebarNavItems = [
  {
    title: 'Applications Tracker',
    href: '/applications-tracker',
    icon: () => <Table2 size={20} />
  },
  {
    title: 'Resume Tailoring',
    href: '/resume-tailoring',
    icon: () => <WandSparkles size={20} />
  },
  {
    title: 'Bullet Tailoring',
    href: '/bullet-tailoring',
    icon: () => <ListCollapse size={20} />
  }
]
