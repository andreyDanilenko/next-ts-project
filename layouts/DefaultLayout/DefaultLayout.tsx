import React, { FunctionComponent } from 'react';
import { Footer, Header, Sidebar } from '../../components';
import { ILayoutProps } from './DefaultLayout.props';

const DefaultLayout = ({ children }: ILayoutProps): JSX.Element => {
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

export const withDefaultLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withDefaultLayoutComponent(props:T): JSX.Element {
         return (
          <DefaultLayout>
            <Component {...props} />
          </DefaultLayout>
         );
  };
};