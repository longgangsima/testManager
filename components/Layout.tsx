/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */
import Head from 'next/head';
import { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';

type Props = {
  children?: ReactNode;
  title?: string;
  hasTitle: boolean;
};

const Layout = ({ children, title = 'This is the default title', hasTitle = false }: Props) => {
  console.log('hasTile', hasTitle);
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      {/* <aside className="w-64" aria-label="Sidebar"> */}
      <Sidebar />
      {/* </aside> */}

      {/* Main content area */}
      <div className="flex flex-col flex-auto border-6 border-gray-200 h-full">
        {/* This Header will not display but rather the title of this web app */}
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        {/* Title */}
        {/* has two Headers: 1: is must have*/}

        {/* <header>
          <h1>{title}</h1>
        </header> */}

        {/*2: one is optional based on the page you are right now: hasTitle*/}

        {/* {hasTitle ? (
          <header>
            <h1>{title}</h1>
          </header>
        ) : null} */}

        {/* Page content */}
        {children}

        <footer>
          <hr />
          <div>I'm here to stay (Footer)</div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
