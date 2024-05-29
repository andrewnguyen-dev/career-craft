import { Trash2 } from 'lucide-react'
import toast from 'react-hot-toast'

import { Application } from '@/lib/type'
import { Row, Table } from '@tanstack/react-table'

import { deleteApplicationAction } from '../../actions'
import { Button } from '../../ui/button'

type DeleteCellProps<TData> = {
  row: Row<TData>
  table: Table<TData>
}

const DeleteCell = <TData extends Application>({
  row,
  table
}: DeleteCellProps<TData>) => {
  const handleDelete = async () => {
    // Update the data state in the table
    table.options.meta?.deleteRow(row.index)

    const deletePromise = deleteApplicationAction(row.original.id)

    toast.promise(
      deletePromise,
      {
        loading: 'Deleting...',
        success: 'Deleted!',
        error: 'Failed to delete'
      },
      { style: { padding: '6px 18px' } }
    )

    await deletePromise
  }

  return (
    <Button variant='ghost' size='sm'>
      <Trash2
        onClick={handleDelete}
        size={16}
        className='text-slate-500 dark:text-slate-400'
      />
    </Button>
  )
}

export default DeleteCell
