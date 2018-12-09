/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import ResearchContent from '../../components/ResearchContent';

export default class FeaturePage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <article>
        <ResearchContent />
      </article>
    );
  }
}
