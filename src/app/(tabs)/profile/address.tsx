import {
	iconEnter,
	iconHomeAddress,
	iconRecentAddress,
	iconWorkAddress,
} from '@/assets/icons';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Address() {
	const router = useRouter();
	return (
		<PageWrapper>
			<View
				style={tw`flex flex-col w-full p-4 border border-lightGray rounded-lg gap-4`}
			>
				<Text style={tw`text-base font-manropeSemiBold`}>Saved Addresses</Text>
				<TouchableOpacity
					style={tw`flex flex-col justify-center gap-2 w-full`}
					onPress={() => router.push('/(tabs)/profile/editAddress')}
				>
					<View style={tw`flex flex-row gap-2 items-center`}>
						<SvgXml xml={iconHomeAddress} width={18} height={18} />
						<Text style={tw`text-base text-blue font-manropeSemiBold`}>
							Home
						</Text>
					</View>
					<Text style={tw`text-sm text-gray font-manropeRegular`}>
						Puso Ng Maynila Building, 404 A. Mabini Street, Ermita, Metro Manila
					</Text>
					<View style={tw`absolute right-2`}>
						<SvgXml xml={iconEnter} width={18} height={18} />
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`flex flex-col justify-center gap-2 w-full`}
					onPress={() => router.push('/(tabs)/profile/editAddress')}
				>
					<View style={tw`flex flex-row gap-2 items-center`}>
						<SvgXml xml={iconWorkAddress} width={18} height={18} />
						<Text style={tw`text-base font-manropeSemiBold`}>Work</Text>
					</View>
					<Text style={tw`text-sm text-gray font-manropeRegular`}>
						Philkraft Center, 820 J. P. Rizal Avenue, Makati City, Metro Manila
					</Text>
					<View style={tw`absolute right-2`}>
						<SvgXml xml={iconEnter} width={18} height={18} />
					</View>
				</TouchableOpacity>
			</View>
			<View
				style={tw`flex flex-col w-full p-4 border border-lightGray rounded-lg gap-4`}
			>
				<Text style={tw`text-base font-manropeSemiBold`}>Recent Addresses</Text>
				<TouchableOpacity style={tw`flex flex-col justify-center gap-2 w-full`}>
					<View style={tw`flex flex-row gap-2 items-center`}>
						<SvgXml xml={iconRecentAddress} width={18} height={18} />
						<Text style={tw`text-base font-manropeSemiBold`}>Recent 1</Text>
					</View>
					<Text style={tw`text-sm text-gray font-manropeRegular`}>
						Puso Ng Maynila Building, 404 A. Mabini Street, Ermita, Metro Manila
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={tw`flex flex-col justify-center gap-2 w-full`}>
					<View style={tw`flex flex-row gap-2 items-center`}>
						<SvgXml xml={iconRecentAddress} width={18} height={18} />
						<Text style={tw`text-base font-manropeSemiBold`}>Recent 2</Text>
					</View>
					<Text style={tw`text-sm text-gray font-manropeRegular`}>
						Philkraft Center, 820 J. P. Rizal Avenue, Makati City, Metro Manila
					</Text>
				</TouchableOpacity>
			</View>
		</PageWrapper>
	);
}
