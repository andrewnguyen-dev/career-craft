import toast from 'react-hot-toast';

import { statuses } from '@/constants/status';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/select';

import { updateApplicationAction } from '../../actions';

type StatusCellProps = {
  getValue: () => any
  row: any
  column: any
}

const StatusCell = ({ getValue, row, column }: StatusCellProps) => {
  const initialValue = getValue()

  const handleChange = async (value: string) => {
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
    <Select defaultValue={initialValue} onValueChange={handleChange}>
      <SelectTrigger className='bg-transparent h-full min-w-[7.75rem] justify-normal gap-1 border-none px-0 py-0 focus:ring-1 focus:ring-ring/30'>
        <SelectValue />
      </SelectTrigger>
      <SelectContent className=''>
        {statuses.map(status => (
          <SelectItem
            key={status.id}
            value={status.id}
            className='hover:bg-slate-50 focus:ring-gray-50 w-full rounded focus:ring-1'
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
