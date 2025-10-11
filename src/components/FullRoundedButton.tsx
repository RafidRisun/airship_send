import tw from '@/src/lib/tailwind';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function FullRoundedButton({
	text,
	onPress,
}: {
	text: string;
	onPress: () => void;
}) {
	return (
		<TouchableOpacity
			style={tw`bg-blue py-3 rounded-full w-full flex justify-center items-center`}
			onPress={onPress}
		>
			<Text style={tw`font-manropeSemiBold text-white text-base`}>{text}</Text>
		</TouchableOpacity>
	);
}
