'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/ui/select'
import { Input } from '@/ui/input'
import { DatePickerFormInput } from './date-picker-form-input'
import { createApplicationAction } from '../actions'
import { LoadingSpinner } from '../ui/loading-spinner'
import { statuses } from '@/constants/status'
import { formSchema } from '@/lib/validation-schema'
import toast from 'react-hot-toast'

export function AddNewApplicationForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    defaultValues: {
      company: '',
      contactPerson: '',
      jobTitle: '',
      location: '',
      url: '',
      salary: undefined,
      dueDate: undefined,
      dateApplied: undefined,
      status: undefined,
      note: ''
    }
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      await createApplicationAction(values)
      form.reset()
      toast.success('Application added successfully!')
    } catch (error) {
      console.error(error)
      toast.error('Failed to add application')
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-2 pl-1 pr-4'
      >
        <FormField
          control={form.control}
          name='company'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company*</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='contactPerson'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Person</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='jobTitle'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Title*</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='location'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location*</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='url'
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL*</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='salary'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Salary</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='number'
                  onChange={e =>
                    field.onChange(
                      e.target.value === '' ? undefined : Number(e.target.value)
                    )
                  }
                  value={field.value === undefined ? '' : field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='dueDate'
          render={({ field }) => (
            <FormItem className='!mb-4 !mt-3 flex flex-col'>
              <FormLabel>Due Date</FormLabel>
              <DatePickerFormInput
                value={field.value}
                onChange={field.onChange}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='dateApplied'
          render={({ field }) => (
            <FormItem className='!my-3 flex flex-col'>
              <FormLabel>Date Applied*</FormLabel>
              <DatePickerFormInput
                value={field.value}
                onChange={field.onChange}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='status'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status*</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger className='h-full gap-1 '>
                    <SelectValue placeholder='Select status' />
                  </SelectTrigger>
                  <SelectContent className=''>
                    {statuses.map(status => (
                      <SelectItem
                        key={status.id}
                        value={status.id}
                        className='w-full rounded hover:bg-slate-50'
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
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='note'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Note</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          className='!mt-3 min-w-32'
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? <LoadingSpinner /> : 'Submit'}
        </Button>
      </form>
    </Form>
  )
}
