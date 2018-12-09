import React from 'react';
import styled from 'styled-components';
const HeaderWrapper = styled.div`
  display: flex;
  height: 101px;
  color: #182153;
  align-items: center;
`;

const MobileHeader = styled.div`
  background-color: grey;
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
  padding: 5px;
  margin: 10px 0;
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
          <HeaderWrapper>
            <div>
              <p>Shobhit Jain</p>
            </div>
            <Space />
            <LinksContainer>
              <LinkItem href="/features">RESEARCH</LinkItem>
              <LinkItem>SKILLS</LinkItem>
              <LinkItem>CV</LinkItem>
            </LinksContainer>
          </HeaderWrapper>
        </div>
      </>
    );
  }
}

export default Header;
