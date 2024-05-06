"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Application = {
  id: string;
  company: string;
  contactPerson?: string | null;
  jobTitle: string;
  location: string;
  url: string;
  salary?: number | null;
  dueDate?: Date | null;
  dateApplied: Date;
  status: string;
  note?: string | null;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export type User = {
  id: string;
  email: string;
  name?: string | null;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  applications: Application[];
};


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
