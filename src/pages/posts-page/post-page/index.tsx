import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { IPostItem, PostCommentsItemsType } from '../../../api/bff/post-bff'
import CustomLoader from '../../../components/common/custom-loader'
import { services } from '../../../api/services'
import { useFetching } from '../../../custom-hooks/use-fetching'
import styles from './styles.module.css'
import InfoBox from '../../../components/common/info-box'
import { Variants } from '../../../components/common/info-box/constants'

const PostPage: FC = () => {
    const [post, setPost] = useState<IPostItem>()
    const [comments, setComments] = useState<PostCommentsItemsType>([])

    const { id } = useParams()
    const [fetchPost, isPostLoading, postError] = useFetching(async () => {
        const { data: post } = await services['postsSeviceBff'].getPost(id || '')
        setPost(post)
    })

    const [fetchComments, isCommentsLoading, comentsError] = useFetching(async () => {
        const { data: comments } = await services['postsSeviceBff'].getComments({
            postId: id || ''
        })
        setComments(comments)
    })

    useEffect(() => {
        fetchPost()
        fetchComments()
    }, [])

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Пост:</h2>
            {
                isPostLoading
                    ? <div className={styles.loader}><CustomLoader /></div>
                    : (
                        <div className={styles.post}>
                            <strong>{post?.id}</strong>
                            <div>{post?.title}</div>
                            <div>{post?.body}</div>
                        </div>
                    )
            }
            {/**
             * @todo порефачить на всплыывающий алерт
             *  */}
            {
                postError && <InfoBox info={postError} variants={Variants.DANGER} />
            }
            <br />
            <h2 className={styles.title}>Комментарии:</h2>
            {
                isCommentsLoading
                    ? <div className={styles.loader}><CustomLoader /></div>
                    : comments.length
                        ? comments?.map(({ id, name, email, body }) => (
                            <div key={id} className={styles.comment}>
                                {name}
                                <span> ({email})</span>
                                <div>{body}</div>
                            </div>
                        ))
                        : !comentsError && <InfoBox info={'Нет комментариев'} variants={Variants.SUCCESS} />

            }
            {
                comentsError && <InfoBox info={comentsError} variants={Variants.DANGER} />
            }
        </div>
    )
}

export default PostPage