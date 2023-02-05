import React from 'react';
import cn from 'classnames';

import {Menu} from '@/components/Menu';
import LogoSvg from '@/assets/images/icons/logo.svg';

import {SidebarProps} from './Sidebar.props';
import styles from './Sidebar.module.css';

export default function Sidebar({className, ...props}: SidebarProps): JSX.Element {
    return (
        <aside
            className={cn(className, styles.sidebar)}
            {...props}
        >
            <LogoSvg className={styles.logo} />
            <div className="">Поиск ...</div>
            <Menu />
        </aside>
    );
}
