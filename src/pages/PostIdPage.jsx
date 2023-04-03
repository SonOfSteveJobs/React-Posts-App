import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';

const PostIdPage = () => {
    const params = useParams();
    const {id} = params;
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostsById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    const [fetchCommentsById, isLoadingComments, errorComments] = useFetching(async () => {
        const response = await PostService.getPostComments(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostsById();
        fetchCommentsById();
    }, []);

    return (
        <div>
            <div>
                {isLoading
                    ? <Loader/>
                    : <h1>{post.id}. {post.title}</h1>
                }
            </div>
            <div>
                {isLoadingComments
                    ? <Loader/>
                    : <div>
                        <hr/>
                        <h2>Comments:</h2>
                        {comments.map((comment, index) => {
                            const {name, email, body} = comment;
                            return (
                                <div style={{marginTop: 30}} key={index + 1}>
                                    <h5>{email}</h5>
                                    <h5>{name}</h5>
                                    <div>{body}</div>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </div>
    );
};

export default PostIdPage;