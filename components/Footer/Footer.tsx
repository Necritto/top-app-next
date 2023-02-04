import React from 'react';
import cn from 'classnames';
import dayjs from 'dayjs';

import {FooterProps} from './Footer.props';
import styles from './Footer.module.css';

export default function Footer({className, ...props}: FooterProps): JSX.Element {
    return (
        <footer
            className={cn(className, styles.footer)}
            {...props}
        >
            <p className={styles.text}>TopApp &copy; 1970&nbsp;&mdash; {dayjs().year()} Все права защищены</p>
            <a
                className={cn(styles.text, styles.link)}
                href="#"
            >
                Пользовательское соглашение
            </a>
            <a
                className={cn(styles.text, styles.link)}
                href="#"
            >
                Политика конфиденциальности
            </a>
        </footer>
    );
}
