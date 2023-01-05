import React, { useState } from 'react';

import PostList from './components/app-components/post-list';
import { IProps as ICustomSelect } from './components/common/custom-select/types'
import PostFilter from './components/app-components/post-filter';
import CreatePostModal from './components/app-components/create-post-modal';
import CustomButton from './components/common/custom-button';
import styles from './styles.module.css'
import { useSortedAndSerchedPosts } from './custom-hooks/use-posts';

// Fake Data (Mock Data)
export interface IPostItem {
  id: number
  title: string
  description: string
}

export interface IPostListItems {
  posts: Array<IPostItem>
}

const responseData: IPostListItems = {
  posts: [
    {
      id: 1,
      title: 'аа Учу React',
      description: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.',
    },
    {
      id: 3,
      title: 'яя Учу React',
      description: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.',
    },
  ]
}

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
  const [ posts, setPosts ] = useState<IPostListItems['posts']>(responseData.posts)
  const [ filter, setFilter ] = useState({ sort: '', query: '' })
  const [ shownModal, setIsShownModal ] = useState(false)
  const sortedAndSerchedPosts = useSortedAndSerchedPosts(posts, filter.sort, filter.query)

  const handleCreatePost = (post: IPostItem) => {
    setIsShownModal(false)
    setPosts([...posts, post])
  }

  const handleClickDeletePost = (postId: IPostItem['id']) => {
    setPosts(posts.filter((post) => post.id !== postId))
  }

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
          <PostList 
            posts={sortedAndSerchedPosts}
            whenClickDeletePost={handleClickDeletePost}
          />
      </div>
    </React.StrictMode>
  );
}

export default App;
