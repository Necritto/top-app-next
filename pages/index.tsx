import React, {useState} from 'react';
import {Rating} from '@/components/UI/Rating';

export default function Home(): React.ReactElement {
    const [rating, setRating] = useState<number>(4);

    return (
        <div>
            <Rating
                rating={rating}
                setRating={setRating}
                isEditable
            />
        </div>
    );
}
