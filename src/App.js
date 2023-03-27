import React, {useEffect, useState} from 'react';
import './styles/App.css';
import PostList from './components/Postlist';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import {usePosts} from './hooks/usePosts';
import PostService from './API/PostService';
import Loader from './components/UI/loader/Loader';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Programming language.'},
        {id: 2, title: 'Python', body: 'Another programming language.'},
        {id: 3, title: 'Rust', body: 'Another programming language (one more)'},
    ]);

    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [isPostsLoading, setIsPostsLoading] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    // const bodyInputRef = useRef(); неуправляемый компоненет
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };
    const removePost = (post) => setPosts(posts.filter((p) => p.id !== post.id));

    const fetchPosts = async () => {
        setIsPostsLoading(true)
        setTimeout(async () => {
            const response = await PostService.getAll();
            setPosts(response);
            setIsPostsLoading(false);
        }, 1000);

    };

    useEffect(() => {
        fetchPosts();
    }, []);

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
            {isPostsLoading
                ? <div style={{marginTop: 50, justifyContent: 'center', display: 'flex'}}><Loader/></div>
                : <PostList posts={sortedAndSearchedPosts} remove={removePost} title={'Posts list №1'}></PostList>
            }
        </div>
    );
}

export default App;
