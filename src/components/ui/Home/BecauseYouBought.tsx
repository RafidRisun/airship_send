import { iconHalfStar, iconStar } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import React from 'react';
import { Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function BecauseYouBought() {
	return (
		<View style={tw`flex flex-col w-full gap-2 items-center justify-center`}>
			<View style={tw`flex flex-row w-full items-center justify-between`}>
				<Text style={tw`text-lg font-manropeSemiBold text-black`}>
					Because you bought
				</Text>
				<Text style={tw`text-base font-manropeRegular text-gray`}>See all</Text>
			</View>
			<View style={tw`flex flex-row w-full items-center justify-between p-2`}>
				<View style={tw`flex flex-col flex-1 items-start justify-center gap-1`}>
					<Text style={tw`text-sm font-manropeBold`}>
						{bczYouBoughtData[0].name}
					</Text>
					<View style={tw`flex flex-row items-center justify-start gap-2`}>
						<View style={tw`flex flex-row gap-1`}>
							{Array.from({
								length: Math.floor(bczYouBoughtData[0].rating),
							}).map((_, i) => (
								<SvgXml key={i} xml={iconStar} />
							))}
							{bczYouBoughtData[0].rating % 1 > 0 && (
								<SvgXml xml={iconHalfStar} />
							)}
						</View>
						<Text style={tw`text-xs font-manropeRegular text-gray`}>
							{Math.floor(bczYouBoughtData[0].reviews / 10) * 10} + Reviews
						</Text>
					</View>
					<Text style={tw`text-sm font-manropeBold`}>
						₱ {bczYouBoughtData[0].price}
					</Text>
					<Text
						style={tw`text-xs font-manropeRegular text-gray`}
						numberOfLines={2}
						ellipsizeMode="tail"
					>
						{bczYouBoughtData[0].description}
					</Text>
				</View>
				<Image
					source={bczYouBoughtData[0].image}
					style={tw`w-24 h-24 rounded-lg`}
					contentFit="cover"
				/>
			</View>
		</View>
	);
}

const bczYouBoughtData = [
	{
		id: '1',
		name: 'Sisig',
		image: require('../../../../assets/images/food.png'),
		rating: 4.5,
		reviews: 665,
		price: '250',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis vulputate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis vulputate',
	},
];
