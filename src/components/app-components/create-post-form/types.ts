import { InferType } from '@helpers/validator'

import { IProps as InitialValues } from '../post-item/types'

export { type InitialValues }

export interface IProps {
    whenSubmit?: (e: InitialValues) => void
}