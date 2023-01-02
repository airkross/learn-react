import React, { useState } from 'react';
import './App.css';
import PostList from './components/app-components/post-list';
import { IProps as IPostItem } from './components/app-components/post-item/types'
import CreatePostForm from './components/app-components/create-post-form';


function App() {
  const [ posts ] = useState<Array<IPostItem>>([
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
