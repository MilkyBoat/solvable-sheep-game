import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.scss';
import './styles/utils.scss';
import {
    DEFAULT_BGM_STORAGE_KEY,
    domRelatedOptForTheme,
    parsePathCustomThemeId,
    wrapThemeDefaultSounds,
} from './utils';
import { getDefaultTheme } from './themes/default';
import { Theme } from './themes/interface';

// react渲染
const render = (theme: Theme<any>) => {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <React.StrictMode>
            <App theme={theme} />
        </React.StrictMode>
    );
};

// 错误提示
const errorTip = (tip: string) => {
    setTimeout(() => {
        document.getElementById('loading')?.classList.add('error');
        document.getElementById('loadingText')!.innerText = tip;
        document.getElementById('backHomeTip')!.style.visibility = 'visible';
    }, 600);
};

// 加载成功后数据转换（runtime）以及转场
const successTrans = (theme: Theme<any>) => {
    wrapThemeDefaultSounds(theme);

    setTimeout(() => {
        domRelatedOptForTheme(theme);
        const root = document.getElementById('root');
        root!.style.opacity = '0';
        document.getElementById('loading')?.classList.add('success');
        setTimeout(() => {
            render(theme);
            root!.style.opacity = '1';
        }, 600);
    }, 500);
};

// 从url初始化主题
const customThemeIdFromPath = parsePathCustomThemeId(location.href);

const loadTheme = () => {
    // 请求主题
    successTrans(getDefaultTheme());
};

// 音效资源请求
loadTheme();
