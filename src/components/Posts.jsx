import '../assets/Posts.css'
import React, { useEffect, useState } from 'react'
import DisplayPosts from './DisplayPosts';
import { useSelector } from 'react-redux';

const Posts = () => {
    const [maxPages,setMaxPages] = useState();
    const [currentPage,setCurrentPage] = useState(1);
    const [displayPosts,setDisplayPosts] = useState();

    const posts = useSelector(state => state.data.posts);

    useEffect(() => {
        if(posts) {
            setMaxPages(posts.length / 20);
        }
    }, [posts]);

    const dividePosts = (index, arr) => {
        const parted = arr.map((e, i) => {
            if(i % 20 === 0) {
                return arr.slice(i, i + 20)
            }
        });
    
        const filtered = parted.filter(e => {
            return e !== undefined;
        })
    
        return filtered[index - 1];
    }

    useEffect(() => {
        if(posts) {
            const currentPosts = dividePosts(currentPage, posts);
            setDisplayPosts(currentPosts)
        }
    }, [posts, currentPage]);
    
    const handleIncreasePaginate = () => {
        if(currentPage < maxPages){
            setCurrentPage((prev) => prev + 1)
        }
    }

    const handleDecreasePaginate = () => {
        if(currentPage > 1){
            setCurrentPage((prev) => prev - 1)
        }
    }

  return (
    <div className='posts-wrapper'>
        <DisplayPosts displayposts = {displayPosts}/>
        <div className='pagination-wrapper'>
            <span onClick={handleDecreasePaginate}><img src='/images/left-arrow.svg' alat='left arrow' className='icon'/></span>
            <span className='current-page'>{currentPage}</span>
            <span>{maxPages}</span>
            <span onClick={handleIncreasePaginate}><img src='/images/right-arrow.svg' alat='right arrow' className='icon'/></span>
        </div>
    </div>
  )
}

export default Posts