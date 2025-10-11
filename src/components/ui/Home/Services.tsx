import {
	iconErrands,
	iconFoodDelivery,
	iconPickupAndDelivery,
	iconShopping,
	iconTransport,
} from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Services() {
	return (
		<View style={tw`flex flex-col w-full gap-3`}>
			<Text style={tw`text-lg font-manropeSemiBold`}>Services</Text>
			<View style={tw`flex flex-row w-full items-start justify-between gap-2`}>
				<View style={tw`flex flex-col w-15 items-center justify-center gap-2`}>
					<TouchableOpacity
						style={tw`flex w-14 h-14 items-center justify-center bg-white shadow-md rounded-full`}
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
