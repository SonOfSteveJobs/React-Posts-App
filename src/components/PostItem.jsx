import React from 'react';
import MyButton from './UI/button/MyButton';
import {useNavigate} from 'react-router-dom';

const PostItem = (props) => {
    const router = useNavigate();
    const {title, body, id} = props.post;
    return (
        <div className="post">
            <div className="post__content">
                <strong>{id}. {title}</strong>
                <div>
                    {body}
                </div>
            </div>
            <div className="post__btn">
                <MyButton onClick={() => router(`/posts/${id}`)}>Open</MyButton>
                <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;