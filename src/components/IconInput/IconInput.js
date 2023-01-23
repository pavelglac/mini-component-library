import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZE = {
  small: {
    iconSize: "1rem",
    fontSize: "0.875rem",
    padding: "4px 4px 4px calc(1rem + 4px)",
    borderWidth: "1px",
  },
  large: {
    iconSize: "1.5rem",
    fontSize: "1.125rem",
    padding: "8px 8px 8px calc(1.5rem + 8px)",
    borderWidth: "2px",
  },
};

const IconInput = ({
  label,
  icon = "search",
  width = "100%",
  size,
  type = "text",
  ...nativeInputProps
}) => {
  return (
    <Wrapper style={{ '--fontSize': SIZE[size].fontSize, '--width': width, "--padding": SIZE[size].padding, "--borderWidth": SIZE[size].borderWidth }}>
      <VisuallyHidden>
        {label}
      </VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} size={SIZE[size].iconSize} />
      </IconWrapper>
      <SearchElement name={type} type={type} {...nativeInputProps} />
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

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray500};
  display: block;

  &:hover, &:hover ${SearchElement} {
    color: ${COLORS.black};
  }  
`

const IconWrapper = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  border-bottom: var(--borderWidth) solid transparent;
  transition: all 200ms;
`


export default IconInput;
