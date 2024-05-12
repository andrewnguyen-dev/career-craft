import { Application } from '@/lib/type'
import { Column } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'
import { Button } from '../ui/button'

type SortableHeaderProps = {
  column: Column<Application>
  label: string
}

const SortableHeader = ({ column, label }: SortableHeaderProps) => {
  return (
    <Button
      variant='sortableHeader'
      className='p-0 text-[13px] font-semibold uppercase'
      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    >
      {label}
      <ArrowUpDown className='ml-2 h-3.5 w-3.5' />
    </Button>
  )
}

export default SortableHeader
