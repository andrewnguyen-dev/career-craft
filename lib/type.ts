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

// TODO: Re-check this
export type User = {
  id: string
  email: string
  name?: string | null
  password: string
  createdAt: Date
  updatedAt: Date
  applications: Application[]
}

export type Plan = 'FREE' | 'PRO'

export type Status = {
  id:
    | 'waiting'
    | 'ghosted'
    | 'interviewing'
    | 'job'
    | 'maybeLater'
    | 'rejected'
    | 'noAnswer'
    | 'negotiating'
  label:
    | 'Waiting'
    | 'Ghosted'
    | 'Interviewing'
    | 'Job'
    | 'Maybe later'
    | 'Rejected'
    | 'No answer'
    | 'Negotiating'
  bgColor: string
  textColor: string
}