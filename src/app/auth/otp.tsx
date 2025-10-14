import AuthWrapper from '@/src/components/AuthWrapper';
import FullRoundedButton from '@/src/components/FullRoundedButton';
import tw from '@/src/lib/tailwind';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';

export default function OTP() {
	const [otp, setOtp] = useState('');
	const router = useRouter();
	return (
		<AuthWrapper skippable={false}>
			<View
				style={tw`flex flex-col items-center justify-start w-full gap-8 py-4`}
			>
				<View
					style={tw`flex flex-col items-center justify-center w-full px-10 gap-2`}
				>
					<Text style={tw`font-geistSemiBold text-2xl`}>OTP</Text>
					<Text style={tw`text-center font-manropeRegular text-sm text-gray`}>
						We have sent you an OTP to your mobile number.
					</Text>
				</View>
				<View style={tw`w-full px-10 flex items-center justify-center`}>
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
				<View style={tw`flex flex-col w-full gap-2`}>
					<FullRoundedButton
						text="Verify"
						onPress={() => {
							router.push('/auth/new-password');
						}}
					/>
					<Text style={tw`font-manropeRegular text-base text-center`}>
						Didnt receive the code?{' '}
						<Link href="/auth/otp" style={tw`text-blue font-manropeBold`}>
							Resend
						</Link>
					</Text>
				</View>
			</View>
		</AuthWrapper>
	);
}
