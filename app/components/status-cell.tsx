import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/ui/select'
import { statuses } from '@/constants/status'
import { updateApplicationAction } from '../actions'

const StatusCell = ({ getValue, row, column }) => {
  const initialValue = getValue()

  const handleChange = async (value: string) => {
    await updateApplicationAction(row.original.id, {
      ...row.original,
      [column.id]: value,
      updatedAt: new Date()
    })
  }

  return (
    <Select defaultValue={initialValue} onValueChange={handleChange}>
      <SelectTrigger className='h-full gap-1 border-none bg-transparent px-0 py-0 focus:ring-transparent focus:ring-0'>
        <SelectValue />
      </SelectTrigger>
      <SelectContent className=''>
        {statuses.map(status => (
          <SelectItem
            key={status.id}
            value={status.id}
            className='w-full rounded hover:bg-slate-50 focus:ring-1 focus:ring-gray-50'
          >
            <div
              style={{
                backgroundColor: status.bgColor,
                color: status.textColor
              }}
              className='rounded-2xl px-3 py-0.5'
            >
              {status.label}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default StatusCell
