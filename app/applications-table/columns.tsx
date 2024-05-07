"use client"

import { Application } from "@/lib/type"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Application>[] = [
  {
    accessorKey: 'company',
    header: 'Company',
  },
  {
    accessorKey: 'contactPerson',
    header: 'Contact Person',
  },
  {
    accessorKey: 'jobTitle',
    header: 'Job Title',
  },
  {
    accessorKey: 'location',
    header: 'Location',
  },
  {
    accessorKey: 'url',
    header: 'URL',
  },
  {
    accessorKey: 'salary',
    header: 'Salary',
  },
  {
    accessorKey: 'dueDate',
    header: 'Due Date',
  },
  {
    accessorKey: 'dateApplied',
    header: 'Date Applied',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'note',
    header: 'Note',
  },
  {
    accessorKey: 'createdAt',
    header: 'Created At',
  },
  {
    accessorKey: 'updatedAt',
    header: 'Updated At',
  },
  {
    accessorKey: 'userId',
    header: 'User ID',
  },
]
