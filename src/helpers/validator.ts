import { setLocale, string, addMethod } from "yup";

setLocale({
    mixed: {
        required: 'Поле обязательно для заполнения',
    },
    string: {
        min: 'Минимальная длина - ${min}',
        max: 'Максимальная длина - ${max}',
    },
    array: {
        min: 'Минимальное количество элементов - ${min}',
    },
    number: {
        positive: 'Должно быть положительным числом',
        min: 'Должно быть больше или равно ${min}',
        max: 'Должно быть меньше или равно ${max}',
        integer: 'Должно быть целым числом',
    },
})

addMethod(string, 'minOrEmpry', function(min: number) {
    return this.test('minOrEmpty', `Минимум ${min} символа или ничего`, function (value) {
        const str = (value || '')
        return !(str.length > 0 && str.length < min)
     })
})

declare module 'yup' {
    interface StringSchema {
       minOrEmpty(param: number): this
    }
 }
 
 export { string, type ValidationError, type InferType, array, object, date, number, boolean, mixed } from 'yup'