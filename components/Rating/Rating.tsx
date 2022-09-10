import React, { useEffect, useState, KeyboardEvent } from 'react';
import cn from 'classnames';
import styles from './Rating.module.css';
import { IRatingProps } from './Rating.props';
import { StarIcon } from '../../assets/image/icons';


export const Rating = ({ isEditable = false, rating, setRating, ...props }: IRatingProps) => {
  const [ratings, setRatings] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updated = ratings.map((r: JSX.Element, i: number) => {
      return (
        <span className={cn(styles.star, {
          [styles.filled]: i < currentRating,
          [styles.editable]: isEditable
        })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}>
          <StarIcon
            onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
            tabIndex={isEditable ? 0 : -1}
          />
        </span>

      );
    });
    setRatings(updated);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) return;
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) return;
    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space' || !setRating) return;
    setRating(i);
  };

  return (
    <div {...props}>
      {ratings.map((r, i) => (<span key={i}>{r}</span>))}
    </div>
  );
};
