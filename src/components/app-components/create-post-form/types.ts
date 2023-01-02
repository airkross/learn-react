import { IProps as InitialValues } from '@components/app-components/post-item/types'

export { type InitialValues }

export interface IProps {
    whenSubmit?: (e: InitialValues) => void
}