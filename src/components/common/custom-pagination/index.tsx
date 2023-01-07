import { FC } from 'react'
import { IProps } from './types'
import styles from './styles.module.css'
import { getPagesArray } from './helpers/get-page-array'

const CustomPagination: FC<IProps> = ({ totalPages, currentPage, whenChangePage }) => {

    return (
        <div className={styles.customPagination}>
            {
                getPagesArray(totalPages).map((page) => (
                    <div
                        key={page}
                        className={[styles.page, currentPage === page 
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