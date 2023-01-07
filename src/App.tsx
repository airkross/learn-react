import React, { useEffect, useState } from 'react';

import PostList from './components/app-components/post-list';
import { IProps as ICustomSelect } from './components/common/custom-select/types'
import PostFilter from './components/app-components/post-filter';
import CreatePostModal from './components/app-components/create-post-modal';
import CustomButton from './components/common/custom-button';
import styles from './styles.module.css'
import { useSortedAndSerchedPosts } from './custom-hooks/use-posts';
import { services } from './api/services';
import { IPostItem, PostListItemsType } from './api/bff/post-bff';
import CustomLoader from './components/common/custom-loader';
import { useFetching } from './custom-hooks/use-fetching';
import InfoBox from './components/common/info-box';
import { Variants } from './components/common/info-box/constants';
import { getPagesCount } from './components/common/custom-pagination/helpers/get-pages-count';
import CustomPagination from './components/common/custom-pagination';
import { limit } from './constants';

export const enum optionValues {
  EMPTY = '',
  TITLE = 'title',
  ID = 'id',
}

const options: ICustomSelect['options'] = [
  {
    label: 'По умолчанию',
    value: optionValues.EMPTY,
  },
  {
    label: 'По названию',
    value: optionValues.TITLE,
  },
  {
    label: 'По ID',
    value: optionValues.ID
  }
]

function App() {
  const [ posts, setPosts ] = useState<PostListItemsType>([])
  const [ filter, setFilter ] = useState({ sort: '', query: '' })
  const [ shownModal, setIsShownModal ] = useState(false)
  const [ perPage, setPerPage ] = useState<number>(1)
  const [ totalPages, setTotalPages ] = useState<number>(0)

  const sortedAndSerchedPosts = useSortedAndSerchedPosts(posts, filter.sort, filter.query)
  const [ fetchPosts, isPostsLoading, responseError ] = useFetching(async () => {
    const response = await services['postsSeviceBff'].getPosts({
      _limit: limit,
      _page: perPage,
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
    setPerPage(page)
  }

  useEffect(() => {
    fetchPosts()
  }, [perPage])

  return (
    <React.StrictMode>
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
                <InfoBox info={['Произошла ошибка:', `${responseError}`]} variants={Variants.DANGER}/>
              </div>
            )
          }
          {
            isPostsLoading
              ? <div className={styles.loader}><CustomLoader /></div>
              : <PostList posts={sortedAndSerchedPosts} whenClickDeletePost={handleClickDeletePost} />
          }
          <CustomPagination 
            perPages={perPage}
            totalPages={totalPages}
            whenChangePage={handleChangePage}
          />
      </div>
    </React.StrictMode>
  );
}

export default App;
