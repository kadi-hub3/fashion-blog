import React from 'react'
import data from '../../data/data'
import { Post } from './PostUI.styles'


const PostUI: React.FC = () => {
    return (
        <Post>
            <section>
                {data.map(post => {
                    return <div className='post-ui'>
                        <img src={post.src} alt='img' />
                        <div className='post'>
                            <h6>{post.category}</h6>
                            <h1>{post.title}</h1>
                            <p>{post.desc}</p>
                            <button>View post</button>
                        </div>
                    </div>
                })}
            </section>

        </Post>

    )
}

export default PostUI
