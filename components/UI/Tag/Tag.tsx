import React from 'react';
import cn from 'classnames';

import {TagProps} from './Tag.props';
import styles from './Tag.module.css';

export default function Tag({
    size = 'md',
    color = 'ghost',
    href,
    children,
    className,
    ...props
}: TagProps): JSX.Element {
    return (
        <div
            className={cn(styles.tag, className, styles[size], styles[color])}
            {...props}
        >
            {href ? (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {children}
                </a>
            ) : (
                <>{children}</>
            )}
        </div>
    );
}
