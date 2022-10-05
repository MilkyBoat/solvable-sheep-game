import React from 'react';
import { Theme } from '../interface';
import bgm from './sounds/bgm.mp3';

const soundUrls = import.meta.glob('./sounds/*.mp3', {
    import: 'default',
    eager: true,
});

const sounds = Object.entries(soundUrls).map(([key, value]) => ({
    name: key.slice(9, -4),
    src: value,
})) as Theme<string>['sounds'];

const imagesUrls = import.meta.glob('./images/*.png', {
    import: 'default',
    eager: true,
});

const images = Object.entries(imagesUrls).map(([key, value]) => ({
    name: key.slice(9, -4),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    content: <img src={value} alt="" />,
}));

export const getDefaultTheme: () => Theme<string> = () => {
    return {
        title: '🐱猫了个鼠🐭',
        desc: '这里来点文案',
        dark: true,
        backgroundColor: '#8dac85',
        bgm: bgm,
        icons: images.map(({ name, content }) => ({
            name,
            content,
            clickSound: 'button-click',
            tripleSound: name,
        })),
        sounds,
    };
};
