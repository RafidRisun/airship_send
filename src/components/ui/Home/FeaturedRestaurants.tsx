import tw from '@/src/lib/tailwind';
import React from 'react';
import { Text, View } from 'react-native';
import FeaturedRestaurantCard from './FeaturedRestaurantCard';

export default function FeaturedRestaurants() {
	return (
		<View style={tw`flex flex-col w-full gap-2 items-center justify-center`}>
			<View style={tw`flex flex-row w-full items-center justify-between`}>
				<Text style={tw`text-lg font-manropeSemiBold text-black`}>
					Featured Restaurants
				</Text>
				<Text style={tw`text-base font-manropeRegular text-gray`}>See all</Text>
			</View>
			<View style={tw`flex flex-row w-full items-center justify-between gap-2`}>
				<FeaturedRestaurantCard
					name={featuredRestaurants[0].name}
					image={featuredRestaurants[0].image}
					rating={featuredRestaurants[0].rating}
					cuisine={featuredRestaurants[0].cuisine}
					deliveryTime={featuredRestaurants[0].deliveryTime}
					distance={featuredRestaurants[0].distance}
					discount={featuredRestaurants[0].discount}
				/>
				<View style={tw`h-35 w-0 border-l border-lightGray m-1`} />
				<FeaturedRestaurantCard
					name={featuredRestaurants[1].name}
					image={featuredRestaurants[1].image}
					rating={featuredRestaurants[1].rating}
					cuisine={featuredRestaurants[1].cuisine}
					deliveryTime={featuredRestaurants[1].deliveryTime}
					distance={featuredRestaurants[1].distance}
					discount={featuredRestaurants[1].discount}
				/>
			</View>
		</View>
	);
}

const featuredRestaurants = [
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
		name: 'Maa er doa Restaurant',
		image: require('../../../../assets/images/resturant2.png'),
		rating: 4.5,
		cuisine: 'Italian, Pizza',
		deliveryTime: '25 mins',
		distance: '2 km',
		discount: '15% OFF',
	},
];
