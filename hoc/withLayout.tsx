import {FunctionComponent} from 'react';

import {MainLayout} from '@/layouts/Main';

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <MainLayout>
                <Component {...props} />
            </MainLayout>
        );
    };
};
