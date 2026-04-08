import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="lista-usuarios" options={{ title: 'DA.WEB>' }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
