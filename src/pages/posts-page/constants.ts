import { IProps as ICustomSelect } from '@components/common/custom-select/types'

export const limit = 10

export const enum optionValues {
    EMPTY = '',
    TITLE = 'title',
    ID = 'id',
}

export const options: ICustomSelect['options'] = [
    {
        label: 'По умолчанию',
        value: optionValues.EMPTY,
    },
    {
        label: 'По названию',
        value: optionValues.TITLE,
    },
    {
        label: 'По ID',
        value: optionValues.ID
    }
]