import '../global.css';
import 'expo-dev-client';
import { ThemeProvider as NavThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { KeyboardProvider } from 'react-native-keyboard-controller';

import { SupabaseProvider } from '~/context/supabase-provider';
import { useColorScheme, useInitialAndroidBarSync } from '~/lib/useColorScheme';
import { NAV_THEME } from '~/theme';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function AppLayout() {
  useInitialAndroidBarSync();
  const { colorScheme, isDarkColorScheme } = useColorScheme();

  return (
    <SupabaseProvider>
      <StatusBar
        key={`root-status-bar-${isDarkColorScheme ? 'light' : 'dark'}`}
        style={isDarkColorScheme ? 'light' : 'dark'}
      />
      <KeyboardProvider statusBarTranslucent navigationBarTranslucent>
        <NavThemeProvider value={NAV_THEME[colorScheme]}>
          <Slot />
          <PortalHost />
        </NavThemeProvider>
      </KeyboardProvider>
    </SupabaseProvider>
  );
}
