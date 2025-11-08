import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Hide the header for the index (home) route */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* Register other top-level screens so routes resolve from the Navbar */}
      <Stack.Screen name="headphones" options={{ title: 'Headphones' }} />
      <Stack.Screen name="speakers" options={{ title: 'Speakers' }} />
      <Stack.Screen name="earphones" options={{ title: 'Earphones' }} />
    </Stack>
  );
}
