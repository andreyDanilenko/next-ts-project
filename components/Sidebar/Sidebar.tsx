import cn from 'classnames';
import React from 'react';
import styles from './Sidebar.module.css';
import { LogoIcon } from '../../assets/image/icons';
import { Menu } from "../index";
import { ISidebarProps } from './Sidebar.props';

export const Sidebar = ({ className, ...props }: ISidebarProps): JSX.Element => {
  return (
    <aside {...props} className={cn(className, styles.sidebar)}>
      <LogoIcon className={styles.logo} />
      <div className="">Search</div>
      <Menu />
    </aside>
  );
};
