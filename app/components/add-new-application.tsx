import { Button } from "@/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog"
import { AddNewApplicationForm } from "./add-new-application-form"

export function AddNewApplication() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* TODO: Add Plus icon */}
        <Button className="w-24">Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[75vh]">
        <DialogHeader>
          <DialogTitle>Add new Job Application</DialogTitle>
          <DialogDescription>
            Fill in the form below to add a new job application.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-y-auto">
          <AddNewApplicationForm />
        </div>
      </DialogContent>
    </Dialog>
  )
}
