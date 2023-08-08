import React from 'react';

function Post(props) {
    const { author, content } = props;

    return (
        <div className="post">
            <h3>{author}</h3>
            <p>{content}</p>
        </div>
    );
}

export default Post;