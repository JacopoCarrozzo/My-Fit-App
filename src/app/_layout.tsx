import { Stack, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import Colors from '@/src/constants/Colors';
import { Provider } from 'react-redux';
import { useAppSelector } from '@/src/hooks/reduxHooks';
import { selectIsOnboarded } from '@/src/features/user/userSlice';
import { persistor, store } from '@/src/store';
import { PersistGate } from 'redux-persist/integration/react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootLayoutNav />
      </PersistGate>
    </Provider>
  );
}

function RootLayoutNav() {
  const isOnboarded = useAppSelector(selectIsOnboarded);
  const segments = useSegments(); // A "GPS" to prevent infinite redirect loops: if the user is in 'app/onboarding.tsx', segments[0] will be 'onboarding'.
  const router = useRouter();

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    const isOnboarding = segments[0] === 'onboarding';

    // CASE 1: Redirect to onboarding if no profile is found and user is not already there.
    if (!isOnboarded && !isOnboarding) {
      router.replace('/onboarding');
    }
    // CASE 2: Redirect to main app if profile is complete but user is still in onboarding.
    else if (isOnboarded && isOnboarding) {
      router.replace('/(tabs)');
    }
  }, [isOnboarded, segments]);

  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: Colors.light.background } }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="onboarding" />
    </Stack>
  );
}
