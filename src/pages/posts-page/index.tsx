import { useEffect, useState } from 'react';

import { useSortedAndSerchedPosts } from '../../custom-hooks/use-posts';
import { useFetching } from '../../custom-hooks/use-fetching';
import { services } from '../../api/services';

import PostList from '../../components/app-components/post-list';
import PostFilter from '../../components/app-components/post-filter';
import CreatePostModal from '../../components/app-components/create-post-modal';
import CustomButton from '../../components/common/custom-button';
import { IPostItem, PostListItemsType } from '../../api/bff/post-bff';
import CustomLoader from '../../components/common/custom-loader';
import InfoBox from '../../components/common/info-box';
import { Variants } from '../../components/common/info-box/constants';
import { getPagesCount } from '../../components/common/custom-pagination/helpers/get-pages-count';
import CustomPagination from '../../components/common/custom-pagination';

import { limit, options } from './constants';
import styles from './styles.module.css'



function PostsPage() {
    const [posts, setPosts] = useState<PostListItemsType>([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [shownModal, setIsShownModal] = useState(false)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(0)

    const sortedAndSerchedPosts = useSortedAndSerchedPosts(posts, filter.sort, filter.query)
    const [fetchPosts, isPostsLoading, responseError] = useFetching(async () => {
        const response = await services['postsSeviceBff'].getPosts({
            _limit: limit,
            _page: currentPage,
        })
        const { data: posts } = response
        const totalCount = (response.headers as { 'x-total-count'?: string })['x-total-count']

        if (totalCount) {
            setTotalPages(getPagesCount(Number(totalCount), limit))
        }

        setPosts(posts)
    })

    const handleCreatePost = (post: IPostItem) => {
        setIsShownModal(false)
        setPosts([...posts, post])
    }

    const handleClickDeletePost = (postId: IPostItem['id']) => {
        setPosts(posts.filter((post) => post.id !== postId))
    }

    const handleChangePage = (page: number) => {
        setCurrentPage(page)
    }

    useEffect(() => {
        fetchPosts()
    }, [currentPage])

    return (
        <div className={styles.container}>
            <div className={styles.createPostButton}>
                <CustomButton onClick={() => setIsShownModal(true)}>
                    Создать пост
                </CustomButton>
            </div>
            <CreatePostModal
                isShownModal={shownModal}
                setIsShownModal={setIsShownModal}
                whenCreatePost={handleCreatePost}
            />
            <PostFilter
                filter={filter}
                setFilter={setFilter}
                options={options}
            />
            {
                responseError && (
                    <div className={styles.errorBlock}>
                        <InfoBox info={['Произошла ошибка:', `${responseError}`]} variants={Variants.DANGER} />
                    </div>
                )
            }
            {
                isPostsLoading
                    ? <div className={styles.loader}><CustomLoader /></div>
                    : <PostList posts={sortedAndSerchedPosts} whenClickDeletePost={handleClickDeletePost} />
            }
            <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                whenChangePage={handleChangePage}
            />
        </div>
    );
}

export default PostsPage;
