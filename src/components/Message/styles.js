import styled from 'styled-components/native';
import { colors } from '~/styles';

export const UserMessage = styled.View`
  margin: 5px;
  margin-left: 40px;
  border-radius: 5px;
  align-items:flex-start;
  padding: 10px;
  background-color: ${colors.secondary};

`;

export const ParrotMessage = styled.View`
  margin: 5px;
  margin-right: 40px;
  border-radius: 5px;
  align-items:flex-end;
  padding: 10px;
  background-color: ${colors.ternary};
`;

export const MessageText = styled.Text`
  color: ${colors.darker};
  font-size: 16px;
`;

export const MessageTime = styled.Text`
  color: ${colors.dark};
  font-size: 12px;
`;
