import React, {useState} from 'react';
import './styles/App.css';
import PostItem from './components/PostItem';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Programming language.'},
        {id: 2, title: 'Python', body: 'Another programming language.'},
        {id: 3, title: 'Rust', body: 'Another programming language, i don\'t even know about.'},
    ])

    return (
        <div className="App">
            {
                posts.map((post) => <PostItem post={post} key={post.id}/>)
            }
        </div>
    );
}

export default App;
