import React from 'react'
import img1 from '../images/Post-images/img-1.jpg'
import img2 from '../images/Post-images/img-2.jpg'
import img3 from '../images/Post-images/img-3.jpg'
import img4 from '../images/Post-images/img-4.jpg'
import img5 from '../images/Post-images/img-5.jpg'
import img6 from '../images/Post-images/img-6.jpg'
import item1 from '../images/Item-images/img-1.jpg'
import item2 from '../images/Item-images/img-2.jpg'
import item3 from '../images/Item-images/img-3.jpg'
import item4 from '../images/Item-images/img-4.jpg'
import item5 from '../images/Item-images/img-5.jpg'
import item6 from '../images/Item-images/img-6.jpg'
import { FaGlobe, FaSearch, FaTwitter, FaFacebook, FaInstagram, FaSnapchat } from 'react-icons/fa'
export const links = [
    {
        id: 1,
        url: '/about',
        text: 'about',
    },
    {
        id: 2,
        url: '/beauty',
        text: 'beauty',
    },
    {
        id: 3,
        url: '/looks',
        text: 'looks',
    },
    {
        id: 4,
        url: '/Travel',
        text: <FaGlobe />,
    },
    {
        id: 5,
        url: '/shop',
        text: 'shop',
    },
    {
        id: 6,
        url: '/contact',
        text: <FaSearch />,
    },
]

export const social = [
    {
        id: 1,
        url: 'https://www.twitter.com',
        icon: <FaFacebook />,
    },
    {
        id: 2,
        url: 'https://www.twitter.com',
        icon: <FaInstagram />,
    },
    {
        id: 3,
        url: 'https://www.twitter.com',
        icon: <FaSnapchat />,
    },
    {
        id: 4,
        url: 'https://www.twitter.com',
        icon: <FaTwitter />,
    },
]
export const articles = [
    {
        src: item1
    },
    {
        src: item2
    },
    {
        src: item3
    },
    {
        src: item4
    },
    {
        src: item5
    },
    {
        src: item6
    }
]
export default [
    {
        src: img1,
        text: 'favorite bags of 2020',
        category: 'bag'
    },
    {
        src: img2,
        text: 'my best packing tips',
        category: 'beauty'

    },
    {
        src: img3,
        text: 'trench coat trend for spring 2021',
        category: 'looks'

    },
    {
        src: img4,
        text: 'spring summer 2021 beaty trends',
        category: 'beauty'

    },
    {
        src: img5,
        text: 'favorite nude lipstick',
        category: 'beauty'

    },
    {
        src: img2,
        text: 'my best packing tips',
        category: 'advice'

    },
    {
        src: img3,
        text: 'trench coat trend for spring 2021',
        category: 'looks'

    },
    {
        src: img4,
        text: 'spring summer 2021 beaty trends',
        category: 'beauty'

    },
    {
        src: img5,
        text: 'favorite nude lipstick',
        category: 'beauty'

    }
]

