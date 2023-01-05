import { Option } from './components/custom-option/types'

export interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: Array<Option>
    label: string
}