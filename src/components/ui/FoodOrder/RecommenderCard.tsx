import { iconAdd, iconHalfStar, iconStar } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function RecommenderCard({
	recommendedData,
}: {
	recommendedData: any[];
}) {
	const router = useRouter();
	return (
		<View style={tw`flex flex-col w-full gap-2 px-2`}>
			{recommendedData.map((item, index) => (
				<TouchableOpacity
					key={index}
					style={tw`flex flex-row w-full items-center justify-between gap-2`}
					onPress={() =>
						router.push(`/(tabs)/home/food-order/food-item/${item.id}`)
					}
				>
					<Image
						source={item.image}
						style={tw`w-24 h-24 rounded-xl`}
						contentFit="cover"
					/>
					<View
						style={tw`flex flex-col flex-1 items-start justify-center gap-1`}
					>
						<Text style={tw`text-sm font-manropeBold`}>{item.name}</Text>
						<View style={tw`flex flex-row items-center justify-start gap-2`}>
							<View style={tw`flex flex-row gap-1`}>
								{Array.from({
									length: Math.floor(item.rating),
								}).map((_, i) => (
									<SvgXml key={i} xml={iconStar} />
								))}
								{item.rating % 1 > 0 && <SvgXml xml={iconHalfStar} />}
							</View>
							<Text style={tw`text-xs font-manropeRegular text-gray`}>
								{Math.floor(item.reviews / 10) * 10} + Reviews
							</Text>
						</View>
						<Text style={tw`text-sm font-manropeBold`}>₱ {item.price}</Text>
						<Text
							style={tw`text-xs font-manropeRegular text-gray`}
							numberOfLines={2}
							ellipsizeMode="tail"
						>
							{item.description}
						</Text>
					</View>
					<TouchableOpacity
						style={tw`flex flex-row items-center justify-center gap-2 px-2 py-2 bg-white rounded-md shadow-md absolute top-0 right-0`}
					>
						<Text style={tw`text-xs font-manropeSemiBold`}>Add</Text>
						<SvgXml xml={iconAdd} width={15} height={15} />
					</TouchableOpacity>
				</TouchableOpacity>
			))}
		</View>
	);
}
