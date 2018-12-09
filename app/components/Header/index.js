import React from 'react';
import styled from 'styled-components';

const HeaderWrapperDesktop = styled.div`
  height: 80px;
  display: flex;
  color: #182153;
  align-items: center;
  background-color: #ffffff;
  padding-bottom: 30px;
  padding-top: 30px;
  padding-right: 60px;
  padding-left: 60px;
  font-size: 14px;
  font: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,
    sans-serif;
  text-align: center;
  line-height: 50px;
  margin: calc(-1 * 0px) 0px 0;
`;

const HeaderWrapperDesktopHeading = styled.div`
  font: normal normal normal 30px/1.4em avenir-lt-w01_35-light1475496,
    sans-serif;
  transition: color 0.4s ease 0s;
  color: #182153;
  position: relative;
`;

const MobileHeader = styled.div`
  background-color: #FFFFFF;
  padding-top 15px;
  padding-bottom: 15px;
  text-align: center;
  font-size: 27px;
  font: normal normal normal 30px/1.4em avenir-lt-w01_35-light1475496,sans-serif;
  transition: color 0.4s ease 0s;
  color: #182153;
  display: inline-block;
  margin: calc(-1 * 0px) 0px 0;
  position: relative;
  white-space: nowrap;
`;

const LinksContainer = styled.div`
  display: flex;
`;

const LinkItem = styled.a`
  margin-right: 20px;
  margin-left: 20px;
  color: #182153;
  visited: #182153;
  hover: #182153;
  active: #aeb4d4;
`;

const Space = styled.div`
  display: flex;
  flex-grow: 1;
`;

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <>
        <MobileHeader className="d-block d-sm-none">
          <span>Shobhit Jain</span>
        </MobileHeader>

        <div className="d-none d-sm-block">
          <HeaderWrapperDesktop>
            <HeaderWrapperDesktopHeading>
              Shobhit Jain
            </HeaderWrapperDesktopHeading>
            <Space />
            <LinksContainer>
              <LinkItem href="/research">RESEARCH</LinkItem>
              <LinkItem href="/skills">SKILLS</LinkItem>
              <LinkItem href="/cv">CV</LinkItem>
            </LinksContainer>
          </HeaderWrapperDesktop>
        </div>
      </>
    );
  }
}

export default Header;
