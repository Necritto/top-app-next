import React from 'react';
import {Button} from '@/components/UI/Button';
import {Tag} from '@/components/UI/Tag';

export default function Home(): React.ReactElement {
    return (
        <div>
            <Button arrow="right">Hello</Button>
            <Button appearence="ghost">Hello</Button>
            <Tag>Ghost</Tag>
            <Tag size="lg" color="primary">
                Primary
            </Tag>
            <Tag color="red">Red</Tag>
            <Tag color="grey">Grey</Tag>
            <Tag color="green" href="/">
                Green
            </Tag>
        </div>
    );
}
