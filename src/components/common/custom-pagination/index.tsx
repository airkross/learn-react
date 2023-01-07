import { FC } from 'react'
import { IProps } from './types'
import styles from './styles.module.css'
import { getPagesArray } from './helpers/get-page-array'

const CustomPagination: FC<IProps> = ({ totalPages, perPages, whenChangePage }) => {

    return (
        <div className={styles.customPagination}>
            {
                getPagesArray(totalPages).map((page) => (
                    <div
                        key={page}
                        className={[styles.page, perPages === page 
                            ? styles.currentPage 
                            : ''
                        ].join(' ')}
                        onClick={() => whenChangePage(page)}
                    >
                        {page}
                    </div>
                ))
            }
        </div>
    )
}

export default CustomPagination