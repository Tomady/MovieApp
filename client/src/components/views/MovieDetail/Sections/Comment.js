import React, { useState } from 'react';
import {Button} from 'antd';
import Axios from 'axios';
import {useSelector} from 'react-redux';

function Comment(props) {
    const movieId = props.movieId;
    const user = useSelector(state => state.user);
    const [CommentValue, setCommentValue] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        const variables = {
            content: CommentValue,
            writer: user.userData._id,
            postId: movieId
        }
        Axios.post('/api/comment/saveComment', variables)
        .then(response => {
            if(response.data.success) {
                console.log(response.data.result);
            } else {
                alert('댓글을 저장하지 못했습니다.');
            }
        })
    }

    const handleClick = (event) => {
        setCommentValue(event.currentTarget.value);
    }

    return (
        <div>
            <br />
            <h2>Share your opinions about {props.original_title}</h2>
            <hr />

            {/* Comment Lists */}

            {/* Root Comment Form */}

            <form style={{display:'flex'}} onSubmit={onSubmit}>
                <textarea 
                    style={{width: '100%', borderRadius:'5px'}}
                    onChange={handleClick}
                    value={CommentValue}
                    placeholder="write some comments"
                />
                <br />
                <Button style={{width: '20%', height: '52px'}} onClick={onSubmit}>Submit</Button>
            </form>
        </div>
    );
}

export default Comment;
