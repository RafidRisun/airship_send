import { iconDrop, iconLocation, iconUser } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function ProfileAndLocation() {
	return (
		<View style={tw`flex flex-row w-full items-center justify-between`}>
			<TouchableOpacity
				style={tw`flex items-center justify-center p-3 aspect-square rounded-full bg-white shadow-md`}
			>
				<SvgXml xml={iconUser} />
			</TouchableOpacity>
			<View style={tw`flex flex-row items-center justify-center gap-2`}>
				<TouchableOpacity
					style={tw`flex flex-col items-end justify-center gap-1`}
				>
					<View style={tw`flex flex-row items-center justify-center gap-1`}>
						<Text style={tw`font-manropeSemiBold text-sm`}>Home</Text>
						<SvgXml xml={iconDrop} />
					</View>

					<Text style={tw`font-manropeRegular text-xs text-gray`}>
						Paco, Manilla
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`flex items-center justify-center p-3 aspect-square rounded-full bg-blue shadow-md`}
				>
					<SvgXml xml={iconLocation} />
				</TouchableOpacity>
			</View>
		</View>
	);
}
