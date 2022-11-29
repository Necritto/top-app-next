import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    size?: 'md' | 'lg';
    color?: 'red' | 'ghost' | 'grey' | 'green' | 'primary';
    href?: string;
}
