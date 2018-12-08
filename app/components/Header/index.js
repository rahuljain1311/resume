import React from 'react';
import styled from 'styled-components';
const HeaderWrapper = styled.div`
  display: flex;
  height: 101px;
  color: #182153;
  align-items: center;
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
        <div className="d-block d-sm-none">
          <span>mobile header</span>
        </div>
        <div className="d-none d-sm-block">
          <HeaderWrapper>
            <div>
              <p>Shobhit Jain</p>
            </div>
            <Space />
            <LinksContainer>
              <LinkItem href="/features">experience</LinkItem>
              <LinkItem>experience</LinkItem>
              <LinkItem>experience</LinkItem>
              <LinkItem>experience</LinkItem>
            </LinksContainer>
          </HeaderWrapper>
        </div>
      </>
    );
  }
}

export default Header;
