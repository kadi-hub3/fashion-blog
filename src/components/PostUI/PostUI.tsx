import React from 'react'
import data from '../../data/data'
import { Post } from './PostUI.styles'
type Props = {
    title1: string,
    content1: string,
    image1?: string,
    title2: string,
    content2: string,
    image2?: string
}

const PostUI: React.FC<Props> = ({ title1, content1, image1, title2, content2, image2 }) => {
    return (
        <Post>
            <section>
                <div className='post-ui'>
                    <div className='post-img'>
                        <img src={image1} alt='img' />
                    </div>
                    <div className='post'>
                        <div className='post-content'>
                            <h1>{title1}</h1>
                            <p>{content1}</p>
                            <button>View post</button>
                        </div>
                    </div>
                </div>
                <div className='post-ui reverse'>
                    <div className='post-img'>
                        <img src={image2} alt='img' />
                    </div>
                    <div className='post'>
                        <div className='post-content'>
                            <h1>{title2}</h1>
                            <p>{content2}</p>
                            <button>View post</button>
                        </div>
                    </div>
                </div>
            </section>

        </Post>

    )
}

export default PostUI
