// Biblioteca utilizada para criar os componentes estilizados
import styled from 'styled-components/native';

// Biblioteca utilizada para gerenciar a altura da status bar no Iphone X, XR, XS
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { colors, metrics } from '~/styles';

export const Container = styled.View`
  height: ${54 + getStatusBarHeight(true)}px;
  padding-top: ${getStatusBarHeight(true)}px;
  background-color: ${colors.primary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: ${metrics.basePadding / 2}px;
  padding-left: ${metrics.basePadding / 2}px;
`;

export const HeaderTitle = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
`;
