import React from 'react';

const PostItem = (props) => {
    const { id, title, body } = props.post;
    return (
        <div className="post">
            <div className="post__content">
                <strong>{id}. {title}</strong>
                <div>
                    {body}
                </div>
            </div>
            <div className="post__btn">
                <button>Delete</button>
            </div>
        </div>
    );
};

export default PostItem;