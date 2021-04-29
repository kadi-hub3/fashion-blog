import React from 'react'
import data from '../../data/data'
import { PostStyle } from './PostUI.styles'


const PostUI: React.FC = () => {
    return (
        <PostStyle>
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

        </PostStyle>

    )
}

export default PostUI
