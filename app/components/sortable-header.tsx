import { Application } from "@/lib/type"
import { Column } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "../ui/button"

type SortableHeaderProps = {
  column: Column<Application>
  label: string
}

const SortableHeader = ({ column, label }: SortableHeaderProps) => {
  return (
    <Button
      variant="sortableHeader"
      className="p-0"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {label}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
};

export default SortableHeader