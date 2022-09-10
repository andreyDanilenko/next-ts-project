import React from 'react';
import { Footer, Header, Sidebar } from '../../components';


import { ILayoutProps } from './Layout.props';

export const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div className="">
        <Sidebar />
        <div>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};
