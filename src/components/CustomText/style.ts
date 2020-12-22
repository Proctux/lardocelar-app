import styled from 'styled-components/native';

interface TextProps {
  color?: string;
}

export const Container = styled.View``;

export const Text = styled.Text<TextProps>`
  font-family: 'Roboto-Medium';
  ${({ color }) => (color ? `color: ${color}` : '')}
`;
