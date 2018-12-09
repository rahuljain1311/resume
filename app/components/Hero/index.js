import React from 'react';
import styled from 'styled-components';
import photo from './assets/photo.png';
import './hero.scss';
import { withResponsive } from '../../hoc/with-responsive';

const Intro = styled.div`
  display: flex;
  height: 90%;
`;

const Social = styled.div`
  height: 10%;
`;

const H1 = styled.div`
  line-height: 1.3em;
  font-size: 26px;
  letter-spacing: 0.05em;
`;

// const H2 = styled.div`
//   line-height: 1.3em;
//   font-size: 23px;
//   letter-spacing: 0.05em;
// `;

// const H3 = styled.div`
//   line-height: 1.3em;
//   font-size: 20px;
//   letter-spacing: 0.05em;
// `;

const H4 = styled.div`
  line-height: 1.3em;
  font-size: 14px;
  letter-spacing: 0.05em;
`;

/* eslint-disable react/prefer-stateless-function */
class Hero extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="heroWrapper">
          <Intro className="row">
            <div className="col-md-6 col-xs-12 text-center">
              <img src={photo} className="photo" alt="" />
            </div>
            <div className="col-md-6 col-xs-12 content">
              <div className="title">
                <H1>Shobhit Jain</H1>
                <p />
                <H4>
                  <b>PhD Candidate</b>
                </H4>
                <H4>
                  <b>Data Sciences and Operations</b>
                </H4>
                <H4>
                  <b>Marshall School of Business</b>
                </H4>
                <H4>
                  <b>University of Southern California</b>
                </H4>
                <p />
              </div>
              <div>
                <H4>
                  <b>Email:</b>
                </H4>
                <H4>shobhit.jain.phd@marshall.usc.edu</H4>
                <p />
              </div>
              <div>
                <H4>
                  <b>Contact Information:</b>
                </H4>
                <H4>Bridge Hall (BRI) 401J</H4>
                <H4>USC Marshall School of Business</H4>
                <H4>Los Angeles, CA 90089-0808</H4>
                <p />
              </div>
            </div>
          </Intro>
          <Social className="social">social</Social>
        </div>
      </div>
    );
  }
}

export default withResponsive(Hero);
