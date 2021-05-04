import React from 'react'
import img1 from '../images/Post-images/img-1.png'
import img2 from '../images/Post-images/img-2.png'
import img3 from '../images/Post-images/img-3.png'
import img4 from '../images/Post-images/img-4.png'
import img5 from '../images/Post-images/img-5.png'
import img6 from '../images/Post-images/img-6.png'
import img7 from '../images/Post-images/img-7.png'
import img8 from '../images/Post-images/img-8.png'
import img9 from '../images/Post-images/img-9.png'
import img10 from '../images/Post-images/img-10.png'
import img11 from '../images/Post-images/img-11.png'
import img12 from '../images/Post-images/img-12.png'
import img13 from '../images/Post-images/img-13.png'
import img14 from '../images/Post-images/img-14.png'
import img15 from '../images/Post-images/img-15.png'
import img16 from '../images/Post-images/img-16.png'
import item1 from '../images/Item-images/img-1.png'
import item2 from '../images/Item-images/img-2.png'
import item3 from '../images/Item-images/img-3.png'
import item4 from '../images/Item-images/img-4.png'
import item5 from '../images/Item-images/img-5.png'
import item6 from '../images/Item-images/img-6.png'
import item7 from '../images/Item-images/img-7.png'
import item8 from '../images/Item-images/img-8.png'
import { FaGlobe, FaTwitter, FaFacebook, FaInstagram, FaSnapchat } from 'react-icons/fa'

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
        text: 'contact',
    }
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
        src: item1,
        link: 'https://www.zara.com/es/'
    },
    {
        src: item2,
        link: 'https://www.zara.com/es/'
    },
    {
        src: item3,
        link: 'https://www.zara.com/es/'
    },
    {
        src: item4,
        link: 'https://www.zara.com/es/'
    },
    {
        src: item5,
        link: 'https://www.zara.com/es/'
    },
    {
        src: item6,
        link: 'https://www.zara.com/es/'
    },
    {
        src: item7,
        link: 'https://www.zara.com/es/'
    },
    {
        src: item8,
        link: 'https://www.zara.com/es/'
    }
]

// eslint-disable-next-line 
export default [
    {
        id: 1,
        src: img1,
        title: 'favorite bags of 2020',
        category: 'bag',
        desc: 'Bags, bags, bags… Whenever my friends are int wo minds about getting a bag (or two), they always make sure to call me. We all have something we love.',
        fullDesc: 'Bags, bags, bags… Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id sem eu felis rutrum mattis. Aliquam vitae diam justo. Cras id commodo tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vehicula quam vitae est laoreet, id volutpat libero pellentesque. Fusce id nulla ultrices, dictum nunc sit amet, lacinia nibh. Quisque egestas ante egestas urna condimentum fringilla. In vitae arcu nec orci pulvinar bibendum non et dui. Nunc neque magna, euismod vel libero sed, elementum lobortis neque. Phasellus dictum eu eros vitae auctor. Sed facilisis porttitor dolor id convallis. Proin tempus turpis massa, sed malesuada arcu auctor ut. Aenean iaculis nisi eget nunc consequat, id egestas massa finibus. Etiam nibh magna, euismod non risus eget, lacinia tincidunt quam.'
    },
    {
        id: 2,
        src: img2,
        title: 'my best packing tips',
        category: 'beauty',
        desc: 'If only I got a penny for every time I got asked for my best packing tips. Ok I understand that perhaps its not the best time ever to talk about packing because where would we go? But now I probably have your attention and we can discuss my best packing tips.',
        fullDesc: 'If only I got a penny for every time I got asked for my best packing tips. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id sem eu felis rutrum mattis. Aliquam vitae diam justo. Cras id commodo tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vehicula quam vitae est laoreet, id volutpat libero pellentesque. Fusce id nulla ultrices, dictum nunc sit amet, lacinia nibh. Quisque egestas ante egestas urna condimentum fringilla. In vitae arcu nec orci pulvinar bibendum non et dui. Nunc neque magna, euismod vel libero sed, elementum lobortis neque. Phasellus dictum eu eros vitae auctor. Sed facilisis porttitor dolor id convallis. Proin tempus turpis massa, sed malesuada arcu auctor ut. Aenean iaculis nisi eget nunc consequat, id egestas massa finibus. Etiam nibh magna, euismod non risus eget, lacinia tincidunt quam.'


    },
    {
        id: 3,
        src: img3,
        title: 'linen trends for spring 2021',
        category: 'looks',
        desc: 'Ladies and Gentlemen Trench Kelly 25 in Bleu Brume is here and I will talk about my first',
        fullDesc: 'Ladies and Gentlemen Trench Kelly 25 in for my best packing tips. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id sem eu felis rutrum mattis. Aliquam vitae diam justo. Cras id commodo tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vehicula quam vitae est laoreet, id volutpat libero pellentesque. Fusce id nulla ultrices, dictum nunc sit amet, lacinia nibh. Quisque egestas ante egestas urna condimentum fringilla. In vitae arcu nec orci pulvinar bibendum non et dui. Nunc neque magna, euismod vel libero sed, elementum lobortis neque. Phasellus dictum eu eros vitae auctor. Sed facilisis porttitor dolor id convallis. Proin tempus turpis massa, sed malesuada arcu auctor ut. Aenean iaculis nisi eget nunc consequat, id egestas massa finibus. Etiam nibh magna, euismod non risus eget, lacinia tincidunt quam.'

    },
    {
        id: 4,
        src: img4,
        title: 'spring summer 2021 beauty trends',
        category: 'beauty',
        desc: 'In this post you will find the latest beauty trends to experiment with this Spring! From Freckles to Bold Eye Shadow, its all in here',
        fullDesc: 'Ladies and Gentlemen Trench Kelly 25 in for my best packing tips. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id sem eu felis rutrum mattis. Aliquam vitae diam justo. Cras id commodo tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vehicula quam vitae est laoreet, id volutpat libero pellentesque. Fusce id nulla ultrices, dictum nunc sit amet, lacinia nibh. Quisque egestas ante egestas urna condimentum fringilla. In vitae arcu nec orci pulvinar bibendum non et dui. Nunc neque magna, euismod vel libero sed, elementum lobortis neque. Phasellus dictum eu eros vitae auctor. Sed facilisis porttitor dolor id convallis. Proin tempus turpis massa, sed malesuada arcu auctor ut. Aenean iaculis nisi eget nunc consequat, id egestas massa finibus. Etiam nibh magna, euismod non risus eget, lacinia tincidunt quam.'

    },
    {
        id: 5,
        src: img5,
        title: 'favorite nude lipstick',
        category: 'beauty',
        desc: 'Everybody has their clear preference when it comes to lip products some like to go for the gloss, some the balm, but even the lipsticks come in different formulas, finishes and undertones. Remember the times when a nude lipstick means just one? Or when red was red? Well forget about those times, because in todays blog post I want to tell you all about my preferences when it comes to nudity, I mean the nude lips, what else would I be talking about!?',
        fullDesc: 'Ladies and Gentlemen Trench Kelly 25 in for my best packing tips. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id sem eu felis rutrum mattis. Aliquam vitae diam justo. Cras id commodo tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vehicula quam vitae est laoreet, id volutpat libero pellentesque. Fusce id nulla ultrices, dictum nunc sit amet, lacinia nibh. Quisque egestas ante egestas urna condimentum fringilla. In vitae arcu nec orci pulvinar bibendum non et dui. Nunc neque magna, euismod vel libero sed, elementum lobortis neque. Phasellus dictum eu eros vitae auctor. Sed facilisis porttitor dolor id convallis. Proin tempus turpis massa, sed malesuada arcu auctor ut. Aenean iaculis nisi eget nunc consequat, id egestas massa finibus. Etiam nibh magna, euismod non risus eget, lacinia tincidunt quam.'

    },
    {
        id: 6,
        src: img7,
        title: 'introducing the dior jacket 2021',
        category: 'looks',
        desc: 'Discover all there is to know about Dior’s latest jacket release – The Point.',
        fullDesc: 'Ladies and Gentlemen Trench Kelly 25 in for my best packing tips. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id sem eu felis rutrum mattis. Aliquam vitae diam justo. Cras id commodo tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vehicula quam vitae est laoreet, id volutpat libero pellentesque. Fusce id nulla ultrices, dictum nunc sit amet, lacinia nibh. Quisque egestas ante egestas urna condimentum fringilla. In vitae arcu nec orci pulvinar bibendum non et dui. Nunc neque magna, euismod vel libero sed, elementum lobortis neque. Phasellus dictum eu eros vitae auctor. Sed facilisis porttitor dolor id convallis. Proin tempus turpis massa, sed malesuada arcu auctor ut. Aenean iaculis nisi eget nunc consequat, id egestas massa finibus. Etiam nibh magna, euismod non risus eget, lacinia tincidunt quam.'

    },
    {
        id: 7,
        src: img15,
        title: 'spring summer 2021 beauty trends',
        category: 'beauty',
        desc: 'In this post you will find the latest beauty trends to experiment with this Spring! From Freckles to Bold Eye Shadow, its all in here',
        fullDesc: 'Ladies and Gentlemen Trench Kelly 25 in for my best packing tips. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id sem eu felis rutrum mattis. Aliquam vitae diam justo. Cras id commodo tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vehicula quam vitae est laoreet, id volutpat libero pellentesque. Fusce id nulla ultrices, dictum nunc sit amet, lacinia nibh. Quisque egestas ante egestas urna condimentum fringilla. In vitae arcu nec orci pulvinar bibendum non et dui. Nunc neque magna, euismod vel libero sed, elementum lobortis neque. Phasellus dictum eu eros vitae auctor. Sed facilisis porttitor dolor id convallis. Proin tempus turpis massa, sed malesuada arcu auctor ut. Aenean iaculis nisi eget nunc consequat, id egestas massa finibus. Etiam nibh magna, euismod non risus eget, lacinia tincidunt quam.'

    },
    {
        id: 8,
        src: img6,
        title: 'valentino spring/summer 2021 favourites',
        category: 'looks',
        desc: 'In this post you will discover a few of my favourite pieces from Valentino’s Spring/Summer RTW collection.',
        fullDesc: 'Ladies and Gentlemen Trench Kelly 25 in for my best packing tips. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id sem eu felis rutrum mattis. Aliquam vitae diam justo. Cras id commodo tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vehicula quam vitae est laoreet, id volutpat libero pellentesque. Fusce id nulla ultrices, dictum nunc sit amet, lacinia nibh. Quisque egestas ante egestas urna condimentum fringilla. In vitae arcu nec orci pulvinar bibendum non et dui. Nunc neque magna, euismod vel libero sed, elementum lobortis neque. Phasellus dictum eu eros vitae auctor. Sed facilisis porttitor dolor id convallis. Proin tempus turpis massa, sed malesuada arcu auctor ut. Aenean iaculis nisi eget nunc consequat, id egestas massa finibus. Etiam nibh magna, euismod non risus eget, lacinia tincidunt quam.'

    },
    {
        id: 9,
        src: img8,
        title: 'the rise of air jordan',
        category: 'looks',
        desc: 'In this post you will discover a few of my favourite pieces from Valentino’s Spring/Summer RTW collection.',
        fullDesc: 'Ladies and Gentlemen Trench Kelly 25 in for my best packing tips. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id sem eu felis rutrum mattis. Aliquam vitae diam justo. Cras id commodo tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vehicula quam vitae est laoreet, id volutpat libero pellentesque. Fusce id nulla ultrices, dictum nunc sit amet, lacinia nibh. Quisque egestas ante egestas urna condimentum fringilla. In vitae arcu nec orci pulvinar bibendum non et dui. Nunc neque magna, euismod vel libero sed, elementum lobortis neque. Phasellus dictum eu eros vitae auctor. Sed facilisis porttitor dolor id convallis. Proin tempus turpis massa, sed malesuada arcu auctor ut. Aenean iaculis nisi eget nunc consequat, id egestas massa finibus. Etiam nibh magna, euismod non risus eget, lacinia tincidunt quam.'

    },
    {
        id: 10,
        src: img9,
        title: 'valentino spring/summer 2021 favourites',
        category: 'looks',
        desc: 'In this post you will discover a few of my favourite pieces from Valentino’s Spring/Summer RTW collection.',
        fullDesc: 'Ladies and Gentlemen Trench Kelly 25 in for my best packing tips. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id sem eu felis rutrum mattis. Aliquam vitae diam justo. Cras id commodo tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vehicula quam vitae est laoreet, id volutpat libero pellentesque. Fusce id nulla ultrices, dictum nunc sit amet, lacinia nibh. Quisque egestas ante egestas urna condimentum fringilla. In vitae arcu nec orci pulvinar bibendum non et dui. Nunc neque magna, euismod vel libero sed, elementum lobortis neque. Phasellus dictum eu eros vitae auctor. Sed facilisis porttitor dolor id convallis. Proin tempus turpis massa, sed malesuada arcu auctor ut. Aenean iaculis nisi eget nunc consequat, id egestas massa finibus. Etiam nibh magna, euismod non risus eget, lacinia tincidunt quam.'

    },
    {
        id: 11,
        src: img10,
        title: 'valentino spring/summer 2021 favourites',
        category: 'looks',
        desc: 'In this post you will discover a few of my favourite pieces from Valentino’s Spring/Summer RTW collection.',
        fullDesc: 'Ladies and Gentlemen Trench Kelly 25 in for my best packing tips. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id sem eu felis rutrum mattis. Aliquam vitae diam justo. Cras id commodo tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vehicula quam vitae est laoreet, id volutpat libero pellentesque. Fusce id nulla ultrices, dictum nunc sit amet, lacinia nibh. Quisque egestas ante egestas urna condimentum fringilla. In vitae arcu nec orci pulvinar bibendum non et dui. Nunc neque magna, euismod vel libero sed, elementum lobortis neque. Phasellus dictum eu eros vitae auctor. Sed facilisis porttitor dolor id convallis. Proin tempus turpis massa, sed malesuada arcu auctor ut. Aenean iaculis nisi eget nunc consequat, id egestas massa finibus. Etiam nibh magna, euismod non risus eget, lacinia tincidunt quam.'

    },
    {
        id: 12,
        src: img12,
        title: 'valentino spring/summer 2021 favourites',
        category: 'looks',
        desc: 'In this post you will discover a few of my favourite pieces from Valentino’s Spring/Summer RTW collection.',
        fullDesc: 'Ladies and Gentlemen Trench Kelly 25 in for my best packing tips. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id sem eu felis rutrum mattis. Aliquam vitae diam justo. Cras id commodo tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vehicula quam vitae est laoreet, id volutpat libero pellentesque. Fusce id nulla ultrices, dictum nunc sit amet, lacinia nibh. Quisque egestas ante egestas urna condimentum fringilla. In vitae arcu nec orci pulvinar bibendum non et dui. Nunc neque magna, euismod vel libero sed, elementum lobortis neque. Phasellus dictum eu eros vitae auctor. Sed facilisis porttitor dolor id convallis. Proin tempus turpis massa, sed malesuada arcu auctor ut. Aenean iaculis nisi eget nunc consequat, id egestas massa finibus. Etiam nibh magna, euismod non risus eget, lacinia tincidunt quam.'

    },
    {
        id: 13,
        src: img13,
        title: 'spring summer 2021 beauty trends',
        category: 'beauty',
        desc: 'In this post you will find the latest beauty trends to experiment with this Spring! From Freckles to Bold Eye Shadow, its all in here',
        fullDesc: 'Ladies and Gentlemen Trench Kelly 25 in for my best packing tips. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id sem eu felis rutrum mattis. Aliquam vitae diam justo. Cras id commodo tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vehicula quam vitae est laoreet, id volutpat libero pellentesque. Fusce id nulla ultrices, dictum nunc sit amet, lacinia nibh. Quisque egestas ante egestas urna condimentum fringilla. In vitae arcu nec orci pulvinar bibendum non et dui. Nunc neque magna, euismod vel libero sed, elementum lobortis neque. Phasellus dictum eu eros vitae auctor. Sed facilisis porttitor dolor id convallis. Proin tempus turpis massa, sed malesuada arcu auctor ut. Aenean iaculis nisi eget nunc consequat, id egestas massa finibus. Etiam nibh magna, euismod non risus eget, lacinia tincidunt quam.'

    },
    {
        id: 14,
        src: img14,
        title: 'spring summer 2021 beauty trends',
        category: 'beauty',
        desc: 'In this post you will find the latest beauty trends to experiment with this Spring! From Freckles to Bold Eye Shadow, its all in here',
        fullDesc: 'Ladies and Gentlemen Trench Kelly 25 in for my best packing tips. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id sem eu felis rutrum mattis. Aliquam vitae diam justo. Cras id commodo tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vehicula quam vitae est laoreet, id volutpat libero pellentesque. Fusce id nulla ultrices, dictum nunc sit amet, lacinia nibh. Quisque egestas ante egestas urna condimentum fringilla. In vitae arcu nec orci pulvinar bibendum non et dui. Nunc neque magna, euismod vel libero sed, elementum lobortis neque. Phasellus dictum eu eros vitae auctor. Sed facilisis porttitor dolor id convallis. Proin tempus turpis massa, sed malesuada arcu auctor ut. Aenean iaculis nisi eget nunc consequat, id egestas massa finibus. Etiam nibh magna, euismod non risus eget, lacinia tincidunt quam.'

    },
    {
        id: 15,
        src: img11,
        title: 'valentino spring/summer 2021 favourites',
        category: 'looks',
        desc: 'In this post you will discover a few of my favourite pieces from Valentino’s Spring/Summer RTW collection.',
        fullDesc: 'Ladies and Gentlemen Trench Kelly 25 in for my best packing tips. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id sem eu felis rutrum mattis. Aliquam vitae diam justo. Cras id commodo tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vehicula quam vitae est laoreet, id volutpat libero pellentesque. Fusce id nulla ultrices, dictum nunc sit amet, lacinia nibh. Quisque egestas ante egestas urna condimentum fringilla. In vitae arcu nec orci pulvinar bibendum non et dui. Nunc neque magna, euismod vel libero sed, elementum lobortis neque. Phasellus dictum eu eros vitae auctor. Sed facilisis porttitor dolor id convallis. Proin tempus turpis massa, sed malesuada arcu auctor ut. Aenean iaculis nisi eget nunc consequat, id egestas massa finibus. Etiam nibh magna, euismod non risus eget, lacinia tincidunt quam.'

    },
    {
        id: 16,
        src: img16,
        title: 'spring summer 2021 beauty trends',
        category: 'looks',
        desc: 'In this post you will find the latest beauty trends to experiment with this Spring! From Freckles to Bold Eye Shadow, its all in here',
        fullDesc: 'Ladies and Gentlemen Trench Kelly 25 in for my best packing tips. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id sem eu felis rutrum mattis. Aliquam vitae diam justo. Cras id commodo tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vehicula quam vitae est laoreet, id volutpat libero pellentesque. Fusce id nulla ultrices, dictum nunc sit amet, lacinia nibh. Quisque egestas ante egestas urna condimentum fringilla. In vitae arcu nec orci pulvinar bibendum non et dui. Nunc neque magna, euismod vel libero sed, elementum lobortis neque. Phasellus dictum eu eros vitae auctor. Sed facilisis porttitor dolor id convallis. Proin tempus turpis massa, sed malesuada arcu auctor ut. Aenean iaculis nisi eget nunc consequat, id egestas massa finibus. Etiam nibh magna, euismod non risus eget, lacinia tincidunt quam.'

    },
]

export const visitedCities = [
    'amsterdam', 'vienna', 'zurich', 'thailand', 'venice', 'florence',
    'mallorca', 'milan', 'maldives', 'los angeles', 'rome', 'paris', 'saint-tropez',
    'sevilla', 'costa rica', 'copenhagen', 'stockholm', 'dubai', 'crete', 'budapest',
    'brighton', 'brussels', 'barcelona', 'palm springs', 'new york', 'monaco', 'ibiza',
    'greece', 'positano'
]