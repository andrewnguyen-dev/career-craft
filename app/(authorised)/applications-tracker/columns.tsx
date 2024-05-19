'use client'

import { formatDate } from '@/app/components/format-date'
import { Application } from '@/lib/type'
import { ColumnDef } from '@tanstack/react-table'

import SortableHeader from '@/components/sortable-header'
import EditableCell from '@/components/editable-cell'
import StatusCell from '@/components/status-cell'
import DatePickerCell from '@/app/components/date-picker-cell'

export const columns: ColumnDef<Application>[] = [
  {
    accessorKey: 'jobTitle',
    header: 'Job Title',
    cell: (cell) => <EditableCell {...cell} className='font-medium text-slate-900' />
  },
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
    accessorKey: 'location',
    header: 'Location',
    cell: (cell) => <EditableCell {...cell} className='max-w-28' />
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
    cell: DatePickerCell
  },
  {
    accessorKey: 'status',
    header: ({ column }) => <SortableHeader column={column} label='Status' />,
    cell: StatusCell
  },
  {
    accessorKey: 'note',
    header: 'Note',
    cell: (cell) => <EditableCell {...cell} className='max-w-28' />
  },
  {
    accessorKey: 'updatedAt',
    header: ({ column }) => (
      <SortableHeader column={column} label='Updated At' />
    ),
    cell: formatDate
  }
]
