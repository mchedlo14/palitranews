import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Comments = ({ postID, data }) => {
    const [showAll, setShowAll] = useState(false);
    const [showComments, setShowComments] = useState([]);

    const currentComments = data.filter(e => {
        return e.postId === postID;
    });

    useEffect(() => {
        if(showAll) {
            setShowComments(currentComments)
        } else setShowComments(currentComments.slice(0, 3))
    }, [showAll]);

    const navigate = useNavigate();

    return (
        <div className='comments'>
            {data && showComments && showComments.map((e, i) => {
                return <div className='comments-wrapper'>
                    <p key={i} className='comments-text'>{i + 1}: {e.body}</p>
                </div>
            })}
            <button className='showall-btn' onClick={() => setShowAll(!showAll)}>show all</button>
            <buutton className='back-btn' onClick={() => navigate(`/`)}>
                <img src='/images/left-arrow.svg' className='back-icon' alt='back icon'/>
            </buutton>
        </div>
    )
}

export default Comments