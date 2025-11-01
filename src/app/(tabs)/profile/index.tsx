import { iconHomeAddress } from '@/assets/icons';
import FullRoundedButton from '@/src/components/FullRoundedButton';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

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
			<View
				style={tw`flex flex-col w-full p-4 border border-lightGray rounded-lg gap-2`}
			>
				<Text style={tw`text-base font-manropeSemiBold`}>Saved Addresses</Text>
				<TouchableOpacity style={tw`flex flex-col gap-2 w-full`}>
					<View style={tw`flex flex-row gap-2 items-center`}>
						<SvgXml xml={iconHomeAddress} width={18} height={18} />
						<Text style={tw`text-base text-blue font-manropeSemiBold`}>
							Home
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</PageWrapper>
	);
}
