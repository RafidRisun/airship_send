import tw from '@/src/lib/tailwind';
import React from 'react';
import { View } from 'react-native';

export default function Carousel() {
	return (
		<View style={tw`flex flex-col w-full gap-3`}>
			<View style={tw`flex w-full h-44 rounded-2xl bg-lightGray`}></View>
			<View style={tw`flex flex-row items-center justify-center w-full gap-2`}>
				<View style={tw`bg-blue rounded-full h-2 w-6`} />
				<View style={tw`bg-gray rounded-full h-2 w-2`} />
				<View style={tw`bg-gray rounded-full h-2 w-2`} />
			</View>
		</View>
	);
}
