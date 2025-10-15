import {
	iconErrands,
	iconFoodDelivery,
	iconPickupAndDelivery,
	iconShopping,
	iconTransport,
} from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Services() {
	const router = useRouter();

	return (
		<View style={tw`flex flex-col w-full gap-3`}>
			<Text style={tw`text-lg font-manropeSemiBold`}>Services</Text>
			<View style={tw`flex flex-row w-full items-start justify-between gap-2`}>
				<View style={tw`flex flex-col w-15 items-center justify-center gap-2`}>
					<TouchableOpacity
						style={tw`flex w-14 h-14 items-center justify-center bg-white shadow-md rounded-full`}
						onPress={() => router.push('/services/pickup-and-delivery')}
					>
						<SvgXml xml={iconPickupAndDelivery} />
					</TouchableOpacity>
					<Text style={tw`text-xs text-center font-manropeSemiBold`}>
						Pickup & Delivery
					</Text>
				</View>
				<View style={tw`flex flex-col w-15 items-center justify-center gap-2`}>
					<TouchableOpacity
						style={tw`flex w-14 h-14 items-center justify-center bg-white shadow-md rounded-full`}
						onPress={() => router.push('/services/food-order')}
					>
						<SvgXml xml={iconFoodDelivery} />
					</TouchableOpacity>
					<Text style={tw`text-xs text-center font-manropeSemiBold`}>
						Food Delivery
					</Text>
				</View>
				<View style={tw`flex flex-col w-15 items-center justify-center gap-2`}>
					<TouchableOpacity
						style={tw`flex w-14 h-14 items-center justify-center bg-white shadow-md rounded-full`}
						onPress={() => router.push('/services/shopping')}
					>
						<SvgXml xml={iconShopping} />
					</TouchableOpacity>
					<Text style={tw`text-xs text-center font-manropeSemiBold`}>
						Shopping
					</Text>
				</View>
				<View style={tw`flex flex-col w-15 items-center justify-center gap-2`}>
					<TouchableOpacity
						style={tw`flex w-14 h-14 items-center justify-center bg-white shadow-md rounded-full`}
						onPress={() => router.push('/services/errands')}
					>
						<SvgXml xml={iconErrands} />
					</TouchableOpacity>
					<Text style={tw`text-xs text-center font-manropeSemiBold`}>
						Errands
					</Text>
				</View>
				<View style={tw`flex flex-col w-15 items-center justify-center gap-2`}>
					<TouchableOpacity
						style={tw`flex w-14 h-14 items-center justify-center bg-white shadow-md rounded-full`}
						onPress={() => router.push('/services/transport')}
					>
						<SvgXml xml={iconTransport} />
					</TouchableOpacity>
					<Text style={tw`text-xs text-center font-manropeSemiBold`}>
						Transport
					</Text>
				</View>
			</View>
		</View>
	);
}
