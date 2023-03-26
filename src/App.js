import React, {useMemo, useState} from 'react';
import './styles/App.css';
import PostList from './components/Postlist';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Programming language.'},
        {id: 2, title: 'Python', body: 'Another programming language.'},
        {id: 3, title: 'Rust', body: 'Another programming language (one more)'},
    ]);

    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false)

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }

        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query.toLowerCase()));
    }, [filter.query, sortedPosts])

    // const bodyInputRef = useRef(); неуправляемый компоненет
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };
    const removePost = (post) => setPosts(posts.filter((p) => p.id !== post.id));

    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Create Post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '20px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList posts={sortedAndSearchedPosts} remove={removePost} title={'Posts list №1'}></PostList>
        </div>
    );
}

export default App;
