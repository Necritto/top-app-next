import React from 'react';
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from 'next';
import axios from 'axios';
import {ParsedUrlQuery} from 'node:querystring';

import {MENU, PRODUCTS} from '@/core/constants/api';
import {IMenuItem} from '@/core/types/menu';
import {IPageModel} from '@/core/types/page';
import {ICourseModel} from '@/core/types/courses';

const firstCategory = 0;

function Course({menu, page, courses}: ICourseProps): React.ReactElement {
    return (
        <>
            menu: {menu && menu.length} | page: {page && page.alias} | products: {courses && courses.length}
        </>
    );
}

export default Course;

export const getStaticPaths: GetStaticPaths = async () => {
    const {data: menu} = await axios.post<IMenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}${MENU.DEFAULT}`, {
        firstCategory,
    });

    return {
        paths: menu.flatMap(({pages}) => pages.map(({alias}) => `/courses/${alias}`)),
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true,
        };
    }

    const {data: menu} = await axios.post<IMenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}${MENU.DEFAULT}`, {
        firstCategory,
    });
    const {data: page} = await axios.get<IPageModel>(
        `${process.env.NEXT_PUBLIC_DOMAIN}${MENU.DETAILS(params.alias as string)}`,
    );
    const {data: courses} = await axios.post<ICourseModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}${PRODUCTS.DEFAULT}`, {
        category: page.category,
        limit: 10,
    });

    return {
        props: {
            menu,
            firstCategory,
            page,
            courses,
        },
    };
};

interface ICourseProps extends Record<string, unknown> {
    menu: IMenuItem[];
    page: IPageModel;
    courses: ICourseModel[];
    firstCategory: number;
}
