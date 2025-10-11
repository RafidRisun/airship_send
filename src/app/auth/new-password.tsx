import { iconInvisible, iconLock, iconVisible } from '@/assets/icons';
import FullRoundedButton from '@/src/components/FullRoundedButton';
import AuthWrapper from '@/src/components/authWrapper';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function NewPassword() {
	const [password, setPassword] = useState('');
	const [reEnterPassword, setReEnterPassword] = useState('');
	const [hidePassword, setHidePassword] = useState(true);
	const [hideReEnterPassword, setHideReEnterPassword] = useState(true);

	const router = useRouter();
	return (
		<AuthWrapper skippable={false}>
			<View
				style={tw`flex flex-col items-center justify-start w-full gap-15 py-4`}
			>
				<Text style={tw`font-geistSemiBold text-2xl`}>New Password</Text>
				<View style={tw`flex flex-col w-full gap-4`}>
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
					<View
						style={tw`w-full flex flex-row items-center justify-between gap-2 px-4 py-1 border-2 border-lightGray rounded-xl`}
					>
						<SvgXml xml={iconLock} width={18} />
						<TextInput
							placeholder="Re Enter Password"
							value={reEnterPassword}
							onChangeText={setReEnterPassword}
							style={tw`flex-1`}
							secureTextEntry={hideReEnterPassword}
						/>
						<TouchableOpacity
							style={tw`flex px-1 py-3`}
							onPress={() => setHideReEnterPassword(!hideReEnterPassword)}
						>
							<SvgXml xml={hideReEnterPassword ? iconVisible : iconInvisible} />
						</TouchableOpacity>
					</View>
				</View>
				<FullRoundedButton
					text="Send Password"
					onPress={() => {
						router.push('/auth');
					}}
				/>
			</View>
		</AuthWrapper>
	);
}
