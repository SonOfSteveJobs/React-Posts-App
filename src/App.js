import React, {useState} from 'react';
import './styles/App.css';
import PostList from './components/Postlist';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Programming language.'},
        {id: 2, title: 'Python', body: 'Another programming language.'},
        {id: 3, title: 'Rust', body: 'Another programming language, i don\'t even know about.'},
    ]);

    const [selectedSort, setSelectedSort] = useState('');

    // const bodyInputRef = useRef(); неуправляемый компоненет

    const createPost = (newPost) => setPosts([...posts, newPost]);

    const removePost = (post) => setPosts(posts.filter((p) => p.id !== post.id));

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '20px 0'}}/>
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue="Sort by"
                options={[{value: 'title', name: 'Name'}, {value: 'body', name: 'Description'}]}
            />
            {posts.length !== 0
                ? <PostList posts={posts} remove={removePost} title={'Posts list №1'}></PostList>
                : <h1 style={{textAlign: 'center'}}>Posts not found!</h1>}

        </div>
    );
}

export default App;
