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
                <h6>Rachel Smith</h6>
                LAWYER & CONSULTANT
              </div>
              <div>
                <h6>Phone:</h6>
                123-456-7890
              </div>
              <div>
                <h6>Email:</h6>
                info@mysite.com
              </div>
              <div>
                <h6>Address:</h6>
                <p>500 Terry Francois Street</p>
                San Francisco, CA 94158
              </div>
              <div>
                <h6>Date of Birth:</h6>
                March 14th, 1984
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
