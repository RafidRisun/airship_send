import FullRoundedButton from '@/src/components/FullRoundedButton';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';

export default function RecoveryPhoneOTP() {
	const [otp, setOtp] = React.useState('');
	const router = useRouter();
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={tw`flex-1 bg-white p-4`}>
				<View style={tw`flex-1 bg-white gap-4 items-center`}>
					<Image
						source={require('../../../../assets/images/recovery.png')}
						style={tw`w-50 aspect-square`}
						contentFit="contain"
					/>
					<View style={tw`w-full px-10 flex items-center justify-center`}>
						<Text>Enter OTP</Text>
						<OtpInput
							numberOfDigits={4}
							onTextChange={text => setOtp(text)}
							theme={{
								pinCodeContainerStyle: {
									width: 50,
									height: 60,
									borderRadius: 20,
								},
								pinCodeTextStyle: {
									color: '#A0A0A0',
								},
							}}
						/>
					</View>
				</View>
				<FullRoundedButton
					text="Verify"
					onPress={() => {
						router.push('/(tabs)/profile/passwordAndSecurity');
					}}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
}
