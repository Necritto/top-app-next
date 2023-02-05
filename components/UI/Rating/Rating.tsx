import React, {useState, KeyboardEvent} from 'react';
import cn from 'classnames';

import {generateUniqueKey} from '@/core/helpers/generateUniqueKey';
import StarIcon from '@/assets/images/icons/star.svg';

import {RatingProps} from './Rating.props';
import styles from './Rating.module.css';

const MAX_RATING = 5;

export default function Rating({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element {
    const [currentRating, setCurrentRating] = useState<number>(rating);

    function onChangeRating(newRating: number): void {
        if (!isEditable || !setRating) {
            return;
        }

        setRating(newRating);
    }

    function onSpaceDown(event: KeyboardEvent<SVGAElement>, newRating: number): void {
        if (event.code !== 'Space') {
            return;
        }

        if (!isEditable || !setRating) {
            return;
        }

        setRating(newRating);
    }

    return (
        <div
            className={styles.rating}
            {...props}
        >
            {new Array(MAX_RATING).fill(1).map((_, index) => (
                <span
                    key={generateUniqueKey()}
                    className={cn(styles.star, {
                        [styles.filled]: index < rating,
                        [styles.filled]: index < currentRating,
                        [styles.editable]: isEditable,
                    })}
                    onClick={() => onChangeRating(index + 1)}
                    onMouseEnter={() => isEditable && setCurrentRating(index + 1)}
                    onMouseLeave={() => isEditable && setCurrentRating(rating)}
                >
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(event: KeyboardEvent<SVGAElement>) => onSpaceDown(event, index + 1)}
                    />
                </span>
            ))}
        </div>
    );
}
