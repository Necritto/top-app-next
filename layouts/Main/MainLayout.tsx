import React from 'react';

import {Header} from '@/components/Header';
import {Sidebar} from '@/components/Sidebar';
import {Footer} from '@/components/Footer';

import {MainLayoutProps} from './MainLayout.props';
import styles from './MainLayout.module.css';

export default function MainLayout({children}: MainLayoutProps): JSX.Element {
    return (
        <section className={styles.wrapper}>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <main className={styles.body}>{children}</main>
            <Footer className={styles.footer} />
        </section>
    );
}
