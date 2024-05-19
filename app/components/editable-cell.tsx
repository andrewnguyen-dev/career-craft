import { useEffect, useState } from 'react'
import { InlineInput } from '../ui/inline-input'
import { updateApplicationAction } from '../actions'
import { Application } from '@/lib/type'
import { Column, Getter, Row, Table } from '@tanstack/react-table'

type EditableCellProps = {
  getValue: () => any
  row: Row<Application>
  column: Column<Application>
  table: Table<Application>
  className?: string
}

const EditableCell = ({ getValue, row, column, table, className }: EditableCellProps) => {
  const initialValue = getValue()
  const [value, setValue] = useState(initialValue)

  const onBlur = async () => {
    // Update the data state in the table.
    table.options.meta?.updateData(row.index, column.id, value)

    // Update the job application in the database.
    await updateApplicationAction(row.original.id, {
      ...row.original,
      [column.id]: value,
      updatedAt: new Date()
    })
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
