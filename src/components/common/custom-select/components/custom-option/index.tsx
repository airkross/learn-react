import { FC } from 'react'
import { Option } from './types'

const CustomOption: FC<Option> = ({ label, value, ...props }) => {
  return (
    <option {...props} value={value}>{label}</option>
  )
}

export default CustomOption