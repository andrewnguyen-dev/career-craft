import { Button } from '@/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/ui/dialog'
import { AddNewApplicationForm } from './add-new-application-form'
import { Plus } from 'lucide-react'

export function AddNewApplicationBtn() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-20'>Add</Button>
      </DialogTrigger>
      <DialogContent className='max-h-[75vh] sm:max-w-lg'>
        <DialogHeader>
          <DialogTitle>Add new Job Application</DialogTitle>
          <DialogDescription>
            Fill in the form below to add a new job application.
          </DialogDescription>
        </DialogHeader>
        <div className='max-h-[60vh] overflow-y-auto'>
          <AddNewApplicationForm />
        </div>
      </DialogContent>
    </Dialog>
  )
}
