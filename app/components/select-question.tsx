import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/ui/select'

const SelectQuestion = () => {
  return (
    <Select>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Select question' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='0'>Question 1</SelectItem>
              <SelectItem value='1'>Question 2</SelectItem>
              <SelectItem value='2'>Question 3</SelectItem>
              <SelectItem value='3'>Question 4</SelectItem>
              <SelectItem value='4'>Question 5</SelectItem>
              <SelectItem value='5'>Question 6</SelectItem>
              <SelectItem value='6'>Question 7</SelectItem>
              <SelectItem value='7'>Question 8</SelectItem>
              <SelectItem value='8'>Question 9</SelectItem>
              <SelectItem value='9'>Question 10</SelectItem>
            </SelectContent>
          </Select>
  )
}

export default SelectQuestion