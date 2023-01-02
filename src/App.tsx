import React, { useState } from 'react';
import PostList from './components/app-components/post-list';
import CreatePostForm from './components/app-components/create-post-form';

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
      title: 'Учу React',
      description: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.',
    },
    {
      id: 2,
      title: 'Учу React',
      description: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.',
    },
    {
      id: 3,
      title: 'Учу React',
      description: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.',
    },
    {
      id: 4,
      title: 'Учу React',
      description: 'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.',
    },
  ]
}

function App() {
  const [ posts, setPosts ] = useState<IPostListItems['posts']>(responseData.posts)

  function handleSubmitAddPostForm(post: IPostItem) {
    setPosts([...posts, post])
  }

  function handleClickDeletePost(postId: IPostItem['id']) {
    setPosts(posts.filter((post) => post.id !== postId))
  }

  return (
    <React.StrictMode>
      <div className="App">
          <CreatePostForm 
            whenSubmit={handleSubmitAddPostForm}
          />
          <PostList 
            posts={posts}
            whenClickDeletePost={handleClickDeletePost}
          />
      </div>
    </React.StrictMode>
  );
}

export default App;
