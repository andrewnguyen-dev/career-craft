'use client'

import DatePickerCell from '@/components/table/date-picker-cell';
import DeleteCell from '@/components/table/delete-cell';
import { formatDate } from '@/components/table/format-date';
import EditableCell from '@/components/table/editable-cell';
import SortableHeader from '@/components/table/sortable-header';
import StatusCell from '@/components/table/status-cell';
import { Application } from '@/lib/type';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Application>[] = [
  {
    accessorKey: 'jobTitle',
    header: 'Job Title',
    cell: (cell) => <EditableCell {...cell} className='font-medium text-slate-900 dark:text-slate-100' />
  },
  {
    accessorKey: 'company',
    header: ({ column }) => <SortableHeader column={column} label='Company' />,
    cell: EditableCell
  },
  {
    accessorKey: 'contactPerson',
    header: 'Contact Person',
    cell: (cell) => <EditableCell {...cell} className='max-w-40' />
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
    header: 'Salary',
    cell: (cell) => <EditableCell {...cell} className='max-w-20' />
  },
  {
    accessorKey: 'dueDate',
    header: ({ column }) => <SortableHeader column={column} label='Due Date' />,
    cell: DatePickerCell
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
  },
  {
    accessorKey: 'delete',
    header: '',
    cell: DeleteCell
  }
]
