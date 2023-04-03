import React, {useEffect, useRef, useState} from 'react';
import '../styles/App.css';
import PostList from '../components/Postlist';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/modal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import {usePosts} from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import {useFetching} from '../hooks/useFetching';
import {getPageCount} from '../utils/pages';
import {usePagination} from '../hooks/usePagination';
import Pagination from '../components/UI/Pagination/Pagination';
import {useObserver} from '../hooks/useObserver';
import MySelect from '../components/UI/select/MySelect';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef();

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = (response.headers['x-total-count']);
        setTotalPages(getPageCount(totalCount, limit));
    });

    const memoPages = usePagination(totalPages);

    // const bodyInputRef = useRef(); неуправляемый компоненет
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
        setTotalCount(totalCount + 1)
    };
    const removePost = (post) => setPosts(posts.filter((p) => p.id !== post.id));

    useObserver(lastElement, page < totalPages, isPostsLoading, () => setPage(page + 1))

    useEffect(() => {
        fetchPosts(limit, page);
    }, [page, limit]);

    const changePage = (page) => {
        setPage(page);
    }

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
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue="Number of elements on page"
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: -1, name: 'Show all'},
                ]}
            />
            {postError &&
                <h1>Error: {postError}</h1>
            }
            <PostList posts={sortedAndSearchedPosts} remove={removePost} title={'Posts list №1'}></PostList>
            <div ref={lastElement} style={{height: 20, background: 'red'}}></div>
            {isPostsLoading &&
                <div style={{marginTop: 50, justifyContent: 'center', display: 'flex'}}><Loader/></div>
            }
            <Pagination pagesArray={memoPages} page={page} changePage={changePage}/>
        </div>
    );
}

export default Posts;
