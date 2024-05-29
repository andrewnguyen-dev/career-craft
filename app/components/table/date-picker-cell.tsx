import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { Application } from '@/lib/type'
import { cn } from '@/lib/utils'
import { Button } from '@/ui/button'
import { Calendar } from '@/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/ui/popover'
import { Column, Row, Table } from '@tanstack/react-table'

import { updateApplicationAction } from '../../actions'

type DatePickerCellProps<TData> = {
  getValue: () => any
  row: Row<TData>
  column: Column<TData>
  table: Table<TData>
  className?: string
}

const DatePickerCell = <TData extends Application>({
  getValue,
  row,
  column,
  table
}: DatePickerCellProps<TData>) => {
  const initialValue = getValue()
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  const onBlur = async () => {
    // Update the data state in the table.
    table.options.meta?.updateData(row.index, column.id, value)

    // Update the job application in the database (only when the value has changed)
    if (value === initialValue) return
    
    const updatePromise = updateApplicationAction(row.original.id, {
      ...row.original,
      [column.id]: value,
      updatedAt: new Date()
    })

    toast.promise(
      updatePromise,
      {
        loading: 'Saving...',
        success: 'Saved!',
        error: 'Failed to save'
      },
      { style: { padding: '6px 18px' } }
    )

    await updatePromise
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'bg-transparent text-slate-700 dark:text-slate-300 hover:bg-transparent w-min justify-start border-none p-0 text-left font-normal',
            !value && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className='mr-2 h-4 w-4' />
          {value ? format(value, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar
          mode='single'
          selected={value == null ? '' : value}
          onSelect={day => setValue(day)}
          onDayBlur={onBlur}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

export default DatePickerCell
