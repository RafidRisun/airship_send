import {
	iconDeals,
	iconDistance,
	iconLike,
	iconLiked,
	iconSearch,
	iconStar,
	iconTime,
} from '@/assets/icons';
import PageWrapper from '@/src/components/PageWrapper';
import RecommenderCard from '@/src/components/ui/FoodOrder/RecommenderCard';
import Header from '@/src/components/ui/Header';
import Categories from '@/src/components/ui/Home/Categories';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { Link, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Restaurant() {
	const { id } = useLocalSearchParams(); // Extract the `id` parameter

	const restaurant = nearYouData.find(item => item.id === id);
	const [liked, setLiked] = React.useState(false);

	return (
		<PageWrapper>
			{restaurant && (
				<>
					<View style={tw`flex flex-col w-full gap-1 p-4`}>
						<Image
							source={restaurant.image}
							style={tw`w-full h-38 rounded-lg`}
							contentFit="cover"
						/>
						<View style={tw`flex flex-col w-full`}>
							<View
								style={tw`flex flex-row w-full items-center justify-between`}
							>
								<Text style={tw`font-manropeBold text-lg`}>
									{restaurant.name}
								</Text>
								<View style={tw`flex flex-row items-center gap-1`}>
									<SvgXml xml={iconDeals} />
									<Link href={'/'} style={tw`text-sm text-blue underline`}>
										Special Deals
									</Link>
								</View>
							</View>
							<View style={tw`flex flex-row w-full items-center gap-2`}>
								<View
									style={tw`flex flex-row items-center justify-center gap-1`}
								>
									<Text style={tw`font-manropeRegular text-sm text-gray`}>
										{restaurant.rating.toFixed(1)}
									</Text>
									<SvgXml xml={iconStar} />
								</View>
								<Text style={tw`text-sm font-manropeRegular text-gray`}>
									{Math.floor(restaurant.reviews / 10) * 10} + Ratings
								</Text>
								<Text style={tw`text-sm font-manropeRegular text-gray`}>
									<SvgXml xml={iconTime} width={10} height={10} />{' '}
									{restaurant.estimatedTime}
								</Text>
								<Text style={tw`text-sm font-manropeRegular text-gray`}>
									<SvgXml xml={iconDistance} width={10} height={10} />{' '}
									{restaurant.distance}
								</Text>
							</View>
						</View>
						<TouchableOpacity
							style={tw`absolute flex items-center justify-center top-6 right-6 bg-white p-1.5 rounded-full`}
							onPress={() => setLiked(!liked)}
						>
							<SvgXml
								xml={liked ? iconLiked : iconLike}
								height={14}
								width={14}
							/>
						</TouchableOpacity>
					</View>

					<View
						style={tw`flex flex-row items-center px-4 w-11/12 h-12 bg-white rounded-lg shadow-md`}
					>
						<TextInput
							placeholder="Search for food"
							style={tw`flex-1 font-manropeRegular text-sm`}
						/>
						<SvgXml xml={iconSearch} />
					</View>
					<Categories categories={restaurant.categories} />
					<Header title="Recommended" seeAll={false} />
					<RecommenderCard recommendedData={recommendedData} />
					<Header title="For You" seeAll={false} />
					<RecommenderCard recommendedData={forYouData} />
				</>
			)}
		</PageWrapper>
	);
}

const nearYouData = [
	{
		id: '1',
		name: 'Cafe Ilang Ilang',
		image: require('../../../../../../assets/images/resturant1.png'),
		rating: 4.5,
		reviews: 120,
		distance: '0.5 km',
		estimatedTime: '15 min',
		categories: [
			{ id: '1', name: 'All' },
			{ id: '2', name: 'Drinks' },
			{ id: '3', name: 'Pizza' },
			{ id: '4', name: 'Vegan' },
			{ id: '5', name: 'Non Veg' },
		],
	},
	{
		id: '2',
		name: 'Pancake House',
		image: require('../../../../../../assets/images/resturant2.png'),
		rating: 4.2,
		reviews: 95,
		distance: '1.2 km',
		estimatedTime: '20 min',
		categories: [
			{ id: '1', name: 'All' },
			{ id: '2', name: 'Drinks' },
			{ id: '3', name: 'Pizza' },
			{ id: '4', name: 'Vegan' },
			{ id: '5', name: 'Non Veg' },
		],
	},
	{
		id: '3',
		name: 'Jollibee',
		image: require('../../../../../../assets/images/resturant1.png'),
		rating: 4.5,
		reviews: 120,
		distance: '0.5 km',
		estimatedTime: '15 min',
		categories: [
			{ id: '1', name: 'All' },
			{ id: '2', name: 'Drinks' },
			{ id: '3', name: 'Pizza' },
			{ id: '4', name: 'Vegan' },
			{ id: '5', name: 'Non Veg' },
		],
	},
];

const recommendedData = [
	{
		id: '1',
		name: 'Sisig',
		image: require('../../../../../../assets/images/food.png'),
		rating: 4.5,
		reviews: 665,
		price: '250',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis vulputate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis vulputate',
	},
	{
		id: '2',
		name: 'Pasta',
		image: require('../../../../../../assets/images/food2.png'),
		rating: 4.5,
		reviews: 665,
		price: '250',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis vulputate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis vulputate',
	},
	{
		id: '3',
		name: 'Burger',
		image: require('../../../../../../assets/images/food1.png'),
		rating: 4.5,
		reviews: 665,
		price: '250',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis vulputate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis vulputate',
	},
];

const forYouData = [
	{
		id: '1',
		name: 'Sisig',
		image: require('../../../../../../assets/images/food.png'),
		rating: 4.5,
		reviews: 665,
		price: '250',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis vulputate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis vulputate',
	},
	{
		id: '2',
		name: 'Pasta',
		image: require('../../../../../../assets/images/food2.png'),
		rating: 4.5,
		reviews: 665,
		price: '250',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis vulputate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis vulputate',
	},
	{
		id: '3',
		name: 'Burger',
		image: require('../../../../../../assets/images/food1.png'),
		rating: 4.5,
		reviews: 665,
		price: '250',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis vulputate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu felis vulputate',
	},
];
