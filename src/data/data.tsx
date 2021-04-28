import React from 'react'
import img1 from '../images/Post-images/img-1.jpg'
import img2 from '../images/Post-images/img-2.jpg'
import img3 from '../images/Post-images/img-3.jpg'
import img4 from '../images/Post-images/img-4.jpg'
import img5 from '../images/Post-images/img-5.jpg'
import img6 from '../images/Post-images/img-6.jpg'
import img7 from '../images/Post-images/img-7.jpg'
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
        url: '/travel',
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
        title: 'favorite bags of 2020',
        category: 'bag',
        desc: 'Bags, bags, bags… Whenever my friends are int wo minds about getting a bag (or two), they always make sure to call me. We all have something we love.'
    },
    {
        src: img2,
        title: 'my best packing tips',
        category: 'beauty',
        desc: 'If only I got a penny for every time I got asked for my best packing tips. Ok I understand that perhaps its not the best time ever to talk about packing because where would we go? But now I probably have your attention and we can discuss my best packing tips.'

    },
    {
        src: img3,
        title: 'trench coat trend for spring 2021',
        category: 'looks',
        desc: 'Ladies and Gentlemen Trench Kelly 25 in Bleu Brume is here and I will talk about my first'

    },
    {
        src: img4,
        title: 'spring summer 2021 beauty trends',
        category: 'beauty',
        desc: 'In this post you will find the latest beauty trends to experiment with this Spring! From Freckles to Bold Eye Shadow, its all in here'

    },
    {
        src: img5,
        title: 'favorite nude lipstick',
        category: 'beauty',
        desc: 'Everybody has their clear preference when it comes to lip products some like to go for the gloss, some the balm, but even the lipsticks come in different formulas, finishes and undertones. Remember the times when a nude lipstick means just one? Or when red was red? Well forget about those times, because in todays blog post I want to tell you all about my preferences when it comes to nudity, I mean the nude lips, what else would I be talking about!?'

    },
    {
        src: img7,
        title: 'introducing the dior jacket 2021',
        category: 'looks',
        desc: 'Discover all there is to know about Dior’s latest jacket release – The Point.'

    },
    {
        src: img6,
        title: 'valentino spring/summer 2021 favourites',
        category: 'looks',
        desc: 'In this post you will discover a few of my favourite pieces from Valentino’s Spring/Summer RTW collection.'

    }
]

export const visitedCities = [
    'amsterdam', 'vienna', 'zurich', 'thailand', 'venice', 'florence',
    'mallorca', 'milan', 'maldives', 'los angeles', 'rome', 'paris', 'saint-tropez',
    'sevilla', 'costa rica', 'copenhagen', 'stockholm', 'dubai', 'crete', 'budapest',
    'brighton', 'brussels', 'barcelona', 'palm springs', 'new york', 'monaco', 'ibiza',
    'greece', 'positano'
]