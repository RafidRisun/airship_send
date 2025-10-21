import {
	iconAdd,
	iconHalfStar,
	iconLike,
	iconLiked,
	iconRemove,
	iconStar,
} from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import React, { useState } from 'react';
import {
	Dimensions,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { SvgXml } from 'react-native-svg';

export default function FoodItem() {
	const { id } = useLocalSearchParams(); // Extract the `id` parameter
	const foodItem = recommendedData.find(item => item.id === id);
	const screenWidth = Dimensions.get('window').width;
	const [liked, setLiked] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0); // Track the active slide index
	const [quantity, setQuantity] = useState(0);
	return (
		<View style={tw`flex flex-1`}>
			<ScrollView style={tw`flex-1 w-full bg-white`}>
				<View style={tw`flex flex-col items-center justify-center w-full`}>
					<View style={tw`flex w-full`}>
						<Carousel
							width={screenWidth}
							height={280}
							data={foodItem ? foodItem.image : []}
							onSnapToItem={index => setActiveIndex(index)} // Update active index
							renderItem={({ item }) => (
								<Image
									source={item}
									style={tw`w-full h-full`}
									contentFit="cover"
								/>
							)}
						/>
						<TouchableOpacity
							style={tw`absolute flex items-center justify-center top-4 right-4 bg-white p-1.5 rounded-full`}
							onPress={() => setLiked(!liked)}
						>
							<SvgXml
								xml={liked ? iconLiked : iconLike}
								height={14}
								width={14}
							/>
						</TouchableOpacity>
						<View
							style={tw`flex flex-row w-full gap-2 items-center justify-center absolute bottom-4`}
						>
							{foodItem?.image.map((_, index) => (
								<View
									key={index}
									style={tw`w-2 aspect-square rounded-full ${
										activeIndex === index ? 'bg-blue' : 'bg-white'
									}`}
								/>
							))}
						</View>
					</View>
					<View style={tw`flex flex-1 w-full gap-4 p-4`}>
						<View style={tw`flex flex-col w-full`}>
							<View
								style={tw`flex flex-row w-full items-start justify-between`}
							>
								<View style={tw`flex flex-col gap-1`}>
									<Text style={tw`text-xl font-manropeBold`}>
										{foodItem?.name}
									</Text>
									<Text style={tw`text-lg font-manropeBold`}>
										₱ {foodItem?.price}
									</Text>
								</View>
								<View
									style={tw`flex flex-row w-22 bg-lightGray rounded-full items-center justify-between`}
								>
									<TouchableOpacity
										onPress={() => setQuantity(Math.max(0, quantity - 1))}
									>
										<SvgXml xml={iconRemove} width={26} height={26} />
									</TouchableOpacity>
									<Text style={tw`text-base font-manropeRegular`}>
										{quantity}
									</Text>
									<TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
										<SvgXml xml={iconAdd} width={26} height={26} />
									</TouchableOpacity>
								</View>
							</View>
							<View
								style={tw`flex flex-row w-full items-center justify-start gap-2`}
							>
								<Text style={tw`text-xs font-manropeRegular text-gray`}>
									{foodItem?.rating}
								</Text>
								<View style={tw`flex flex-row gap-1`}>
									{Array.from({
										length: Math.floor(foodItem?.rating ?? 0),
									}).map((_, i) => (
										<SvgXml key={i} xml={iconStar} />
									))}
									{(foodItem?.rating ?? 0) % 1 > 0 && (
										<SvgXml xml={iconHalfStar} />
									)}
								</View>
								<Text style={tw`text-xs font-manropeRegular text-gray`}>
									{Math.floor((foodItem?.reviews ?? 0) / 10) * 10} + Reviews
								</Text>
							</View>
						</View>
						<View style={tw`w-full h-0 border-b border-lightGray`} />
						<View style={tw`flex flex-col items-start justify-start w-full`}>
							<Text style={tw`text-base font-manropeSemiBold`}>About</Text>
							<Text style={tw`text-sm text-gray font-manropeRegular`}>
								{foodItem?.description}
							</Text>
						</View>
						<View style={tw`w-full h-0 border-b border-lightGray`} />
						<View style={tw`flex flex-col w-full`}>
							<View style={tw`flex flex-row gap-2 items-center`}>
								<Text style={tw`text-lg font-manropeSemiBold`}>
									Choose Dressing
								</Text>
								<Text style={tw`text-sm text-gray font-manropeRegular`}>
									Any 3
								</Text>
							</View>
							{foodItem?.dressings.map((dressing, index) => (
								<View key={index} style={tw`flex flex-col w-full py-2 gap-2`}>
									<View style={tw`flex flex-row items-center justify-between`}>
										<Text style={tw`text-sm text-gray font-manropeRegular`}>
											{dressing}
										</Text>
										<TouchableOpacity>
											<SvgXml xml={iconAdd} />
										</TouchableOpacity>
									</View>
									<View style={tw`w-full h-0 border-b border-lightGray`} />
								</View>
							))}
						</View>
						<View style={tw`flex flex-col w-full`}>
							<Text style={tw`text-lg font-manropeSemiBold w-full`}>
								For you
							</Text>
							<ScrollView
								horizontal
								showsHorizontalScrollIndicator={false}
								style={tw`w-full`}
								contentContainerStyle={tw`flex flex-row items-start gap-4 p-2`}
							>
								{forYouFood.map(food => (
									<TouchableOpacity
										key={food.id}
										style={tw`flex flex-col gap-2 w-40`}
									>
										<Image
											source={food.image}
											style={tw`w-full h-30 rounded-xl`}
											contentFit="cover"
										/>
										<View style={tw`flex flex-col gap-1 w-full`}>
											<View
												style={tw`flex flex-row items-start justify-between`}
											>
												<Text
													style={tw`text-sm font-manropeBold`}
													numberOfLines={1}
												>
													{food.name.length > 14
														? `${food.name.slice(0, 14)}...`
														: food.name}
												</Text>
												<View
													style={tw`flex flex-row items-center justify-center gap-1`}
												>
													<SvgXml xml={iconStar} />
													<Text
														style={tw`font-manropeRegular text-xs text-gray`}
													>
														{food.rating.toFixed(1)}
													</Text>
												</View>
											</View>
											<Text style={tw`text-xs text-gray font-manropeRegular`}>
												{food.restaurant}
											</Text>
										</View>
										<TouchableOpacity
											style={tw`absolute flex items-center justify-center top-2 right-2 bg-white p-1.5 rounded-full`}
										>
											<SvgXml
												xml={liked ? iconLiked : iconLike}
												height={10}
												width={10}
											/>
										</TouchableOpacity>
									</TouchableOpacity>
								))}
							</ScrollView>
						</View>
					</View>
				</View>
			</ScrollView>
			<View
				style={tw`flex flex-row w-full items-center justify-between gap-4 bg-white px-4 py-6`}
			>
				<TouchableOpacity
					style={tw`flex items-center justify-center bg-blue p-3 rounded-full flex-1`}
				>
					<Text style={tw`text-white font-manropeSemiBold`}>Buy Now</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`flex items-center justify-center bg-white border border-blue p-3 rounded-full flex-1`}
				>
					<Text style={tw`text-blue font-manropeSemiBold`}>Add to Cart</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const recommendedData = [
	{
		id: '1',
		name: 'Sisig',
		image: [
			require('../../../../../assets/images/food.png'),
			require('../../../../../assets/images/food1.png'),
			require('../../../../../assets/images/food2.png'),
		],
		rating: 4.5,
		reviews: 665,
		price: '250',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis vulputate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis vulputate',
		dressings: ['Soy Sauce', 'Spring Onions', 'Egg', 'Chilli Paste'],
	},
	{
		id: '2',
		name: 'Pasta',
		image: [
			require('../../../../../assets/images/food.png'),
			require('../../../../../assets/images/food1.png'),
			require('../../../../../assets/images/food2.png'),
		],
		rating: 4.5,
		reviews: 665,
		price: '250',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis vulputate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis vulputate',
		dressings: ['Soy Sauce', 'Spring Onions', 'Egg', 'Chilli Paste'],
	},
	{
		id: '3',
		name: 'Burger',
		image: [
			require('../../../../../assets/images/food.png'),
			require('../../../../../assets/images/food1.png'),
			require('../../../../../assets/images/food2.png'),
		],
		rating: 4.5,
		reviews: 665,
		price: '250',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis vulputate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis vulputate',
		dressings: ['Soy Sauce', 'Spring Onions', 'Egg', 'Chilli Paste'],
	},
];

const forYouFood = [
	{
		id: '1',
		name: 'Sisig',
		rating: 4.5,
		restaurant: 'El Poco Cantina',
		image: require('../../../../../assets/images/food.png'),
	},
	{
		id: '2',
		name: 'Burger',
		rating: 4.5,
		restaurant: 'El Coco',
		image: require('../../../../../assets/images/food1.png'),
	},
	{
		id: '3',
		name: 'Pasta',
		rating: 4.5,
		restaurant: 'El Ritardo',
		image: require('../../../../../assets/images/food2.png'),
	},
	{
		id: '4',
		name: 'Sisssy',
		rating: 4.5,
		restaurant: 'El Sissy',
		image: require('../../../../../assets/images/food3.png'),
	},
];
