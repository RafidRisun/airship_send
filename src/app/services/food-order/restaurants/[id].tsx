import PageWrapper from '@/src/components/PageWrapper';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

export default function Restaurant() {
	const { id } = useLocalSearchParams(); // Extract the `id` parameter

	const restaurant = nearYouData.find(item => item.id === id);

	return (
		<PageWrapper>
			<Text> Restaurant {restaurant?.name} </Text>
		</PageWrapper>
	);
}

const nearYouData = [
	{
		id: '1',
		name: 'Cafe Ilang Ilang',
		image: require('../../../../../assets/images/resturant1.png'),
		rating: 4.5,
		reviews: 120,
		distance: '0.5 km',
		estimatedTime: '15 min',
	},
	{
		id: '2',
		name: 'Pancake House',
		image: require('../../../../../assets/images/resturant2.png'),
		rating: 4.2,
		reviews: 95,
		distance: '1.2 km',
		estimatedTime: '20 min',
	},
	{
		id: '3',
		name: 'Jollibee',
		image: require('../../../../../assets/images/resturant1.png'),
		rating: 4.5,
		reviews: 120,
		distance: '0.5 km',
		estimatedTime: '15 min',
	},
];
