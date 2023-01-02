import React from 'react';
import CustomButton from '../../common/custom-button';

import styles from './styles.module.css';
import { IProps } from './types';

const PostItem: React.FC<IProps> = ({ id, title, description }) => {
    return (
        <div className={styles.postItem}>
            <div>
                <strong>{id}</strong>
                <div>{title}</div>
                <div>{description}</div>
            </div>
            <CustomButton>
                Удалить
            </CustomButton>
        </div>
    );
};

export default PostItem;