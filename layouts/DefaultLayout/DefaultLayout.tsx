import React, { FunctionComponent } from 'react';
import { Footer, Header, Sidebar } from '../../components';
import { ILayoutProps } from './DefaultLayout.props';
import styles from './DefaultLayout.module.css';
import { AppContextProvider, IAppContext } from '../../context/app.context';

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

export const withDefaultLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
  return function withDefaultLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      </AppContextProvider>
    );
  };
};