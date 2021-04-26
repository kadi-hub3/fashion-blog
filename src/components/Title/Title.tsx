import React from 'react'
import { TitleText } from './Title.styles'

const Title: React.FC<{ title: string }> = ({ title }) => {


    return (
        <TitleText>
            <h2 className='fancy-title'>
                <span>{title}</span>
            </h2 >
        </TitleText>
    )
}

export default Title

