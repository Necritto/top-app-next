import React from 'react';
import cn from 'classnames';

import {HeaderProps} from './Header.props';
import styles from './Header.module.css';

export default function Header({className, ...props}: HeaderProps): JSX.Element {
    return (
        <header
            className={cn(className, styles.header)}
            {...props}
        >
            Header
        </header>
    );
}
