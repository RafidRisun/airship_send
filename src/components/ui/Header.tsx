import tw from '@/src/lib/tailwind';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Header({
	title,
	seeAll,
}: {
	title: string;
	seeAll?: boolean;
}) {
	return (
		<View style={tw`flex flex-row w-full items-center justify-between`}>
			<Text style={tw`text-lg font-manropeSemiBold text-black`}>{title}</Text>
			{seeAll && (
				<TouchableOpacity>
					<Text style={tw`text-base font-manropeRegular text-gray`}>
						See all
					</Text>
				</TouchableOpacity>
			)}
		</View>
	);
}
