import {PagesCategory} from './page';

export interface IPageItem {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

export interface IMenuItem {
    _id: {
        secondCategory: string;
    };
    pages: IPageItem[];
    wasOpen?: boolean;
}

export interface FirstLevelMenu {
    route: string;
    name: string;
    icon: JSX.Element;
    id: PagesCategory;
}
