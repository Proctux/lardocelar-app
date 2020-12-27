import styled from 'styled-components/native';

interface ContainerProps {
  marginBottom?: number;
  marginTop?: number;
  alignItems?: string;
  justifyContent?: string;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : '')}
  ${({ justifyContent }) =>
    justifyContent ? `justify-content: ${justifyContent};` : ''}
  ${({ marginBottom }) =>
    marginBottom ? `margin-bottom: ${marginBottom}px;` : ''}
  ${({ marginTop }) => (marginTop ? `margin-top: ${marginTop}px;` : '')}
`;
