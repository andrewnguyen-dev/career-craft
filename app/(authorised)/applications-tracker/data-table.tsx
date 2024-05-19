'use client'

import { useState } from 'react';

import { AddNewApplicationBtn } from '@/app/components/add-new-application-btn';
import { Button } from '@/ui/button';
import {
    DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger
} from '@/ui/dropdown-menu';
import { Input } from '@/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/ui/table';
import {
    ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFilteredRowModel,
    getSortedRowModel, SortingState, useReactTable, VisibilityState
} from '@tanstack/react-table';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data
}: DataTableProps<TData, TValue>) {
  const [tableData, setTableData] = useState(data)
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: 'dateApplied',
      desc: true
    },
    {
      id: 'updatedAt',
      desc: true
    }
  ])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    contactPerson: false,
    salary: false,
    updatedAt: false,
    dueDate: false
  })

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility
    },
    meta: {
      updateData: (rowIndex, columnId, value) =>
        setTableData(prev =>
          prev.map((row, index) =>
            index === rowIndex
              ? {
                  ...prev[rowIndex],
                  [columnId]: value
                }
              : row
          )
        )
    }
  })
  // console.log("🚀 ~ tableData:", tableData)

  return (
    <>
      <div className='flex items-center gap-4 py-4'>
        <Input
          placeholder='Filter Jobs...'
          value={
            (table.getColumn('jobTitle')?.getFilterValue() as string) ?? ''
          }
          onChange={event =>
            table.getColumn('jobTitle')?.setFilterValue(event.target.value)
          }
          className='max-w-sm focus-visible:ring-1 focus-visible:ring-gray-300'
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline'>Columns</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            {table
              .getAllColumns()
              .filter(column => column.getCanHide())
              .map(column => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    checked={column.getIsVisible()}
                    onCheckedChange={value => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <AddNewApplicationBtn />
      </div>
      <div className='max-w-full rounded-md'>
        <Table className='border-separate border-spacing-y-2'>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id} className='hover:bg-transparent'>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead
                      key={header.id}
                      className='text-[13px] font-semibold uppercase'
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className='bg-white hover:bg-slate-50 dark:bg-slate-900'
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell
                      key={cell.id}
                      className='p-3 first:rounded-s-xl last:rounded-e-xl'
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
