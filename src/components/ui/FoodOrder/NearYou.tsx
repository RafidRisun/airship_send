import {
	iconDistance,
	iconLike,
	iconLiked,
	iconStar,
	iconTime,
} from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function NearYou({
	id,
	name,
	image,
	rating,
	reviews,
	estimatedTime,
	distance,
}: {
	id: string;
	name: string;
	image: any;
	rating: number;
	reviews: number;
	estimatedTime: string;
	distance: string;
}) {
	const [liked, setLiked] = React.useState(false);
	const router = useRouter();
	return (
		<TouchableOpacity
			style={tw`flex flex-col w-full gap-1`}
			onPress={() => router.push(`/(tabs)/home/food-order/restaurants/${id}`)}
		>
			<Image
				source={image}
				style={tw`w-full h-38 rounded-lg`}
				contentFit="cover"
			/>
			<View style={tw`flex flex-col w-full`}>
				<Text style={tw`font-manropeBold text-lg`}>{name}</Text>
				<View style={tw`flex flex-row w-full items-center gap-2`}>
					<View style={tw`flex flex-row items-center justify-center gap-1`}>
						<Text style={tw`font-manropeRegular text-sm text-gray`}>
							{rating.toFixed(1)}
						</Text>
						<SvgXml xml={iconStar} />
					</View>
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
				style={tw`absolute flex items-center justify-center top-3 right-3 bg-white p-1.5 rounded-full`}
				onPress={() => setLiked(!liked)}
			>
				<SvgXml xml={liked ? iconLiked : iconLike} height={14} width={14} />
			</TouchableOpacity>
		</TouchableOpacity>
	);
}
