import FullRoundedButton from '@/src/components/FullRoundedButton';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

export default function Index() {
	const router = useRouter();
	return (
		<PageWrapper>
			<Image
				source={require('../../../../assets/images/profile photo.jpg')}
				style={tw`w-40 h-40 rounded-full`}
			/>
			<Text style={tw`text-lg font-manropeSemiBold`}>Zoe Trivianni</Text>
			<FullRoundedButton
				text="Edit Profile"
				onPress={() => router.push('/(tabs)/profile/editProfile')}
			/>
		</PageWrapper>
	);
}
