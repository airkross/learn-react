import { FC, useState } from 'react'

import { Variants } from '../../../../components/common/info-box/constants'
import CustomForm from '../../../../components/common/custom-form'
import CustomFormField from '../../../../components/common/custom-form/components/custom-form-field'
import CustomInput from '../../../../components/common/custom-input'
import InfoBox from '../../../../components/common/info-box'
import CustomButton from '../../../../components/common/custom-button'
import { getInitialValue } from './constants'
import { IProps, IInitialValues } from './types'
import styles from './styles.module.css'

const LoginForm: FC<IProps> = ({ error = '', isLoading= false, whenSubmit }) => {
    const [formValues, setValues] = useState<IInitialValues>(getInitialValue())

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        whenSubmit?.(formValues)
        setValues(getInitialValue())
    }

    return (
        <div className={styles.loginForm}>
            <h2 className={styles.loginTitle}>Авторизация:</h2>
            <CustomForm
                onSubmit={handleSubmit}
                isShownHiddenButton
            >
                <CustomFormField
                    name={'login'}
                >
                    <CustomInput
                        type={'text'}
                        placeholder={'Введите логин'}
                        value={formValues.login}
                        disabled={isLoading}
                        onChange={(e) => setValues({ ...formValues, login: e.target.value })}
                    />
                </CustomFormField>
                <CustomFormField
                    name={'password'}
                >
                    <CustomInput
                        type={'password'}
                        placeholder={'Введите пароль'}
                        value={formValues.password}
                        disabled={isLoading}
                        onChange={(e) => setValues({ ...formValues, password: e.target.value })}
                    />
                </CustomFormField>
                {
                    error && (
                        <div className={styles.errorInfo}>
                            <InfoBox info={error} variants={Variants.DANGER} />
                        </div>
                    )
                }
                <CustomButton disabled={isLoading}>
                    Войти
                </CustomButton>
            </CustomForm>
        </div>
    )
}

export default LoginForm