import React from 'react';
import Button from '@/components/UI/Button/Button';

export default function Home(): React.ReactElement {
    return (
        <div>
            <Button arrow="right">Hello</Button>
            <Button appearence="ghost">Hello</Button>
        </div>
    );
}
