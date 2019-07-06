import styled from 'styled-components/native';
import { colors } from '~/styles';

export const UserMessage = styled.View`
  flex-grow: 1;
  margin: 5px;
  margin-left: 40px;
  border-radius: 5px;
  padding: 10px;
  align-items:flex-start;
  background-color: ${colors.secondary};
`;

export const ParrotMessage = styled.View`
  margin: 5px;
  margin-right: 40px;
  border-radius: 5px;
  padding: 10px;
  align-items:flex-end;
  background-color: ${colors.ternary};
`;

export const MessageText = styled.Text`
  color: ${colors.darker};
  align-self: flex-start;
  font-size: 16px;
`;

export const MessageTime = styled.Text`
  color: ${colors.dark};
  font-size: 12px;
`;
