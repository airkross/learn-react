import { FC } from 'react'

import CustomOption from './components/custom-option'
import { IProps } from './types'
import styles from './styles.module.css'

const CustomSelect: FC<IProps> = ({ options, label, value, onChange, ...props }) => {
  return (
    <select
        className={styles.customSelect}
        {...props}
        required
        value={value}
        onChange={onChange}
    >
        <option value={''} disabled hidden>{label}</option>
        {
            options.map((option, index) => (
                <CustomOption 
                    key={index}
                    label={option.label}
                    value={option.value}
                />
            ))
        }
    </select>
  )
}

export default CustomSelect