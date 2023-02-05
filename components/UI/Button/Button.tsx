import React from 'react';
import cn from 'classnames';

import ArrowSvg from '@/assets/images/icons/arrow.svg';

import {ButtonProps} from './Button.props';
import styles from './Button.module.css';

export default function Button({
    appearence = 'primary',
    arrow,
    children,
    className,
    ...props
}: ButtonProps): JSX.Element {
    return (
        <button className={cn(styles.button, className, styles[appearence])}
            {...props}>
            {children}
            {arrow && <ArrowSvg className={cn(styles.arrow, styles[arrow])} />}
        </button>
    );
}
