import React from 'react';
import { ILayoutProps } from './Layout.props';

export const Layout = ({children}: ILayoutProps): JSX.Element => {
  return (
    <>
    <Header />
    <div className="">
        <Sidebar />
        <div>
            {children}
        </div>
        <Footer />
    </div>
    
    </>
  );
};
