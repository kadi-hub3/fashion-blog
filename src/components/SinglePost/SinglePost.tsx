import React, { useState } from 'react'
import data from '../../data/data'

const SinglePost = () => {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className='search-box'>
            <input className='search-input' type='text' placeholder='Type some keyword...' onChange={e => setSearchTerm(e.target.value)} />
            {data.filter((val) => {
                if (searchTerm === '') {
                    return val
                } else if (val.desc.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((val, key) => {
                return (
                    <div className='keyword' key={key}>
                        {val.category}
                    </div>
                )
            })}
        </div>
    )
}

export default SinglePost
