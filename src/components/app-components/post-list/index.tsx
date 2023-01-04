import { FC } from 'react'

import { IProps } from './types'
import styles from './styles.module.css';

import PostItem from '../post-item';


const PostList: FC<IProps> = ({ posts, whenClickDeletePost }) => {
  return (
    <div className={styles.postList}>
        {
          posts.map(({ id, title, description }) => (
            <div className={styles.post} key={id}>
                <PostItem
                    id={id}
                    title={title}
                    description={description}
                    whenClickDeletePost={whenClickDeletePost}
                />
            </div>
          ))
        }
    </div>
  )
}

export default PostList