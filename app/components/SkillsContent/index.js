import React from 'react';
import './intro.scss';

const SkillsContent = () => (
  <div className="skillsContentWrapper col-sm-12 col-xs-12">
    <div className="sectionHeading">Programming Languages & Softwares: </div>
    <div className="sectionContent">C++, Python, MATLAB, R, Mathematica</div>

    <div className="sectionHeading">Web-Development: </div>
    <div className="sectionContent">HTML, CSS, JavaScript, jQuery</div>

    <div className="sectionHeading">Courses at USC: </div>

    <li className="sectionSubHeading">Operations Management:</li>
    <div className="sectionContent">
      Inventory Models and Supply Chain Management, Current Research in
      Operations Management
    </div>

    <li className="sectionSubHeading">Optimization:</li>
    <div className="sectionContent">
      Linear Programming, Convex Optimization, Dynamic Programming and Markov
      Decision Processes
    </div>

    <li className="sectionSubHeading">Probability & Stochastics:</li>
    <div className="sectionContent">
      Real Analysis, Queueing and Stochastic Networks, Applied Probability
    </div>

    <li className="sectionSubHeading">Computer Science:</li>
    <div className="sectionContent">
      Analysis of Algorithms, Approximation Algorithms, Machine Learning
    </div>

    <li className="sectionSubHeading">Economics:</li>
    <div className="sectionContent">Microeconomic Theory, Game Theory</div>
  </div>
);

export default SkillsContent;
