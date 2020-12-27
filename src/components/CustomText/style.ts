import styled from 'styled-components/native';

interface TextProps {
  color?: string;
  fontSize?: number;
}

export const Container = styled.View``;

export const Text = styled.Text<TextProps>`
  font-family: 'Roboto-Medium';
  line-height: 24px;
  ${({ color }) => (color ? `color: ${color}` : '')}
  ${({ fontSize }) => (fontSize ? `font-size: ${fontSize}px` : '')}
`;
