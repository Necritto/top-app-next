import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from 'next';
import React from 'react';
import axios from 'axios';
import {ParsedUrlQuery} from 'node:querystring';

import {withLayout} from '@/hoc/withLayout';
import {IMenuItem} from '@/core/types/menu';
import {MENU} from '@/core/constants/api';
import {firstLevelMenu} from '@/core/models/Menu';
import {PagesCategory} from '@/core/types/page';

function TypeIndex({firstCategory}: ITypeIndexProps): React.ReactElement {
    return <>{firstCategory}</>;
}

export default withLayout(TypeIndex);

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: firstLevelMenu.map(({route}) => `/${route}`),
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true,
        };
    }

    const firstCategoryItem = firstLevelMenu.find(({route}) => route === params.type);

    if (!firstCategoryItem) {
        return {
            notFound: true,
        };
    }

    try {
        const {data: menu} = await axios.post<IMenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}${MENU.DEFAULT}`, {
            firstCategory: firstCategoryItem.id,
        });

        if (!menu.length) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                menu,
                firstCategory: firstCategoryItem.id,
            },
        };
    } catch {
        return {
            notFound: true,
        };
    }
};

interface ITypeIndexProps extends Record<string, unknown> {
    menu: IMenuItem[];
    firstCategory: PagesCategory;
}
