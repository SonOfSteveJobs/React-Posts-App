import React, {useMemo, useState} from 'react';
import './styles/App.css';
import PostList from './components/Postlist';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Programming language.'},
        {id: 2, title: 'Python', body: 'Another programming language.'},
        {id: 3, title: 'Rust', body: 'Another programming language (one more)'},
    ]);

    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const sortedPosts = useMemo(() => {
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }

        return posts;
    }, [selectedSort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery, sortedPosts])

    // const bodyInputRef = useRef(); неуправляемый компоненет

    const createPost = (newPost) => setPosts([...posts, newPost]);

    const removePost = (post) => setPosts(posts.filter((p) => p.id !== post.id));

    const sortPosts = (sort) => {
        setSelectedSort(sort);
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '20px 0'}}/>
            <MyInput
                placeholder="Search..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
            />
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue="Sort by"
                options={[{value: 'title', name: 'Name'}, {value: 'body', name: 'Description'}]}
            />
            {sortedAndSearchedPosts.length !== 0
                ? <PostList posts={sortedAndSearchedPosts} remove={removePost} title={'Posts list №1'}></PostList>
                : <h1 style={{textAlign: 'center'}}>Posts not found!</h1>}

        </div>
    );
}

export default App;
