import React, { useMemo, useState } from 'react';

import PostList from './components/app-components/post-list';
import CreatePostForm from './components/app-components/create-post-form';
import CustomSeparator from './components/common/custom-separator';
import { IProps as ICustomSelect } from './components/common/custom-select/types'
import PostFilter from './components/app-components/post-filter';

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
    {
      id: 2,
      title: 'вв Учу React',
      description: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.',
    },
    {
      id: 4,
      title: 'бб Учу React',
      description: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.',
    },
  ]
}

const enum optionValues {
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

  const sortedPosts = useMemo(() => {
    if(!filter.sort) {
      return posts
    }

    switch(filter.sort) {
      case optionValues.ID: {
        return [...posts].sort((a, b) => a[filter.sort as 'id'] - b[filter.sort as 'id'])
      }
      case optionValues.TITLE: {
        return [...posts].sort((a, b) => a[filter.sort as 'title'].localeCompare(b[filter.sort as 'title']))
      }
      default: {
        return responseData.posts
      }
    }
  }, [filter.sort, posts])

  const sortedAndSerchingPosts = useMemo(() => {
    return sortedPosts?.filter((post) => post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase()))
  }, [filter.query, sortedPosts])

  const handleSubmitAddPostForm = (post: IPostItem) => {
    setPosts([...posts, post])
  }

  const handleClickDeletePost = (postId: IPostItem['id']) => {
    setPosts(posts.filter((post) => post.id !== postId))
  }

  return (
    <React.StrictMode>
      <div className="App">
          <CreatePostForm 
            whenSubmit={handleSubmitAddPostForm}
          />
          <CustomSeparator />
          <PostFilter
            filter={filter}
            setFilter={setFilter}
            options={options}
          />
          <PostList 
            posts={sortedAndSerchingPosts}
            whenClickDeletePost={handleClickDeletePost}
          />
      </div>
    </React.StrictMode>
  );
}

export default App;
