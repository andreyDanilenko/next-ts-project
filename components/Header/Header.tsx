import cn from 'classnames';
import React from 'react';

import styles from './Header.module.css';
import { IHeaderProps } from './Header.props';

export const Header = ({ className, ...props }: IHeaderProps) => {
  return (
    <div className={cn(className, styles.header)} {...props} {...props}>Header</div>
  );
};
