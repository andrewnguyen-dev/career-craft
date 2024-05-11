import { Status } from '@/lib/type'

export const statuses: Status[] = [
  {
    id: 'waiting',
    label: 'Waiting',
    bgColor: '#cfe8fc', // light blue
    textColor: '#094067' // dark blue
  },
  {
    id: 'ghosted',
    label: 'Ghosted',
    bgColor: '#fbd1a2', // light orange
    textColor: '#5f0f40' // dark purple
  },
  {
    id: 'interviewing',
    label: 'Interviewing',
    bgColor: '#d3e0ea', // light gray-blue
    textColor: '#1d3557' // dark blue
  },
  {
    id: 'job',
    label: 'Job',
    bgColor: '#e2f0cb', // light green
    textColor: '#1b4332' // dark green
  },
  {
    id: 'maybeLater',
    label: 'Maybe later',
    bgColor: '#ffc4eb', // light pink
    textColor: '#9d174d' // dark red
  },
  {
    id: 'rejected',
    label: 'Rejected',
    bgColor: '#ffcfd2', // light red
    textColor: '#d00000' // dark red
  },
  {
    id: 'noAnswer',
    label: 'No answer',
    bgColor: '#fcefe9', // light peach
    textColor: '#dc2f02' // dark orange
  },
  {
    id: 'negotiating',
    label: 'Negotiating',
    bgColor: '#ccfbf1', // light turquoise
    textColor: '#0077b6' // dark cyan
  }
]
