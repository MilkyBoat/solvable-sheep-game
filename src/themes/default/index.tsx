import React from 'react';
import { Theme } from '../interface';
import bgm from './sounds/bgm.mp3';

const soundUrls = import.meta.glob('./sounds/*.mp3', {
    import: 'default',
    eager: true,
});

const sounds = Object.entries(soundUrls).map(([key, value]) => {
    const { MODE, VITE_STATIC_CDN_URL } = import.meta.env;
    const filename = key.slice(9);
    let soundShortUrl = `${VITE_STATIC_CDN_URL}/${filename}`;
    if (MODE === 'development') {
        soundShortUrl = new URL(`./sounds/${filename}`, import.meta.url).href;
    }
    return {
        name: filename.slice(0, -4),
        src: soundShortUrl,
    };
}) as Theme<string>['sounds'];

const imagesUrls = import.meta.glob('./images/*.jpg', {
    import: 'default',
    eager: true,
});

const images = Object.entries(imagesUrls).map(([key, value]) => {
    const { MODE, VITE_STATIC_CDN_URL } = import.meta.env;
    const filename = key.slice(9);
    let imageShortUrl = `${VITE_STATIC_CDN_URL}/${filename}`;
    if (MODE === 'development') {
        imageShortUrl = new URL(`./images/${filename}`, import.meta.url).href;
    }
    return {
        name: filename.slice(0, -4),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        content: <img src={imageShortUrl} alt="" />,
    };
});

export const getDefaultTheme: () => Theme<string> = () => {
    return {
        title: '🐱猫了个鼠🐭',
        desc: 'bilibili @举苯欲饮无管弦 @辣稽小辣稽',
        dark: true,
        backgroundColor: '#75b7cf',
        bgm: bgm,
        icons: images.map(({ name, content }) => ({
            name,
            content,
            clickSound: 'sound-shift',
            tripleSound: name,
        })),
        sounds,
    };
};
