import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';

export default function Passkey() {
	const [isPasskeyEnabled, setIsPasskeyEnabled] = useState(true);
	const togglePasskeySwitch = () =>
		setIsPasskeyEnabled(previousState => !previousState);
	return (
		<PageWrapper>
			<Image
				source={require('../../../../assets/images/passkey.png')}
				style={tw`w-40 aspect-square`}
				contentFit="contain"
			/>
			<View
				style={tw`flex flex-col w-full gap-8 border border-lightGray rounded-lg p-4`}
			>
				<View style={tw`flex flex-row items-center justify-between`}>
					<Text style={tw`text-sm font-manropeSemiBold`}>Enable Passkey</Text>
					<Switch
						trackColor={{ false: '#F2F2F2', true: '#017ADF' }}
						thumbColor={isPasskeyEnabled ? '#FFFFFF' : '#A0A0A0'}
						ios_backgroundColor="#3e3e3e"
						onValueChange={togglePasskeySwitch}
						value={isPasskeyEnabled}
					/>
				</View>
			</View>
		</PageWrapper>
	);
}
