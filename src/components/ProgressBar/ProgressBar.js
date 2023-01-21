/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  let Component;

  switch (size) {
    case 'large':
      Component = LargeProgressBar;
      break;
    case 'medium':
      Component = MediumProgressBar;
      break;
    case 'small':
      Component = SmallProgressBar;
      break;
  }
  return (<>
    <VisuallyHidden><label for="progress">File progress:</label></VisuallyHidden>
    <Component 
      id="progress"
      aria-label={value !== 100 ? `Progress: ${value}%` : 'Complete'}
      role="progressbar"
      max="100"
      value={value}
    >
      {value} %
    </Component>
  </>)
};

const ProgressBase = styled.progress`
  border-radius: 8px;
  -webkit-appearance: none;
  overflow: hidden;
  width: 100%;

  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  };

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: 8px 0 0 8px;

    ${props => props.value === 100 && `
      border-radius: 8px; 
    `}
  }
`

const SmallProgressBar = styled(ProgressBase)`
  height: 8px;
`

const MediumProgressBar = styled(ProgressBase)`
  height: 12px;
`

const LargeProgressBar = styled(ProgressBase)`
  height: 24px;
  border-radius: 12px;

  &::-webkit-progress-bar {
    padding: 4px;
  };
`

export default ProgressBar;
