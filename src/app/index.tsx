import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import tw from '../lib/tailwind';
import { RootState } from '../state/store';

export default function Index() {
	const loggedIn = useSelector((state: RootState) => state.loggedIn);
	const router = useRouter();

	const checkLoginStatus = async () => {
		const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
		setTimeout(() => {
			if (isLoggedIn === 'true') {
				router.replace('(tabs)');
			} else {
				router.replace('/onboarding');
			}
		}, 1500);
	};

	useEffect(() => {
		checkLoginStatus();
	}, []);

	return (
		<View style={tw`flex-1 justify-center items-center bg-white`}>
			<Animated.View entering={FadeIn.delay(500).duration(1000)}>
				<Image
					source={require('../../assets/images/logo.png')}
					style={tw`w-50 h-50`}
					contentFit="contain"
				/>
			</Animated.View>
		</View>
	);
}
