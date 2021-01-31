import styled from 'styled-components/native';

interface ContainerProps {
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : '')}
  ${({ justifyContent }) =>
    justifyContent ? `justify-content: ${justifyContent};` : ''}
  ${({ marginBottom }) =>
    marginBottom ? `margin-bottom: ${marginBottom}px;` : ''}
  ${({ marginTop }) => (marginTop ? `margin-top: ${marginTop}px;` : '')}
  ${({ flexDirection }) =>
    flexDirection ? `flex-direction: ${flexDirection}` : ''}
  ${({ marginLeft }) => (marginLeft ? `margin-left: ${marginLeft}px` : '')}
  ${({ marginRight }) => (marginRight ? `margin-right: ${marginRight}px` : '')}
`;
