import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Select = ({ label, value, onChange, children }) => (
  <SelectWrapper>
    <VisuallyHidden>
      <label for="select">{label}</label>
    </VisuallyHidden>
    <SelectElement name='select' value={value} onChange={onChange}>
      {children}
    </SelectElement>
    <DropDownIcon />
  </SelectWrapper>
);


const SelectElement = styled.select`
  appearance: none;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  position: relative;
  padding: 12px 48px 12px 12px;
  color: ${COLORS.gray700};
  border: 2px solid transparent;
  transition: all 200ms;
  outline: none;
  font-size: 1rem;
  line-height: 1;

  &:focus {
    border-color: ${COLORS.primary};
  }
`

const DropDownIcon = styled(Icon).attrs({ id: 'chevron-down', size: 22, strokeWidth: 2 })`
  position: absolute;
  right: 14px;
  top: 0;
  bottom: 0;
  margin: auto;
  color: ${COLORS.gray700};
  transition: all 200ms;

`

const SelectWrapper = styled.div`
  position: relative;
  width: max-content;

  &:hover ${DropDownIcon}, &:hover ${SelectElement} {
    color: ${COLORS.black};
  }
`

export default Select;
