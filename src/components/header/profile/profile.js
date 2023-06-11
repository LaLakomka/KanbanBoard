
import React from "react";
import {IconStrelka} from "../../shared/icons/IconStrelka";
import {IconAvatar} from "../../shared/icons/IconAvatar";
import css from './profile.module.scss';
import {useState} from "react";

export const Profile = () => {
    const [isMenuShown, setIsMenuShown] = useState(false);

    return (
        <div className={css.profile}
             onClick={() => setIsMenuShown(!isMenuShown)}>
            <IconAvatar/>
            <div className={`${css.strelka} ${isMenuShown ? css.up : ''}`}>
                <IconStrelka/>
            </div>

            {isMenuShown && <div className={css.menu}>
                <div>Profile</div>
                <div>Log Out</div>
            </div>
            }
        </div>
    )
}