import { StatusBar, Platform } from 'react-native';
import { colors } from '~/styles';

// Configurando a cor da status bar de acordo com o sistema operacional do
// dispositivo
if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor(colors.primary);
} else {
  StatusBar.setBarStyle('light-content');
}
