import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZE = {
  small: {
    iconSize: "1rem",
    fontSize: "0.875rem",
    padding: "4px 4px 4px 24px",
    borderWidth: "1px",
  },
  large: {
    iconSize: "1.5rem",
    fontSize: "1.125rem",
    padding: "8px 8px 8px 36px",
    borderWidth: "2px",
  },
};

const IconInput = ({
  label,
  icon = "search",
  width = "100%",
  size,
  placeholder,
}) => {
  return (
    <Wrapper style={{ '--fontSize': SIZE[size].fontSize, '--width': width, "--padding": SIZE[size].padding, "--borderWidth": SIZE[size].borderWidth }}>
      <VisuallyHidden>
        <label for="search">{label}</label>
      </VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} size={SIZE[size].iconSize} />
      </IconWrapper>
      <SearchElement name='search' type="search" placeholder={placeholder} />
    </Wrapper>
  );
};

const SearchElement = styled.input`
  border: none;
  border-bottom: var(--borderWidth) solid currentColor;
  color: inherit;
  font-size: var(--fontSize);
  font-weight: 700;
  outline-offset: 2px;
  padding: var(--padding);
  width: var(--width);
  color: ${COLORS.gray700};
  caret-color: ${COLORS.gray700};
  transition: all 200ms;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

`

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray500};

  &:hover, &:hover ${SearchElement} {
    color: ${COLORS.black};
  }  
`

const IconWrapper = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  pointer-events: none;
  display: flex;
  align-items: center;
  border-bottom: var(--borderWidth) solid transparent;
  transition: all 200ms;
`


export default IconInput;
