import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from '../NavBar';
import { Masthead } from './Masthead';
import { Features } from './Features';
import { PageWrapper } from 'app/components/PageWrapper';

export function Page2() {
  return (
    <>
      <Helmet>
        <title>Página 2</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <NavBar />
      <PageWrapper>
        {/*<P className="text-4xl text-blue-400">ssss</P>*/}
        <Masthead />
        <Features />
      </PageWrapper>
    </>
  );
}
