import toast from 'react-hot-toast'

import { Application } from '@/lib/type'
import { Column, Row, Table } from '@tanstack/react-table'

import { Trash2 } from 'lucide-react'
import { deleteApplicationAction } from '../actions'

type DeleteCellProps = {
  getValue: () => any
  row: Row<Application>
  column: Column<Application>
  table: Table<Application>
  className?: string
}

const DeleteCell = ({ getValue, row, table }: DeleteCellProps) => {
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
    <Trash2
      onClick={handleDelete}
      size={16}
      className='mr-2 text-slate-500 transition-all hover:cursor-pointer hover:text-slate-700'
    />
  )
}

export default DeleteCell
