import { iconMic, iconSearch } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function SearchBar({
	placeholder,
	onChange,
}: {
	placeholder?: string;
	onChange?: (text: string) => void;
}) {
	return (
		<View style={tw`flex flex-row w-full items-center justify-center gap-2`}>
			<View
				style={tw`flex flex-row flex-1 items-center justify-between bg-lightGray rounded-full px-4`}
			>
				<TextInput
					placeholder={placeholder || 'Search for food'}
					style={tw`flex-1`}
					onChangeText={onChange}
				/>
				<SvgXml xml={iconSearch} />
			</View>
			<TouchableOpacity
				style={tw`flex items-center justify-center p-3 aspect-square rounded-full bg-lightGray`}
			>
				<SvgXml xml={iconMic} />
			</TouchableOpacity>
		</View>
	);
}
