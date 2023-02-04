import React from 'react';
import cn from 'classnames';

import {SidebarProps} from './Sidebar.props';
import styles from './Sidebar.module.css';

export default function Sidebar({className, ...props}: SidebarProps): JSX.Element {
    return (
        <aside
            className={cn(className, styles.sidebar)}
            {...props}
        >
            Sidebar
        </aside>
    );
}
