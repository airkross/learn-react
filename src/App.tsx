import React, { useState } from 'react';
import PostList from './components/app-components/post-list';
import { IProps as IPostListItem } from './components/app-components/post-list/types'
import CreatePostForm from './components/app-components/create-post-form';

function App() {
  const [ posts ] = useState<IPostListItem['posts']>([
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
  ])
  return (
    <div className="App">
        <CreatePostForm 
          whenSubmit={(event) => {
            console.log(event)
          }}
        />
        <PostList 
          posts={posts}
        />
    </div>
  );
}

export default App;
