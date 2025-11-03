import tw from '@/src/lib/tailwind';
import React from 'react';
import { Text, View } from 'react-native';
import ShopsNearYouCards from './ShopsNearYouCards';

export default function ShopsNearYou() {
	return (
		<View style={tw`flex flex-col w-full gap-2 items-center justify-center`}>
			<View style={tw`flex flex-row w-full items-center justify-between`}>
				<Text style={tw`text-lg font-manropeSemiBold text-black`}>
					Shops near you
				</Text>
				<Text style={tw`text-base font-manropeRegular text-gray`}>See all</Text>
			</View>
			<View style={tw`flex flex-col w-full items-center justify-between gap-5`}>
				{shopsNearYouData.map(shop => (
					<ShopsNearYouCards
						key={shop.id}
						id={shop.id}
						name={shop.name}
						rating={shop.rating}
						reviews={shop.reviews}
						image={shop.image}
						closes={shop.closes}
						address={shop.address}
					/>
				))}
			</View>
		</View>
	);
}

const shopsNearYouData = [
	{
		id: '1',
		name: 'Shangri-La Plaza',
		rating: 4.5,
		reviews: 665,
		image: require('../../../../assets/images/shopsnear1.png'),
		closes: '9pm',
		address: 'Shang Central, Mandaluyong City 1550 Metro Manila',
	},
	{
		id: '2',
		name: 'Miniso Store',
		rating: 4.0,
		reviews: 500,
		image: require('../../../../assets/images/shopsnear2.jpg'),
		closes: '10pm',
		address: 'Robinsons Galleria, Ortigas Center, Quezon City',
	},
];
