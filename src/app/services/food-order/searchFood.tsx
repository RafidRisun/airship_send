import { iconStar, iconTime } from '@/assets/icons';
import PageWrapper from '@/src/components/PageWrapper';
import AllRestaurantCard from '@/src/components/ui/FoodOrder/AllRestaurantCard';
import Header from '@/src/components/ui/Header';
import SearchBar from '@/src/components/ui/Home/SearchBar';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function SearchFood() {
	const [selectedCategory, setSelectedCategory] = React.useState({} as any);
	return (
		<PageWrapper>
			<SearchBar
				placeholder="Search for food"
				onChange={text => {
					console.log(text);
				}}
			/>
			<View
				style={tw`flex flex-row flex-wrap w-full items-center justify-start gap-2`}
			>
				{categories.map(category => (
					<TouchableOpacity
						key={category.id}
						style={tw`flex items-center justify-center px-4 py-2 mr-3 ${
							selectedCategory.id === category.id
								? 'bg-blue'
								: 'bg-white border border-lightGray'
						} rounded-full`}
						onPress={() => {
							if (selectedCategory.id !== category.id)
								setSelectedCategory(category);
							else setSelectedCategory({} as any);
						}}
					>
						<Text
							style={tw`font-manropeRegular text-xs text-center ${
								selectedCategory.id === category.id ? 'text-white' : 'text-gray'
							}`}
						>
							{category.name}
						</Text>
					</TouchableOpacity>
				))}
			</View>
			<Header title="Recommended for you" />
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={tw`w-full`}
				contentContainerStyle={tw`flex flex-row items-start gap-4 pb-5`}
			>
				{recommendedForYou.map(restaurant => (
					<TouchableOpacity
						key={restaurant.id}
						style={tw`flex flex-col gap-2 w-40`}
					>
						<Image
							source={restaurant.image}
							style={tw`w-full h-30 rounded-xl`}
							contentFit="cover"
						/>
						<View style={tw`flex flex-col gap-1 w-full`}>
							<View style={tw`flex flex-row items-start justify-between`}>
								<Text style={tw`text-sm font-manropeBold`} numberOfLines={1}>
									{restaurant.name.length > 14
										? `${restaurant.name.slice(0, 14)}...`
										: restaurant.name}
								</Text>
								<View
									style={tw`flex flex-row items-center justify-center gap-1`}
								>
									<SvgXml xml={iconStar} />
									<Text style={tw`font-manropeRegular text-xs text-gray`}>
										{restaurant.rating.toFixed(1)}
									</Text>
								</View>
							</View>
							<View style={tw`flex flex-row items-center justify-start gap-2`}>
								<SvgXml xml={iconTime} />
								<Text style={tw`text-xs font-manropeRegular text-gray`}>
									{restaurant.deliveryTime}
								</Text>
							</View>
						</View>
					</TouchableOpacity>
				))}
			</ScrollView>
			<Header title="All Restaurants" seeAll />
			<View style={tw`flex flex-col w-full px-3 gap-4`}>
				{allRestaurants.slice(0, 2).map(restaurant => (
					<AllRestaurantCard key={restaurant.id} {...restaurant} />
				))}
			</View>
		</PageWrapper>
	);
}

const categories = [
	{ id: '1', name: 'Pizza' },
	{ id: '2', name: 'Burgers' },
	{ id: '3', name: 'Sushi' },
	{ id: '4', name: 'Desserts' },
	{ id: '5', name: 'Drinks' },
	{ id: '6', name: 'Salads' },
];

const recommendedForYou = [
	{
		id: '1',
		name: 'El Poco Cantina',
		image: require('../../../../assets/images/resturant1.png'),
		rating: 5.0,
		cuisine: 'Seafood, Philippine',
		deliveryTime: '30 mins',
		distance: '1 km',
		discount: '10% OFF',
	},
	{
		id: '2',
		name: 'Ma er doa Restaurant',
		image: require('../../../../assets/images/resturant2.png'),
		rating: 4.5,
		cuisine: 'Italian, Pizza',
		deliveryTime: '25 mins',
		distance: '2 km',
		discount: '15% OFF',
	},
	{
		id: '3',
		name: 'Sushi Place',
		image: require('../../../../assets/images/resturant1.png'),
		rating: 4.8,
		cuisine: 'Japanese, Sushi',
		deliveryTime: '20 mins',
		distance: '3 km',
		discount: '5% OFF',
	},
	{
		id: '4',
		name: 'Dessert Haven',
		image: require('../../../../assets/images/resturant2.png'),
		rating: 4.9,
		cuisine: 'Desserts',
		deliveryTime: '15 mins',
		distance: '1.5 km',
		discount: '20% OFF',
	},
];

const allRestaurants = [
	{
		id: '1',
		name: 'El Poco Cantina',
		image: require('../../../../assets/images/resturant1.png'),
		rating: 5.0,
		reviews: 250,
		estimatedTime: '30 mins',
		distance: '1 km',
	},
	{
		id: '2',
		name: 'Ma er doa Restaurant',
		image: require('../../../../assets/images/resturant2.png'),
		rating: 4.5,
		reviews: 95,
		estimatedTime: '25 mins',
		distance: '2 km',
	},
	{
		id: '3',
		name: 'Sushi Place',
		image: require('../../../../assets/images/resturant1.png'),
		rating: 4.8,
		reviews: 120,
		estimatedTime: '20 mins',
		distance: '3 km',
	},
	{
		id: '4',
		name: 'Dessert Haven',
		image: require('../../../../assets/images/resturant2.png'),
		rating: 4.9,
		reviews: 200,
		estimatedTime: '15 mins',
		distance: '1.5 km',
	},
];
