import React from 'react'
import data from '../../data/data'
import { PostStyle } from './PostUI.styles'
import { Link } from 'react-router-dom'


const PostUI: React.FC = () => {

    return (
        <PostStyle>
            <section>
                {data.map((post, id) => {
                    return <div className='post-ui' key={id}>
                        <div className='img'><img src={post.src} alt='post-img' />
                        </div>
                        <div className='post'>
                            <h6>{post.category}</h6>
                            <h1>{post.title}</h1>
                            <p>{post.desc}</p>
                            <Link to={`/post/${post.id}`}> <button>View post</button></Link>
                        </div>
                    </div>
                })}
            </section>
        </PostStyle>

    )
}

export default PostUI
