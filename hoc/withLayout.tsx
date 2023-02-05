import {FunctionComponent} from 'react';

import {MainLayout} from '@/layouts/Main';
import {IMenuCntext, MenuContextProvider} from '@/core/context/menu.context';

export const withLayout = <T extends Record<string, unknown> & IMenuCntext>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <MenuContextProvider
                menu={props.menu}
                firstCategory={props.firstCategory}
            >
                <MainLayout>
                    <Component {...props} />
                </MainLayout>
            </MenuContextProvider>
        );
    };
};
