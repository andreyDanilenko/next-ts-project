import React from 'react';
import { Menu } from "../index";
import { ISidebarProps } from './Sidebar.props';

export const Sidebar = ({ ...props }: ISidebarProps): JSX.Element => {
  return (
    <aside {...props}>
      <Menu />
    </aside>
  );
};
