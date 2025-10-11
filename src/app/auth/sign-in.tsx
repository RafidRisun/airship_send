import {
	iconFacebook,
	iconGoogle,
	iconInvisible,
	iconLock,
	iconPhone,
	iconVisible,
} from '@/assets/icons';
import FullRoundedButton from '@/src/components/FullRoundedButton';
import AuthWrapper from '@/src/components/authWrapper';
import tw from '@/src/lib/tailwind';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function SignIn() {
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [hidePassword, setHidePassword] = useState(true);
	return (
		<AuthWrapper skippable={true}>
			<View
				style={tw`flex flex-col items-center justify-start w-full gap-15 py-4`}
			>
				<Text style={tw`font-geistSemiBold text-2xl`}>Sign In</Text>
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
					<View
						style={tw`w-full flex flex-row items-center justify-between gap-2 px-4 py-1 border-2 border-lightGray rounded-xl`}
					>
						<SvgXml xml={iconLock} width={18} />
						<TextInput
							placeholder="Password"
							value={password}
							onChangeText={setPassword}
							style={tw`flex-1`}
							secureTextEntry={hidePassword}
						/>
						<TouchableOpacity
							style={tw`flex px-1 py-3`}
							onPress={() => setHidePassword(!hidePassword)}
						>
							<SvgXml xml={hidePassword ? iconVisible : iconInvisible} />
						</TouchableOpacity>
					</View>
					<View style={tw`flex flex-row justify-end`}>
						<Link
							href="/auth/forgot-password"
							style={tw`text-blue font-manropeMedium text-xs`}
						>
							Forgot Password?
						</Link>
					</View>
				</View>
				<View style={tw`flex flex-col w-full gap-2`}>
					<FullRoundedButton text="Sign In" onPress={() => {}} />
					<Text style={tw`font-manropeRegular text-base text-center`}>
						Already have an account?{' '}
						<Link href="/auth" style={tw`text-blue font-manropeBold`}>
							Sign Up
						</Link>
					</Text>
				</View>
				<View style={tw`flex flex-col items-center w-full gap-4`}>
					<View style={tw`flex flex-row items-center w-full gap-2`}>
						<View style={tw`flex-1 border-t border-gray`} />
						<Text style={tw`font-manropeRegular text-base text-gray`}>
							Or Continue with
						</Text>
						<View style={tw`flex-1 border-t border-gray`} />
					</View>
					<View
						style={tw`flex flex-row items-center justify-center w-full gap-2`}
					>
						<TouchableOpacity>
							<SvgXml xml={iconGoogle} />
						</TouchableOpacity>
						<TouchableOpacity>
							<SvgXml xml={iconFacebook} />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</AuthWrapper>
	);
}
