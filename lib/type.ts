export type Application = {
  id: string
  company: string
  contactPerson?: string | null
  jobTitle: string
  location: string
  url: string
  salary?: number | null
  dueDate?: Date | null
  dateApplied: Date
  status: string
  note?: string | null
  createdAt: Date
  updatedAt: Date
  userId: string
}

export type ApplicationCreateInput = Omit<
  Application,
  'id' | 'createdAt' | 'updatedAt' | 'userId'
>

export type User = {
  id: string
  email: string
  name?: string | null
  password: string
  createdAt: Date
  updatedAt: Date
  applications: Application[]
}
