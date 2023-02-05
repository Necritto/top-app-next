import {createContext, PropsWithChildren, useEffect, useState} from 'react';

import {IMenuItem} from '@/core/types/menu';
import {PagesCategory} from '@/core/types/page';

export interface IMenuCntext {
    menu: IMenuItem[];
    firstCategory: PagesCategory;
    setMenu?: (newMenu: IMenuItem[]) => void;
}

const initialContext: IMenuCntext = {
    menu: [],
    firstCategory: PagesCategory.Courses,
};

export const MenuContext = createContext<IMenuCntext>(initialContext);

export const MenuContextProvider = ({menu, firstCategory, children}: PropsWithChildren<IMenuCntext>): JSX.Element => {
    const [menuState, setMenuState] = useState<IMenuItem[]>(menu);

    const setMenu = (newMenu: IMenuItem[]): void => {
        setMenuState(newMenu);
    };

    useEffect(() => {
        setMenu(menu);
    }, [menu]);

    return <MenuContext.Provider value={{menu: menuState, firstCategory, setMenu}}>{children}</MenuContext.Provider>;
};
