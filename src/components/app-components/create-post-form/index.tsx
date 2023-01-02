import React, { useState } from 'react'

import CommonForm from '../../common/common-form'
import CustomButton from '../../common/custom-button'
import CustomInput from '../../common/custom-input'
import CustomTextarea from '../../common/custom-textarea'

import { initialValues, validationSchema } from './constants'
import { InitialValues, IProps } from './types'
import styles from './styles.module.css'
import CommonFormField from '../../common/common-form/components/common-form-field'

const CreatePostForm: React.FC<IProps> = ({ whenSubmit }) => {
    const [ formValues, setValues ] = useState<InitialValues>(initialValues)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        whenSubmit?.(formValues)
        setValues(initialValues)
    }

    return (
        <div className={styles.createPostForm}>
            <CommonForm
                onSubmit={handleSubmit}
                isShownHiddenButton
            >
                <CommonFormField
                    name='title'
                >
                    <CustomInput
                        type={'text'}
                        placeholder={'Введите заголовок'}
                        value={formValues.title}
                        onChange={(e) => setValues({...formValues, title: e.target.value})} 
                    />
                </CommonFormField>
                <CommonFormField
                    name='discription'
                >
                    <CustomTextarea
                        placeholder={'Введите описание'}
                        value={formValues.description}
                        onChange={(e) => setValues({...formValues, description: e.target.value})} 
                    />
                </CommonFormField>
                <CustomButton>
                    Добавить пост
                </CustomButton>
            </CommonForm>
        </div>
    )
}

export default CreatePostForm