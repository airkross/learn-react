import { Variants } from "./constants"

export interface IProps {
    info: string | Array<string>
    variants?: `${Variants}`
}