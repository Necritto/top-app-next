import React from 'react';
import {GetStaticProps} from 'next';
import axios from 'axios';

import {withLayout} from '@/hoc/withLayout';
import {MENU} from '@/core/constants/api';
import {IMenuItem} from '@/core/types/menu';

function Home({menu}: IHomeProps): React.ReactElement {
    return (
        <ul>
            {menu.map((m) => (
                <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
            ))}
        </ul>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
    const firstCategory = 0;

    const {data} = await axios.post<IMenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}${MENU.DEFAULT}`, {firstCategory});

    return {
        props: {
            menu: data,
            firstCategory,
        },
    };
};

interface IHomeProps extends Record<string, unknown> {
    menu: IMenuItem[];
    firstCategory: number;
}
