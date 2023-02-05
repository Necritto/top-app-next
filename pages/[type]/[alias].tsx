import React from 'react';
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from 'next';
import axios from 'axios';
import {ParsedUrlQuery} from 'node:querystring';

import {MENU, PRODUCTS} from '@/core/constants/api';
import {IMenuItem} from '@/core/types/menu';
import {IPageModel, PagesCategory} from '@/core/types/page';
import {ICourseModel} from '@/core/types/courses';
import {withLayout} from '@/hoc/withLayout';
import {firstLevelMenu} from '@/core/models/Menu';

function Course({menu, page, courses}: ICourseProps): React.ReactElement {
    return (
        <>
            menu: {menu && menu.length} | page: {page && page.alias} | products: {courses && courses.length}
        </>
    );
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];

    for (const menu of firstLevelMenu) {
        const {data} = await axios.post<IMenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}${MENU.DEFAULT}`, {
            firstCategory: menu.id,
        });

        paths = [...paths, ...data.flatMap(({pages}) => pages.map(({alias}) => `/${menu.route}/${alias}`))];
    }

    return {
        paths,
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

        const {data: page} = await axios.get<IPageModel>(
            `${process.env.NEXT_PUBLIC_DOMAIN}${MENU.DETAILS(params.alias as string)}`,
        );
        const {data: courses} = await axios.post<ICourseModel[]>(
            `${process.env.NEXT_PUBLIC_DOMAIN}${PRODUCTS.DEFAULT}`,
            {
                category: page.category,
                limit: 10,
            },
        );

        return {
            props: {
                menu,
                firstCategory: firstCategoryItem.id,
                page,
                courses,
            },
        };
    } catch {
        return {
            notFound: true,
        };
    }
};

interface ICourseProps extends Record<string, unknown> {
    menu: IMenuItem[];
    page: IPageModel;
    courses: ICourseModel[];
    firstCategory: PagesCategory;
}
