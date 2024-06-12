import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { Application } from '@/lib/type';
import { Column, Row, Table } from '@tanstack/react-table';

import { updateApplicationAction } from '../../actions';
import { InlineInput } from '../../ui/inline-input';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface UrlCellProps<TData> {
  getValue: () => any;
  row: Row<TData>;
  column: Column<TData>;
  table: Table<TData>;
  className?: string;
}

const UrlCell = <TData extends Application>({
  getValue,
  row,
  column,
  table,
  className
}: UrlCellProps<TData>) => {
  const initialValue = getValue()
  const [value, setValue] = useState(initialValue)

  const onBlur = async () => {
    // Update the data state in the table
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

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return (
    <div className='flex items-center'>
      <Link href={value} target='_blank' className='p-1'>
        <ExternalLink className='text-slate-600 dark:text-slate-400 hover:text-slate-700 hover:dark:text-slate-300' size={14}/>
      </Link>
      <InlineInput
        value={value == null ? '' : value}
        onChange={e => setValue(e.target.value)}
        onBlur={onBlur}
        className={className}
      />
    </div>
  )
}

export default UrlCell
