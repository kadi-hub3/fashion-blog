import React, { useState } from 'react'
import data from '../../data/data'
import { useParams } from 'react-router-dom'

const SinglePost: React.FC = (props) => {
    const [posts, setPosts] = useState(data)
    // const [slug, setSlug] = useState(props.match.params.slug)

    return (
        <div>

            {
                <h1>{posts.find((post, slug) => post.id === slug)}</h1>
            }

        </div>

    )
}

export default SinglePost
