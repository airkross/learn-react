import React, { useState } from 'react'
import { IPostItem } from '~/App'

import CommonForm from '../../common/common-form'
import CustomButton from '../../common/custom-button'
import CustomInput from '../../common/custom-input'
import CustomTextarea from '../../common/custom-textarea'
import CommonFormField from '../../common/common-form/components/common-form-field'
import { IProps } from './types'
import styles from './styles.module.css'

const CreatePostForm: React.FC<IProps> = ({ whenSubmit }) => {
    const [ formValues, setValues ] = useState<IPostItem>(getInitialValue())

    function getInitialValue(): IPostItem {
        return {
            title: '',
            description: '',
            id: new Date().valueOf()
        }
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        whenSubmit?.(formValues)
        setValues(getInitialValue())
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