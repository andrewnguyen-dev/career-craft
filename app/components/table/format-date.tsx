import { Column, Row } from "@tanstack/react-table"
import { Application } from "@/lib/type"

type FormatDateProps = {
  row: Row<Application>,
  column: Column<Application>
}

export const formatDate = ({ row, column }: FormatDateProps) => {
  const date = new Date(row.getValue(column.id))
  const formatted = date.toLocaleDateString()
  return <span>{formatted}</span>
}
