import React from 'react'

import { IProps } from './types'
import styles from './styles.module.css';

import PostItem from '../post-item';


const PostList: React.FC<IProps> = ({ posts }) => {
  return (
    <div className={styles.postList}>
        {
          posts.map(({ id, title, description }) => (
            <div className={styles.post} key={id}>
                <PostItem 
                    id={id}
                    title={title}
                    description={description}
                />
            </div>
          ))
        }
    </div>
  )
}

export default PostList