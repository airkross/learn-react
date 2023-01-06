import { FC, useState } from 'react'

import CustomForm from '../../common/custom-form'
import CustomButton from '../../common/custom-button'
import CustomInput from '../../common/custom-input'
import CustomTextarea from '../../common/custom-textarea'
import CustomFormField from '../../common/custom-form/components/custom-form-field'
import { IProps } from './types'
import styles from './styles.module.css'
import { getInitialValue } from './constants'
import { IPostItem } from '~/api/bff/post-bff'

const CreatePostForm: FC<IProps> = ({ whenSubmit }) => {
    const [ formValues, setValues ] = useState<IPostItem>(getInitialValue())

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>  {
        e.preventDefault()
        whenSubmit?.(formValues)
        setValues(getInitialValue())
    }

    return (
        <div className={styles.createPostForm}>
            <CustomForm
                onSubmit={handleSubmit}
                isShownHiddenButton
            >
                <CustomFormField
                    name='title'
                >
                    <CustomInput
                        type={'text'}
                        placeholder={'Введите заголовок'}
                        value={formValues.title}
                        onChange={(e) => setValues({...formValues, title: e.target.value})} 
                    />
                </CustomFormField>
                <CustomFormField
                    name='discription'
                >
                    <CustomTextarea
                        placeholder={'Введите описание'}
                        value={formValues.body}
                        onChange={(e) => setValues({...formValues, body: e.target.value})} 
                    />
                </CustomFormField>
                <CustomButton>
                    Добавить пост
                </CustomButton>
            </CustomForm>
        </div>
    )
}

export default CreatePostForm