import { FC } from 'react'
import { Variants } from './constants'

import styles from './styles.module.css'
import { IProps } from './types'

const InfoBox: FC<IProps> = ({ info, variants }) => {
  const classes = [styles.infoBox]

  switch(variants) {
    case Variants.DANGER: {
      classes.push(styles[Variants.DANGER])
      break
    }
    case Variants.WARNING: {
      classes.push(styles[Variants.WARNING])
      break
    }
    default: {
      classes.push(styles[Variants.SUCCESS])
    }
  }

  if (Array.isArray(info)) {
    return (
      <div className={classes.join(' ')}>
        {
          info.map((infoItem, index) => (
            <div key={index}>{infoItem}</div>
          ))
        }
      </div>
    )
  }

  return (
    <div className={classes.join(' ')}>{ info }</div>
  )
}

export default InfoBox