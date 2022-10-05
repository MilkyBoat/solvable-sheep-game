import React, { CSSProperties, FC, useState } from 'react';
import style from './Info.module.scss';
import classNames from 'classnames';
export const Info: FC = () => {
    const [open, setOpen] = useState(false);
    return (
        <div
            onClick={() => !open && setOpen(true)}
            className={classNames(style.info, open && style.open)}
        >
            <div className={style.icon}>i</div>
            <p>
                bgm素材：
                <a
                    href="https://www.bilibili.com/video/BV1rS4y1x7Gv/"
                    target="_blank"
                    rel="noreferrer"
                >
                    淦得蒸蚌
                </a>
            </p>
            <p>
                玩法来源➡️羊了个羊➡️
                <a
                    href="https://play.google.com/store/apps/details?id=tile.master.connect.matching.game"
                    target="_blank"
                    rel="noreferrer"
                >
                    3 Tiles
                </a>
            </p>
            <p>
                项目来源
                <a
                    href="https://github.com/StreakingMan/solvable-sheep-game"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub：@StreakingMan
                </a>
            </p>
            <p>仅供交流，禁止商用</p>
            <div className={style.close} onClick={() => setOpen(false)}>
                X
            </div>
        </div>
    );
};
