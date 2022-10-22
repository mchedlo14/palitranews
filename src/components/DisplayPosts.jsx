import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Author from './Author';
import '../assets/Displayposts.css'

const DisplayPosts = ({displayposts}) => {
    const users = useSelector(state => state.data.authors);
    const navigate = useNavigate();

    return (
        <section>
            {
                displayposts && 
                <div className='postsWrapper'>
                    {
                        displayposts.map((element,i) => {
                            return (
                                <div key={i} className='displayposts-wrapper'>
                                    {users && <Author id={element.userId} user={users}/>}
                                    <p onClick={() => navigate(`/post/${element.id}`)} className='post'>{element.title}</p>
                                </div>
                            )
                        })            
                    }
                </div>
            }
        </section>
    )
}

export default DisplayPosts