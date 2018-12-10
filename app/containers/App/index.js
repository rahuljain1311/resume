/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';

import HomePage from 'containers/HomePage/Loadable';
import ResearchPage from 'containers/ResearchPage/Loadable';
import SkillsPage from 'containers/SkillsPage/Loadable';
import GlobalStyle from '../../global-styles';
import { withResponsive } from '../../hoc/with-responsive';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const App = () => (
  <AppWrapper>
    <Helmet
      titleTemplate="%s - React.js Boilerplate"
      defaultTitle="Shobhit Jain"
    >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/research" component={ResearchPage} />
      <Route path="/skills" component={SkillsPage} />
    </Switch>
    <Footer />
    <GlobalStyle />
  </AppWrapper>
);

export default withResponsive(App);
