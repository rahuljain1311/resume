import React from 'react';
import styled from 'styled-components';
import './intro.scss';

const SectionTitle = styled.div`
  font: normal normal normal 25px/1.4em avenir-lt-w01_35-light1475496,
    sans-serif;
  text-align: center;
  margin-top: 10%;
  margin-bottom: 2%;
`;

const SectionHeading = styled.div`
  font-weight: bold;
  font: normal normal normal 20px/1.4em avenir-lt-w01_35-light1475496,
    sans-serif;
`;

const SectionContent = styled.div`
  font: normal normal normal 15px/1.4em avenir-lt-w01_35-light1475496,
    sans-serif;
`;

const Video = styled.div`
  text-align: center;
  padding-top: 20px;
  width: 100%;
  max-width: 300px;
`;

const ResearchContent = () => (
  <div className="researchContentWrapper">
    <SectionTitle>Submitted Papers</SectionTitle>
    <SectionHeading>
      K. Drakopoulos, S. Jain, R. Randhawa,{' '}
      <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3191629">
        {' '}
        “Persuading Customers to Buy Early: The Value of Personalized
        Information Provisioning”{' '}
      </a>{' '}
      Under revision for Management Science.{' '}
    </SectionHeading>
    <SectionContent>
      We study the pricing & information provisioning game of a seller who is
      (ex-post) better informed about product availability. Using a Bayesian
      persuasion framework, we find that public information provisioning has
      limited value while personalized information provisioning is profitable,
      having attributes like personalized pricing.
    </SectionContent>

    <Video>
      <iframe
        src="https://www.youtube.com/embed/I29DYBlCOGY"
        frameBorder="0"
        allowFullScreen
        title="Persuading Customers to Buy Early: The Value of Personalized Information Provisioning"
      />
    </Video>

    <SectionTitle>Working Papers</SectionTitle>
    <SectionHeading>
      K. Drakopoulos, S. Jain, R. Randhawa, “Searching for an Infection in a
      Network”{' '}
    </SectionHeading>
    <SectionContent>
      {' '}
      We study the problem of finding an infected node in the least possible
      time in a given graph in which the infection spreads deterministically
      from an unknown infected node to its neighbours. We formulate the problem
      as an equivalent graph covering problem and develop an integer linear
      program for the same. We show that the problem is NP Hard for an arbitrary
      graph and derive polynomial time search policies for trees.{' '}
    </SectionContent>
  </div>
);

export default ResearchContent;
