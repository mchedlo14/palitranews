import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import '../assets/PostDetailed.css'
import Author from './Author'
import Comments from './Comments'


const PostDetailed = () => {
    const params = useParams();
    
    const posts = useSelector(state => state.data.posts);
    const comments = useSelector(state => state.data.comments);
    const users = useSelector(state => state.data.authors);

    const [displayPost, setDisplayPost] = useState([]);

    const setPost = () => {
        const detailed = posts.filter(e => {
            if(e.id === parseInt(params.id)){
                return e 
            }
        });
        setDisplayPost(detailed);
    }

    useEffect(() => {
        if(posts) {
            setPost();
        }
    }, [posts])

    return (
        <div>{displayPost && displayPost.map((e, i) => {
            return (
                <div key={i} className='post-detail-wrapper'>
                    <div className='person-information'>
                        {users && <Author id={e.userId} user={users} type="detailed" />}
                    </div>
                    <div className='detail-box'>
                        <h2>{e.title}</h2>
                        <p>{e.body}</p>
                    </div>
                    <div className='commentsWrapper'>
                        {comments && <Comments postID={e.id} data={comments} />}
                    </div>
                </div>
            )
        })}</div>
    )
}

export default PostDetailed