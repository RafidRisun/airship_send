import { iconDistance, iconHalfStar, iconStar, iconTime } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import React from 'react';
import { Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function ShopsNearYouCards({
	name,
	rating,
	reviews,
	image,
	closes,
	address,
}: {
	name: string;
	rating: number;
	reviews: number;
	image: any;
	closes: string;
	address: string;
}) {
	return (
		<View style={tw`flex flex-col w-full items-center justify-center gap-4`}>
			<View style={tw`flex flex-row w-full items-center justify-between`}>
				<Image
					source={image}
					style={tw`w-32 h-32 rounded-lg`}
					contentFit="cover"
				/>
				<View
					style={tw`flex flex-col flex-1 h-full items-start justify-start gap-1 p-4`}
				>
					<Text style={tw`text-sm font-manropeBold`}>{name}</Text>
					<View style={tw`flex flex-row items-center justify-start gap-2`}>
						<View style={tw`flex flex-row gap-1`}>
							{Array.from({
								length: Math.floor(rating),
							}).map((_, i) => (
								<SvgXml key={i} xml={iconStar} />
							))}
							{rating % 1 > 0 && <SvgXml xml={iconHalfStar} />}
						</View>
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							{'('}
							{reviews}
							{')'}
						</Text>
					</View>
					<View
						style={tw`flex flex-row w-full items-center justify-start gap-2`}
					>
						<SvgXml xml={iconTime} />
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							Closes at {closes}
						</Text>
					</View>
					<View
						style={tw`flex flex-row w-full items-center justify-start gap-2`}
					>
						<SvgXml xml={iconDistance} />
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							{address}
						</Text>
					</View>
				</View>
			</View>
			<View style={tw`w-full h-0 border-t border-lightGray`} />
		</View>
	);
}
