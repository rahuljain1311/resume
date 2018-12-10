import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
  border-top: 1px solid #666;
  color: #2f2e2e;
  font-size: 12px;
  background-size: auto;
  padding-left: 20%;
`;

function Footer() {
  return <FooterWrapper>© 2019 By Shobhit Jain.</FooterWrapper>;
}

export default Footer;
