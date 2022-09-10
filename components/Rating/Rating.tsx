import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './Rating.module.css';
import { IRatingProps } from './Rating.props';
import { StarIcon } from '../../assets/image/icons';


export const Rating = ({isEditable = false, rating, setRating, ...props}: IRatingProps) => {
  const [ratings, setRatings] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(()=> {
     constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updated = ratings.map((r: JSX.Element, i: number)=> {
        return (
            <StarIcon className={cn(styles.star, {
                [styles.filled]: i < currentRating
            })} 
            onMouseEnter={()=> changeDisplay(i+1)}
            onMouseLeave={()=> changeDisplay(rating)}
            />
        );
    });
    setRatings(updated);
  };

  const changeDisplay = (i: number) => {
    if(!isEditable) return;
    constructRating(i);
  };

  return (
    <div {...props}>
        {ratings.map((r, i)=> (<span key={i}>{r}</span>))}
    </div>
  );
};
