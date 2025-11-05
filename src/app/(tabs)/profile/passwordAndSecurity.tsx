import { iconEnter } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function PasswordAndSecurity() {
	const router = useRouter();

	return (
		<View style={tw`flex-1 bg-white p-4`}>
			<View
				style={tw`flex flex-col w-full gap-8 border border-lightGray rounded-lg p-4`}
			>
				<TouchableOpacity
					style={tw`flex flex-row items-center justify-between`}
					onPress={() => {
						router.push('/(tabs)/profile/changePassword');
					}}
				>
					<Text style={tw`text-sm font-manropeSemiBold`}>Password</Text>
					<SvgXml xml={iconEnter} />
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`flex flex-row items-center justify-between`}
					onPress={() => {
						router.push('/(tabs)/profile/passkey');
					}}
				>
					<View style={tw`flex flex-col gap-1`}>
						<Text style={tw`text-sm font-manropeSemiBold`}>Passkey</Text>
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							Manage your passkeys for secure login
						</Text>
					</View>
					<SvgXml xml={iconEnter} />
				</TouchableOpacity>

				<TouchableOpacity
					style={tw`flex flex-row items-center justify-between`}
					onPress={() => {
						router.push('/(tabs)/profile/twoStepVerification');
					}}
				>
					<View style={tw`flex flex-col gap-1`}>
						<Text style={tw`text-sm font-manropeSemiBold`}>
							2-Step Verification
						</Text>
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							Enhance account security with 2-step verification
						</Text>
					</View>
					<SvgXml xml={iconEnter} />
				</TouchableOpacity>

				<TouchableOpacity
					style={tw`flex flex-row items-center justify-between`}
					onPress={() => {
						router.push('/(tabs)/profile/recoveryPhone');
					}}
				>
					<View style={tw`flex flex-col gap-1`}>
						<Text style={tw`text-sm font-manropeSemiBold`}>Recovery Phone</Text>
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							Manage your recovery phone number
						</Text>
					</View>
					<SvgXml xml={iconEnter} />
				</TouchableOpacity>
			</View>
		</View>
	);
}
