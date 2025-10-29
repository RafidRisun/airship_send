import { iconAdd, iconSearch, iconStar } from '@/assets/icons';
import PageWrapper from '@/src/components/PageWrapper';
import Header from '@/src/components/ui/Header';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';

import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Pharmacy() {
	const router = useRouter();

	return (
		<PageWrapper>
			<StatusBar style="dark" />
			<View
				style={tw`flex flex-row items-center px-4 w-11/12 h-12 bg-white rounded-full shadow-md`}
			>
				<TextInput
					placeholder="Search in Pharmacy"
					style={tw`flex-1 font-manropeRegular text-sm`}
				/>
				<SvgXml xml={iconSearch} />
			</View>
			<Header title="Popular Categories" seeAll={false} />
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={tw`w-full`}
				contentContainerStyle={tw`flex flex-row items-start justify-between gap-4`}
			>
				{popularCategoriesData.map(category => (
					<View
						key={category.id}
						style={tw`flex flex-col w-20 items-center justify-center gap-2`}
					>
						<TouchableOpacity
							style={tw`flex w-14 h-14 items-center justify-center bg-white shadow-md rounded-full`}
						>
							<Image
								source={category.icon}
								style={tw`w-7 h-7`}
								contentFit="contain"
							/>
						</TouchableOpacity>
						<Text style={tw`text-xs text-center font-manropeSemiBold`}>
							{category.name}
						</Text>
					</View>
				))}
			</ScrollView>
			<Header title="Nearby Pharmacies" />
			<View style={tw`flex flex-col w-full gap-4`}>
				{nearByStoresData.map(store => (
					<TouchableOpacity
						key={store.id}
						style={tw`flex flex-row items-center gap-4`}
						onPress={() =>
							router.push(
								`/(tabs)/home/shopping/pharmacy/addPrescription/${store.id}`
							)
						}
					>
						<Image
							source={store.image}
							style={tw`w-12 h-12 rounded-full bg-white shadow-sm`}
							contentFit="contain"
						/>
						<View style={tw`flex`}>
							<Text style={tw`font-manropeBold`}>{store.name}</Text>
							<View style={tw`flex flex-row items-center gap-2`}>
								<View style={tw`flex flex-row items-center gap-1`}>
									<Text style={tw`text-sm font-manropeRegular text-gray`}>
										{store.rating}
									</Text>
									<SvgXml xml={iconStar} />
								</View>
								<Text style={tw`text-xs font-manropeRegular text-gray`}>
									{store.address}
								</Text>
								<Text
									style={tw`text-xs font-manropeSemiBold ${
										store.openNow ? 'text-green-500' : 'text-red-500'
									}`}
								>
									{store.openNow ? 'Open' : 'Closed'}
								</Text>
							</View>
						</View>
					</TouchableOpacity>
				))}
			</View>
			<Header title="Everyday Essentials" />
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={tw`w-full`}
				contentContainerStyle={tw`flex flex-row items-center justify-start gap-2 pb-5`}
			>
				{everyDayEssentials.map(item => (
					<TouchableOpacity
						key={item.id}
						style={tw`flex flex-col w-40 bg-white rounded-xl shadow-sm`}
						onPress={() =>
							router.push(`/(tabs)/home/shopping/shopping-item/${item.id}`)
						}
					>
						<Image
							source={item.image}
							style={tw`w-full h-24 rounded-t-xl`}
							contentFit="cover"
						/>
						<View style={tw`flex flex-col p-2 gap-1`}>
							<View style={tw`flex flex-row items-center justify-between`}>
								<View style={tw`flex-1`}>
									<Text
										style={tw`font-manropeSemiBold text-base capitalize`}
										numberOfLines={1}
										ellipsizeMode="tail"
									>
										{item.name}
									</Text>
								</View>
								<TouchableOpacity>
									<SvgXml xml={iconAdd} />
								</TouchableOpacity>
							</View>
							<Text style={tw`text-xs font-manropeRegular text-gray`}>
								{item.amount}
							</Text>
							<View style={tw`flex flex-row items-end justify-start gap-1`}>
								{item.offer && (
									<Text
										style={tw`text-xs font-manropeRegular text-gray line-through`}
									>
										₱ {item.previousPrice}
									</Text>
								)}
								<Text style={tw`text-sm font-manropeBold text-blue`}>
									₱ {item.price}
								</Text>
							</View>
						</View>
					</TouchableOpacity>
				))}
			</ScrollView>
		</PageWrapper>
	);
}

const popularCategoriesData = [
	{
		id: '1',
		name: 'Medicines',
		icon: require('../../../../../../assets/images/medicine.png'),
	},
	{
		id: '2',
		name: 'Beauty and Care',
		icon: require('../../../../../../assets/images/beautyAndCare.png'),
	},
	{
		id: '3',
		name: 'Vitamins',
		icon: require('../../../../../../assets/images/vitamins.png'),
	},
	{
		id: '4',
		name: 'Sports and Health',
		icon: require('../../../../../../assets/images/sportsAndHealth.png'),
	},
	{
		id: '5',
		name: 'Medicines',
		icon: require('../../../../../../assets/images/medicine.png'),
	},
	{
		id: '6',
		name: 'Beauty and Care',
		icon: require('../../../../../../assets/images/beautyAndCare.png'),
	},
	{
		id: '7',
		name: 'Vitamins',
		icon: require('../../../../../../assets/images/vitamins.png'),
	},
	{
		id: '8',
		name: 'Sports and Health',
		icon: require('../../../../../../assets/images/sportsAndHealth.png'),
	},
];

const nearByStoresData = [
	{
		id: '1',
		name: 'HealthPlus Pharmacy',
		address: '123 Main St',
		image: require('../../../../../../assets/images/pharmacy1.png'),
		rating: 4.5,
		openNow: true,
	},
	{
		id: '2',
		name: 'WellCare Pharmacy',
		address: '456 Elm St',
		image: require('../../../../../../assets/images/pharmacy2.png'),
		rating: 4.0,
		openNow: false,
	},
	{
		id: '3',
		name: 'MediTrust Pharmacy',
		address: '789 Oak St',
		image: require('../../../../../../assets/images/pharmacy3.png'),
		rating: 4.3,
		openNow: true,
	},
	{
		id: '4',
		name: 'CarePoint Pharmacy',
		address: '101 Pine St',
		image: require('../../../../../../assets/images/pharmacy4.png'),
		rating: 4.7,
		openNow: true,
	},
];

const everyDayEssentials = [
	{
		id: '1',
		name: 'Paracetamol 500mg',
		amount: '20 tablets',
		price: 50,
		previousPrice: 70,
		offer: true,
		image: require('../../../../../../assets/images/Paracetamol.jpg'),
	},
	{
		id: '2',
		name: 'Ibuprofen 400mg',
		amount: '20 tablets',
		price: 60,
		previousPrice: 80,
		offer: true,
		image: require('../../../../../../assets/images/ibuprofen.jpeg'),
	},
	{
		id: '3',
		name: 'Vitamin C 1000mg',
		amount: '30 tablets',
		price: 120,
		previousPrice: 150,
		offer: true,
		image: require('../../../../../../assets/images/vitaminC.jpg'),
	},
	{
		id: '4',
		name: 'Cough Syrup 100ml',
		amount: '100 ml',
		price: 80,
		previousPrice: 0,
		offer: false,
		image: require('../../../../../../assets/images/coughSyrup.jpg'),
	},
];
