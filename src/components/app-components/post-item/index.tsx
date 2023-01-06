import { FC } from 'react';
import CustomButton from '../../common/custom-button';

import styles from './styles.module.css';
import { IProps } from './types';

const PostItem: FC<IProps> = ({ id, title, body, whenClickDeletePost }) => {
    return (
        <div className={styles.postItem}>
            <div>
                <strong>{id}</strong>
                <div>{title}</div>
                <div>{body}</div>
            </div>
            <CustomButton onClick={() => whenClickDeletePost(id)}>
                Удалить
            </CustomButton>
        </div>
    );
};

export default PostItem;