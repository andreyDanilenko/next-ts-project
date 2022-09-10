import React, { FunctionComponent } from 'react';
import { Footer, Header, Sidebar } from '../../components';
import { ILayoutProps } from './DefaultLayout.props';
import styles from './DefaultLayout.module.css';

const DefaultLayout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>
        {children}
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withDefaultLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withDefaultLayoutComponent(props: T): JSX.Element {
    return (
      <DefaultLayout>
        <Component {...props} />
      </DefaultLayout>
    );
  };
};