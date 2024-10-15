import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import Header from '@/components/Header';


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DefaultTheme : DefaultTheme}>
      <Stack  screenOptions={{
          header: () => <Header />,
        }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="buscar" options={{ headerShown: false }} />
        <Stack.Screen name="FaleConosco" options={{ headerShown: false }} />
        <Stack.Screen name="esqueceuSenha" options={{ headerShown: false }} />
        <Stack.Screen name="regiaoSudeste" options={{ headerShown: false }} />
        <Stack.Screen name="cadastro" options={{ headerShown: false }} />
        <Stack.Screen name="redefinirSenha" options={{ headerShown: false }} />
        <Stack.Screen name="TermoDeUso" options={{ headerShown: false }} />
        <Stack.Screen name="quemSomos" options={{ headerShown: false }} />
        <Stack.Screen name="dentroRoteiro" options={{ headerShown: false }} />
        <Stack.Screen name="regiaoSul" options={{ headerShown: false }} />
        <Stack.Screen name="regiaoCentro" options={{ headerShown: false }} />
        <Stack.Screen name="regiaoNorte" options={{ headerShown: false }} />
        <Stack.Screen name="regiaoNordeste" options={{ headerShown: false }} />
        <Stack.Screen name="pontoTuristico" options={{ headerShown: false }} />
        <Stack.Screen name="resultadoBusca" options={{ headerShown: false }} />
        <Stack.Screen name="redefinirSenhad" options={{ headerShown: false }} />
        <Stack.Screen name="atualizarPerfil" options={{ headerShown: false }} />
       
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
    
  );
}
