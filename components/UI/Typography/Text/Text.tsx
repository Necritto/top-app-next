import React from 'react';
import cn from 'classnames';

import {TextProps} from './Text.props';
import styles from './Text.module.css';

export default function Text({size = 'md', children, className, ...props}: TextProps): JSX.Element {
    return (
        <p className={cn(styles.text, className, styles[size])} {...props}>
            {children}
        </p>
    );
}
