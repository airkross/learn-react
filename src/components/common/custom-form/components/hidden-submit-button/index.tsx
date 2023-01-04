import { FC } from 'react'

import styles from './styles.module.css'

const HiddenSubmitButton: FC = () => {
  return (
    <button
        type={'submit'}
        className={styles.hiddenSubmitButton}
    ></button>
  )
}

export default HiddenSubmitButton