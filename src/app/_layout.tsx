import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../state/store';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded] = useFonts({
		manropeRegular: require('../../assets/fonts/Manrope-Regular.ttf'),
		manropeBold: require('../../assets/fonts/Manrope-Bold.ttf'),
		manropeSemiBold: require('../../assets/fonts/Manrope-SemiBold.ttf'),
		manropeMedium: require('../../assets/fonts/Manrope-Medium.ttf'),
		manropeLight: require('../../assets/fonts/Manrope-Light.ttf'),
		manropeExtraBold: require('../../assets/fonts/Manrope-ExtraBold.ttf'),
		manropeExtraLight: require('../../assets/fonts/Manrope-ExtraLight.ttf'),
		geistSemiBold: require('../../assets/fonts/Geist-SemiBold.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	return (
		<Provider store={store}>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="index" />
			</Stack>
			<StatusBar style="light" />
		</Provider>
	);
}
