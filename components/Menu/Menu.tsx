import {useRouter} from 'next/router';
import Link from 'next/link';
import React, {useContext} from 'react';
import cn from 'classnames';

import {MenuContext} from '@/core/context/menu.context';
import {IPageItem} from '@/core/types/menu';
import {firstLevelMenu} from '@/core/models/Menu';

import styles from './Menu.module.css';

export default function Menu(): JSX.Element {
    const router = useRouter();
    const {menu, setMenu, firstCategory} = useContext(MenuContext);

    const onOpenSubmenu = (secondCategory: string): void => {
        if (!setMenu) {
            return;
        }

        const changedMenu = menu.map((menuItem) => {
            if (menuItem._id.secondCategory === secondCategory) {
                menuItem.wasOpen = !menuItem.wasOpen;
            }

            return menuItem;
        });

        setMenu(changedMenu);
    };

    const onRedirectToTypePage = (route: string, event: React.MouseEvent<HTMLAnchorElement>): void => {
        if (router.asPath === route) {
            event.preventDefault();
        }
    };

    const buildFirstLevelMenu = (): JSX.Element => {
        return (
            <ul className={styles['first-level']}>
                {firstLevelMenu.map((flMenu) => (
                    <li
                        key={flMenu.route}
                        className={cn(styles['first-level__item'], {
                            [styles.active]: flMenu.id === firstCategory,
                        })}
                    >
                        <Link
                            href={`/${flMenu.route}`}
                            className={styles['first-level__link']}
                            onClick={(event) => onRedirectToTypePage(`/${flMenu.route}`, event)}
                        >
                            {flMenu.icon}
                            <span>{flMenu.name}</span>
                        </Link>
                        {flMenu.id === firstCategory && buildSecondLevelMenu(flMenu.route)}
                    </li>
                ))}
            </ul>
        );
    };

    const buildSecondLevelMenu = (route: string): JSX.Element => {
        return (
            <ul className={styles['second-level']}>
                {menu.map((slMenu) => {
                    const isSubmenuActive = slMenu.pages.map(({alias}) => alias).includes(router.asPath.split('/')[2]);

                    return (
                        <li
                            key={slMenu._id.secondCategory}
                            className={styles['second-level__item']}
                        >
                            <button
                                className={styles['second-level__text']}
                                onClick={() => !isSubmenuActive && onOpenSubmenu(slMenu._id.secondCategory)}
                            >
                                {slMenu._id.secondCategory}
                            </button>
                            {buildThirdLevelMenu(slMenu.pages, route, isSubmenuActive || slMenu.wasOpen)}
                        </li>
                    );
                })}
            </ul>
        );
    };

    const buildThirdLevelMenu = (pages: IPageItem[], route: string, wasOpen?: boolean): JSX.Element => {
        return (
            <ul className={cn(styles['third-level'], {[styles.opened]: wasOpen})}>
                {pages.map((tlMenu) => {
                    const currentRoute = `/${route}/${tlMenu.alias}`;

                    return (
                        <li
                            key={tlMenu._id}
                            className={cn(styles['third-level__item'], {
                                [styles.active]: router.asPath === currentRoute,
                            })}
                        >
                            <Link
                                href={currentRoute}
                                className={styles['third-level__link']}
                                onClick={(event) => onRedirectToTypePage(currentRoute, event)}
                            >
                                {tlMenu.category}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        );
    };

    return <nav className={styles.menu}>{buildFirstLevelMenu()}</nav>;
}
