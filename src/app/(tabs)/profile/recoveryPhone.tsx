import FullRoundedButton from '@/src/components/FullRoundedButton';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default function RecoveryPhone() {
	const router = useRouter();
	return (
		<View style={tw`flex-1 bg-white p-4`}>
			<View style={tw`flex-1 bg-white gap-4 items-center`}>
				<Image
					source={require('../../../../assets/images/recovery.png')}
					style={tw`w-50 aspect-square`}
					contentFit="contain"
				/>
				<View style={tw`flex flex-col gap-2 w-full`}>
					<Text style={tw`text-sm font-manropeSemiBold`}>Phone Number</Text>
					<TextInput
						style={tw`border border-lightGray rounded-lg p-2`}
						placeholder={'Phone Number'}
					/>
				</View>
				<View style={tw`flex flex-col gap-2 w-full`}>
					<Text style={tw`text-sm font-manropeSemiBold`}>Confirm Password</Text>
					<TextInput
						style={tw`border border-lightGray rounded-lg p-2`}
						secureTextEntry={true}
						placeholder={'Password'}
					/>
				</View>
			</View>
			<FullRoundedButton
				text="Send OTP"
				onPress={() => {
					router.push('/(tabs)/profile/recoveryPhoneOTP');
				}}
			/>
		</View>
	);
}
