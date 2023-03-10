import { FC } from 'react'

import { IProps } from './types'
import styles from './styles.module.css';

import PostItem from '../post-item';
import InfoBox from '../../../../components/common/info-box';


const PostList: FC<IProps> = ({ posts, whenClickOpenPost, whenClickDeletePost }) => {
  if (!posts.length) {
    return (
      <div className={styles.infoBlock}>
        <InfoBox
          info={'Посты не найдены'}
        />
      </div>
    )
  }

  return (
    <div>
        {
          posts.map(({ id, title, body }) => (
            <div className={styles.post} key={id}>
                <PostItem
                    id={id}
                    title={title}
                    body={body}
                    whenClickOpenPost={whenClickOpenPost}
                    whenClickDeletePost={whenClickDeletePost}
                />
            </div>
          ))
        }
    </div>
  )
}

export default PostList