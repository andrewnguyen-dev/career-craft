import { Column, Row } from '@tanstack/react-table'
import { Application } from '@/lib/type'

type FormatDateProps<TData> = {
  row: Row<TData>
  column: Column<TData>
}

export const formatDate = <TData extends Application>({
  row,
  column
}: FormatDateProps<TData>) => {
  const date = new Date(row.getValue(column.id))
  const formatted = date.toLocaleDateString()
  return <span>{formatted}</span>
}
