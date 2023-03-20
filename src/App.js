import React, {useRef, useState} from 'react';
import './styles/App.css';
import PostList from './components/Postlist';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Programming language.'},
        {id: 2, title: 'Python', body: 'Another programming language.'},
        {id: 3, title: 'Rust', body: 'Another programming language, i don\'t even know about.'},
    ]);

    // const bodyInputRef = useRef(); неуправляемый компоненет

    const createPost = (newPost) => setPosts([...posts, newPost]);
    const removePost = (post) => setPosts(posts.filter((p) => p.id !== post.id));

    return (
        <div className="App">
            <PostForm create={createPost}/>
            {posts.length !== 0
                ? <PostList posts={posts} remove={removePost} title={'Posts list №1'}></PostList>
                : <h1 style={{textAlign: 'center'}}>Posts not found!</h1>}

        </div>
    );
}

export default App;
