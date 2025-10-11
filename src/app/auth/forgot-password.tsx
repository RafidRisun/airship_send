import { iconPhone } from '@/assets/icons';
import FullRoundedButton from '@/src/components/FullRoundedButton';
import AuthWrapper from '@/src/components/authWrapper';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function ForgotPassword() {
	const [phone, setPhone] = useState('');
	const router = useRouter();
	return (
		<AuthWrapper skippable={false}>
			<View
				style={tw`flex flex-col items-center justify-start w-full gap-15 py-4`}
			>
				<View
					style={tw`flex flex-col items-center justify-center w-full px-10 gap-2`}
				>
					<Text style={tw`font-geistSemiBold text-2xl`}>Forgot Password</Text>
					<Text style={tw`text-center font-manropeRegular text-sm text-gray`}>
						Enter your registered mobile number to receive an OTP.
					</Text>
				</View>
				<View style={tw`flex flex-col w-full gap-4`}>
					<View
						style={tw`w-full flex flex-row items-center justify-between gap-2 px-4 py-1 border-2 border-lightGray rounded-xl`}
					>
						<SvgXml xml={iconPhone} width={18} />
						<TextInput
							placeholder="Phone Number"
							keyboardType="phone-pad"
							value={phone}
							onChangeText={setPhone}
							style={tw`flex-1`}
						/>
					</View>
				</View>
				<View style={tw`flex flex-col w-full gap-2`}>
					<FullRoundedButton
						text="Send OTP"
						onPress={() => {
							router.push('/auth/otp');
						}}
					/>
					<TouchableOpacity
						style={tw`flex items-center justify-center w-full py-2 rounded-xl`}
					>
						<Text style={tw`font-manropeMedium text-sm`}>Cancel</Text>
					</TouchableOpacity>
				</View>
			</View>
		</AuthWrapper>
	);
}
