import React from 'react'

import styles from './styles.module.css'

const HiddenSubmitButton: React.FC = () => {
  return (
    <button
        type={'submit'}
        className={styles.hiddenSubmitButton}
    ></button>
  )
}

export default HiddenSubmitButton