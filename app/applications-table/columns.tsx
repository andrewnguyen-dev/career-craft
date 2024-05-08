'use client'

import { formatDate } from '@/app/components/format-date'
import { Application } from '@/lib/type'
import { ColumnDef } from '@tanstack/react-table'

import SortableHeader from '@/components/sortable-header'

export const columns: ColumnDef<Application>[] = [
  {
    accessorKey: 'company',
    header: ({ column }) => <SortableHeader column={column} label='Company' />,
  },
  {
    accessorKey: 'contactPerson',
    header: 'Contact Person',
  },
  {
    accessorKey: 'jobTitle',
    header: 'Job Title',
    cell: ({ row }) => <span className='font-medium'>{row.getValue("jobTitle")}</span>
  },
  {
    accessorKey: 'location',
    header: 'Location'
  },
  {
    accessorKey: 'url',
    header: 'URL'
  },
  {
    accessorKey: 'salary',
    header: 'Salary'
  },
  {
    accessorKey: 'dueDate',
    header: ({ column }) => <SortableHeader column={column} label='Due Date' />,
    cell: formatDate
  },
  {
    accessorKey: 'dateApplied',
    header: ({ column }) => (
      <SortableHeader column={column} label='Date Applied' />
    ),
    cell: formatDate
  },
  {
    accessorKey: 'status',
    header: ({ column }) => <SortableHeader column={column} label='Status' />
  },
  {
    accessorKey: 'note',
    header: 'Note'
  },
  {
    accessorKey: 'updatedAt',
    header: 'Updated At',
    cell: formatDate
  },
]
