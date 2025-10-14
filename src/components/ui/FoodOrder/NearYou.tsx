import {
	iconDistance,
	iconLike,
	iconLiked,
	iconStar,
	iconTime,
} from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function NearYou({
	name,
	image,
	rating,
	reviews,
	estimatedTime,
	distance,
}: {
	name: string;
	image: any;
	rating: number;
	reviews: number;
	estimatedTime: string;
	distance: string;
}) {
	const [liked, setLiked] = React.useState(false);
	return (
		<View style={tw`flex flex-col w-full gap-1`}>
			<Image
				source={image}
				style={tw`w-full h-38 rounded-lg`}
				contentFit="cover"
			/>
			<View style={tw`flex flex-col w-full`}>
				<Text style={tw`font-manropeBold text-lg`}>{name}</Text>
				<View style={tw`flex flex-row items-center gap-2`}>
					<Text style={tw`font-manropeRegular text-sm text-gray`}>
						{rating.toFixed(1)} <SvgXml xml={iconStar} />
					</Text>
					<Text style={tw`text-sm font-manropeRegular text-gray`}>
						{Math.floor(reviews / 10) * 10} + Ratings
					</Text>
					<Text style={tw`text-sm font-manropeRegular text-gray`}>
						<SvgXml xml={iconTime} width={10} height={10} /> {estimatedTime}
					</Text>
					<Text style={tw`text-sm font-manropeRegular text-gray`}>
						<SvgXml xml={iconDistance} width={10} height={10} /> {distance}
					</Text>
				</View>
			</View>
			<TouchableOpacity
				style={tw`absolute top-3 right-3 bg-white p-1.5 rounded-full`}
				onPress={() => setLiked(!liked)}
			>
				<SvgXml xml={liked ? iconLiked : iconLike} height={14} width={14} />
			</TouchableOpacity>
		</View>
	);
}
