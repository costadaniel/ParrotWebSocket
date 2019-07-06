import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Chat = styled.FlatList`
  background-color: ${colors.light};
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  padding: ${metrics.basePadding / 2}px;
  max-width: ${metrics.screenWidth};
  background-color: ${colors.white};
  border-top-width: 0.5;
  border-top-color: ${colors.regular};
`;

export const MessageInput = styled.TextInput`
  flex-grow: 1;
  border-radius: 21;
  background-color: ${colors.white};
  border-width: 0.5;
  height: 42;
  width: 100;
  border-color: ${colors.regular};
  padding-left: ${metrics.basePadding}px;
  padding-right: ${metrics.basePadding}px;
`;

export const SendButton = styled.TouchableOpacity`
  width: 42;
  height: 42;
  border-radius: 21;
  margin-left: ${metrics.baseMargin};
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
`;
