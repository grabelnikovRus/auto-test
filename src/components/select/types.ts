import { SelectProps as SelectHeadlessProps } from "@headlessui/react"

export interface SelectProps extends SelectHeadlessProps {
  options: Array<{ value: string; title: string}>
}
