'use client'

import { formatDate } from '@/app/components/format-date'
import { Application } from '@/lib/type'
import { ColumnDef } from '@tanstack/react-table'

import SortableHeader from '@/components/sortable-header'
import EditableCell from '../components/editable-cell'
import StatusCell from '../components/status-cell'

export const columns: ColumnDef<Application>[] = [
  {
    accessorKey: 'company',
    header: ({ column }) => <SortableHeader column={column} label='Company' />,
    cell: EditableCell
  },
  {
    accessorKey: 'contactPerson',
    header: 'Contact Person',
    cell: EditableCell
  },
  {
    accessorKey: 'jobTitle',
    header: 'Job Title',
    cell: EditableCell
  },
  {
    accessorKey: 'location',
    header: 'Location',
    cell: EditableCell
  },
  {
    accessorKey: 'url',
    header: 'URL',
    cell: EditableCell
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
    header: ({ column }) => <SortableHeader column={column} label='Status' />,
    cell: StatusCell
  },
  {
    accessorKey: 'note',
    header: 'Note'
  },
  {
    accessorKey: 'updatedAt',
    header: ({ column }) => (
      <SortableHeader column={column} label='Updated At' />
    ),
    cell: formatDate
  }
]
