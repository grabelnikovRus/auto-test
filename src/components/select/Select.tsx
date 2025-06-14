import { Select as SelectHeadless } from '@headlessui/react'
import { SelectProps } from "./types"
import cn from 'classnames'

import s from "./Select.module.css"

export function Select({
  options,
  ...rest
}: SelectProps) {
  return (
    <SelectHeadless {...rest} className={cn(s.root)}>
      {options.map(({ value, title }) => (
        <option key={value} value={value}>{title}</option>
      ))}
    </SelectHeadless>
  )
}