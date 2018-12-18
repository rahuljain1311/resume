import React from 'react';
import styled from 'styled-components';

const HeaderWrapperDesktop = styled.div`
  height: 80px;
  display: flex;
  color: #182153;
  align-items: center;
  background-color: #ffffff;
  padding-left: 40%;
  font: normal normal normal 14px/1.4em avenir-lt-w01_35-light1475496,
    sans-serif;
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
  margin-left: 10%;
  color: #182153;
  visited: #182153;
  hover: #182153;
  active: #aeb4d4;
`;

const LinkItemMobile = styled.a`
  margin-right: 5%;
  margin-left: 5%;
  color: #182153;
  visited: #182153;
  hover: #182153;
  active: #aeb4d4;
  font-size: 15px;
`;

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <>
        <MobileHeader className="d-block d-sm-none">
          <LinksContainer>
            <LinkItemMobile href="/">ABOUT</LinkItemMobile>
            <LinkItemMobile href="/research">RESEARCH</LinkItemMobile>
            <LinkItemMobile href="/skills">SKILLS</LinkItemMobile>
            <LinkItemMobile href="https://drive.google.com/file/d/1Jd1Q2UZ2_9LhmSSKWi6ASwxVXHQheE8t/view?usp=sharing">
              CV
            </LinkItemMobile>
          </LinksContainer>
        </MobileHeader>

        <div className="d-none d-sm-block">
          <HeaderWrapperDesktop>
            <LinksContainer>
              <LinkItem href="/">ABOUT</LinkItem>
              <LinkItem href="/research">RESEARCH</LinkItem>
              <LinkItem href="/skills">SKILLS</LinkItem>
              <LinkItem href="https://drive.google.com/file/d/1Jd1Q2UZ2_9LhmSSKWi6ASwxVXHQheE8t/view?usp=sharing">
                CV
              </LinkItem>
            </LinksContainer>
          </HeaderWrapperDesktop>
        </div>
      </>
    );
  }
}

export default Header;
