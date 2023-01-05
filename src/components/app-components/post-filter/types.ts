import { IProps as ICustomSelect } from '../../common/custom-select/types'

export interface IFilter {
    sort: string
    query: string
}

export interface IProps {
    filter: IFilter
    options: ICustomSelect['options']
    setFilter: (filter: IFilter) => void
}