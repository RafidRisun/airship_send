import {
	iconAddresses,
	iconEnter,
	iconHelpCenter,
	iconLogout,
	iconNotifications,
	iconPassword,
	iconPaymentMethods,
} from '@/assets/icons';
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
			<View style={tw`flex flex-col w-full gap-4 p-4`}>
				<TouchableOpacity
					style={tw`flex flex-row items-center justify-between`}
					onPress={() => router.push('/(tabs)/profile/address')}
				>
					<View style={tw`flex flex-row items-center gap-4`}>
						<View
							style={tw`flex items-center justify-center p-2 bg-white rounded-full shadow-sm`}
						>
							<SvgXml xml={iconAddresses} />
						</View>
						<View style={tw`flex flex-col`}>
							<Text style={tw`text-base font-manropeSemiBold`}>
								My Addresses
							</Text>
							<Text style={tw`text-sm font-manropeRegular text-gray`}>
								Manage your saved addresses
							</Text>
						</View>
					</View>
					<SvgXml xml={iconEnter} />
				</TouchableOpacity>

				<TouchableOpacity
					style={tw`flex flex-row items-center justify-between`}
				>
					<View style={tw`flex flex-row items-center gap-4`}>
						<View
							style={tw`flex items-center justify-center p-2 bg-white rounded-full shadow-sm`}
						>
							<SvgXml xml={iconPaymentMethods} />
						</View>
						<View style={tw`flex flex-col`}>
							<Text style={tw`text-base font-manropeSemiBold`}>
								Payment Methods
							</Text>
							<Text style={tw`text-sm font-manropeRegular text-gray`}>
								Manage your saved payment methods
							</Text>
						</View>
					</View>
					<SvgXml xml={iconEnter} />
				</TouchableOpacity>

				<TouchableOpacity
					style={tw`flex flex-row items-center justify-between`}
				>
					<View style={tw`flex flex-row items-center gap-4`}>
						<View
							style={tw`flex items-center justify-center p-2 bg-white rounded-full shadow-sm`}
						>
							<SvgXml xml={iconNotifications} />
						</View>
						<Text style={tw`text-base font-manropeSemiBold`}>
							Notifications
						</Text>
					</View>
					<SvgXml xml={iconEnter} />
				</TouchableOpacity>

				<TouchableOpacity
					style={tw`flex flex-row items-center justify-between`}
				>
					<View style={tw`flex flex-row items-center gap-4`}>
						<View
							style={tw`flex items-center justify-center p-2 bg-white rounded-full shadow-sm`}
						>
							<SvgXml xml={iconPassword} />
						</View>
						<View style={tw`flex flex-col`}>
							<Text style={tw`text-base font-manropeSemiBold`}>
								Password & Security
							</Text>
							<Text style={tw`text-sm font-manropeRegular text-gray`}>
								Manage your password
							</Text>
						</View>
					</View>
					<SvgXml xml={iconEnter} />
				</TouchableOpacity>

				<TouchableOpacity
					style={tw`flex flex-row items-center justify-between`}
				>
					<View style={tw`flex flex-row items-center gap-4`}>
						<View
							style={tw`flex items-center justify-center p-2 bg-white rounded-full shadow-sm`}
						>
							<SvgXml xml={iconHelpCenter} />
						</View>
						<Text style={tw`text-base font-manropeSemiBold`}>Help Center</Text>
					</View>
					<SvgXml xml={iconEnter} />
				</TouchableOpacity>

				<TouchableOpacity style={tw`flex flex-row items-center gap-4`}>
					<View
						style={tw`flex items-center justify-center p-2 bg-white rounded-full shadow-sm`}
					>
						<SvgXml xml={iconLogout} />
					</View>
					<Text style={tw`text-base font-manropeSemiBold text-red-500`}>
						Logout
					</Text>
				</TouchableOpacity>
			</View>
		</PageWrapper>
	);
}
