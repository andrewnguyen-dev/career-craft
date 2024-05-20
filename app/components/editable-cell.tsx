import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { Application } from '@/lib/type';
import { Column, Row, Table } from '@tanstack/react-table';

import { updateApplicationAction } from '../actions';
import { InlineInput } from '../ui/inline-input';

type EditableCellProps = {
  getValue: () => any
  row: Row<Application>
  column: Column<Application>
  table: Table<Application>
  className?: string
}

const EditableCell = ({
  getValue,
  row,
  column,
  table,
  className
}: EditableCellProps) => {
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
    <InlineInput
      value={value == null ? '' : value}
      onChange={e => setValue(e.target.value)}
      onBlur={onBlur}
      className={className}
    />
  )
}

export default EditableCell
