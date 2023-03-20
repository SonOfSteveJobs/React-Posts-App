import React, {useRef, useState} from 'react';
import './styles/App.css';
import PostItem from './components/PostItem';
import PostList from './components/Postlist';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Programming language.'},
        {id: 2, title: 'Python', body: 'Another programming language.'},
        {id: 3, title: 'Rust', body: 'Another programming language, i don\'t even know about.'},
    ]);

    const [inputTitle, setInputTitle] = useState('');

    const [inputBody, setInputBody] = useState('');

    // const bodyInputRef = useRef(); неуправляемый компоненет

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title: inputTitle,
            body: inputBody,
        }

        setPosts([...posts, newPost]);
        setInputBody('');
        setInputTitle('');
    }

    return (
        <div className="App">
            <form>
                <MyInput
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                    type="text"
                    placeholder="Post title"/>
                <MyInput
                    value={inputBody}
                    onChange={(e) => setInputBody(e.target.value)}
                    type="text"
                    placeholder="Post description"/>
                {/*<MyInput
                    ref={bodyInputRef}
                    type="text"
                    placeholder="Post description"/> неуправляемый компонент( не рекомендуется )*/}
                <MyButton onClick={addNewPost}>Add new post</MyButton>
            </form>
            <PostList posts={posts} title={'Posts list №1'}></PostList>
        </div>
    );
}

export default App;
