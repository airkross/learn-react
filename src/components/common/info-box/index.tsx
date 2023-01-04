import { FC } from 'react'

import styles from './styles.module.css'
import { IProps } from './types'

const InfoBox: FC<IProps> = ({ info }) => {
  if (Array.isArray(info)) {
    return (
      <div className={styles.infoBox}>
        {
          info.map((infoItem) => (
            <div>{infoItem}</div>
          ))
        }
      </div>
    )
  }

  return (
    <div className={styles.infoBox}>{ info }</div>
  )
}

export default InfoBox