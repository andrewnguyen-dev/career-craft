import { z } from "zod";

export const formSchema = z.object({
  company: z.string().min(1, { message: 'Required' }),
  contactPerson: z.string().optional(),
  jobTitle: z.string().min(1, { message: 'Required' }),
  location: z.string().min(1, { message: 'Required' }),
  url: z.string().url(),
  salary: z.number().optional(),
  dueDate: z.date().optional(),
  dateApplied: z.date(),
  status: z.string().min(1, { message: 'Required' }),
  note: z.string().optional()
})
