import { object, string } from 'yup'

import { InitialValues } from "./types";

export const initialValues: InitialValues = {
    title: '',
    description: '',
    id: new Date().valueOf()
}

const requiredMessage = 'Обязательное поле'

export const validationSchema = object({
    title: string().required(requiredMessage),
    discription: string().required(requiredMessage)
})