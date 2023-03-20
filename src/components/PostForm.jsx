import React, {useState} from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {...post, id: Date.now()}
        create(newPost);
        setPost({title: '', body: ''});
    }

    return (
        <div>
            <form>
                <MyInput
                    value={post.title}
                    onChange={(e) => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="Post title"
                    autoFocus/>
                <MyInput
                    value={post.body}
                    onChange={(e) => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder="Post description"/>
                {/*<MyInput
                    ref={bodyInputRef}
                    type="text"
                    placeholder="Post description"/> неуправляемый компонент( не рекомендуется )*/}
                <MyButton onClick={addNewPost}>Add new post</MyButton>
            </form>
        </div>
    );
};

export default PostForm;