import { FC } from 'react'

import CustomInput from '../../../../components/common/custom-input'
import CustomSelect from '../../../../components/common/custom-select'
import { IProps } from './types'
import styles from './styles.module.css'

const PostFilter: FC<IProps> = ({ filter, setFilter, options }) => {
  return (
    <div className={styles.postFilter}>
        <div className={styles.control}>
            <CustomInput
                value={filter.query}
                onChange={(e) => setFilter({ ...filter, query: e.target.value })}
                placeholder={'Поиск...'}
            />
        </div>
        <CustomSelect
            label={'Cортировать по:'}
            options={options}
            value={filter.sort}
            onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
          />
    </div>
  )
}

export default PostFilter