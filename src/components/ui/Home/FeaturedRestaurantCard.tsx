import {
	iconDistance,
	iconLike,
	iconLiked,
	iconRestaurant,
	iconStar,
	iconTime,
} from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function FeaturedRestaurantCard({
	name,
	image,
	rating,
	cuisine,
	deliveryTime,
	distance,
	discount,
}: {
	name: string;
	image: any;
	rating: number;
	cuisine: string;
	deliveryTime: string;
	distance: string;
	discount: string;
}) {
	const [liked, setLiked] = React.useState(false);
	return (
		<View style={tw`flex flex-col flex-1 items-center justify-center`}>
			<View style={tw`flex w-full p-2 items-center justify-center`}>
				<Image
					source={image}
					style={tw`w-full h-20 rounded-lg`}
					contentFit="cover"
				/>
				<TouchableOpacity
					style={tw`absolute top-3 right-3 bg-white p-1.5 rounded-full`}
					onPress={() => setLiked(!liked)}
				>
					<SvgXml xml={liked ? iconLiked : iconLike} />
				</TouchableOpacity>
				<View style={tw`absolute bottom-5 left-0 bg-blue px-2 py-1`}>
					<Text style={tw`text-white font-manropeRegular text-xs`}>
						{discount}
					</Text>
				</View>
			</View>
			<View style={tw`flex flex-col w-full items-center justify-center px-1`}>
				<View style={tw`flex flex-row items-center justify-between w-full`}>
					<Text
						style={tw`text-xs font-manropeBold capitalize`}
						numberOfLines={1}
						ellipsizeMode="tail"
					>
						{name}
					</Text>
					<View style={tw`flex flex-row items-center justify-center gap-2`}>
						<SvgXml xml={iconStar} />
						<Text style={tw`text-xs font-manropeSemiBold text-gray`}>
							{rating.toFixed(1)}
						</Text>
					</View>
				</View>
				<View style={tw`flex flex-row items-center justify-start w-full gap-2`}>
					<SvgXml xml={iconRestaurant} />
					<Text style={tw`text-xs font-manropeRegular text-gray`}>
						{cuisine}
					</Text>
				</View>
				<View style={tw`flex flex-row w-full items-center justify-between`}>
					<View style={tw`flex flex-row items-center justify-start gap-2`}>
						<SvgXml xml={iconTime} />
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							{deliveryTime}
						</Text>
					</View>
					<View style={tw`flex flex-row items-center justify-start gap-2`}>
						<SvgXml xml={iconDistance} />
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							{distance}
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
}
