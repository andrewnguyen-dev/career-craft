import { Row } from "@tanstack/react-table"
import { Application } from "../../lib/type"

export const formatDate = ({ row }: {row: Row<Application>}) => {
  const date = new Date(row.getValue('dateApplied'))
  const formatted = date.toLocaleDateString()
  return <span>{formatted}</span>
}
