import { iconAdd, iconSearch, iconWhiteClock } from '@/assets/icons';
import PageWrapper from '@/src/components/PageWrapper';
import Header from '@/src/components/ui/Header';
import Categories from '@/src/components/ui/Home/Categories';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';

import React from 'react';
import {
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function TraditionalMarket() {
	const router = useRouter();

	return (
		<PageWrapper>
			<View
				style={tw`flex flex-col items-center justify-start w-full h-48 gap-1 p-4`}
			>
				<View style={tw`w-full h-38`}>
					<Image
						source={require('../../../../../assets/images/the-market.jpg')}
						style={tw`w-full h-full rounded-lg`}
						contentFit="cover"
					/>
					<View
						style={tw`w-full h-full absolute bg-black opacity-50 rounded-lg`}
					/>
					<View
						style={tw`absolute w-full h-full flex items-center justify-center`}
					>
						<Text style={tw`text-white font-manropeBold text-lg`}>
							Traditional Market
						</Text>
						<View style={tw`flex flex-row items-center justify-center gap-2`}>
							<SvgXml xml={iconWhiteClock} height={14} width={14} />
							<Text style={tw`text-white font-manropeRegular text-sm`}>
								Open until 9:00 PM
							</Text>
						</View>
						<Text style={tw`text-white font-manropeRegular text-sm`}>
							Fruits, Vegetables, Meat, Dairy & More
						</Text>
					</View>
				</View>
				<View
					style={tw`absolute bottom-0 flex flex-row items-center px-4 w-11/12 h-12 bg-white rounded-lg shadow-md`}
				>
					<TextInput
						placeholder="Search for groceries and items"
						style={tw`flex-1 font-manropeRegular text-sm`}
					/>
					<SvgXml xml={iconSearch} />
				</View>
			</View>
			<View style={tw`flex flex-row w-full gap-4`}>
				<View
					style={tw`flex flex-row items-center justify-between flex-1 p-4 bg-[#FCA04D] rounded-xl`}
				>
					<View style={tw`flex flex-col w-3/4`}>
						<Text style={tw`font-manropeBold text-sm text-white`}>50% OFF</Text>
						<Text style={tw`font-manropeRegular text-xs text-white text-wrap`}>
							on first order
						</Text>
					</View>
					<Image
						source={require('../../../../../assets/images/discount.png')}
						style={tw`w-12 h-12 absolute right-4`}
						contentFit="contain"
					/>
				</View>
				<View
					style={tw`flex flex-row items-center justify-between flex-1 p-4 bg-[#03CB81] rounded-xl`}
				>
					<View style={tw`flex flex-col w-3/4`}>
						<Text style={tw`font-manropeBold text-sm text-white`}>
							₱ 200 OFF
						</Text>
						<Text style={tw`font-manropeRegular text-xs text-white text-wrap`}>
							min order of ₱1000
						</Text>
					</View>
					<Image
						source={require('../../../../../assets/images/basket.png')}
						style={tw`w-12 h-12 absolute right-4`}
						contentFit="contain"
					/>
				</View>
			</View>
			<Categories categories={categories} />
			<Header title="Recent Purchases" seeAll={false} />
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={tw`w-full`}
				contentContainerStyle={tw`flex flex-row items-center justify-start gap-2 pb-5`}
			>
				{recentlyPurchased.map(item => (
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
			<Header title="Popular Categories" seeAll={false} />
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={tw`w-full`}
				contentContainerStyle={tw`flex flex-row items-center justify-start gap-2`}
			>
				{popularCategories.map(category => (
					<TouchableOpacity
						key={category.id}
						style={tw`flex items-center justify-center w-25 aspect-square bg-black rounded-xl`}
					>
						<Image
							source={category.icon}
							style={tw`w-full h-full rounded-lg opacity-70 absolute`}
							contentFit="cover"
						/>
						<Text style={tw`text-white font-manropeSemiBold text-sm`}>
							{category.name}
						</Text>
					</TouchableOpacity>
				))}
			</ScrollView>
			<Header title="For You" seeAll={false} />
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={tw`w-full`}
				contentContainerStyle={tw`flex flex-row items-center justify-start gap-2 pb-5`}
			>
				{recentlyPurchased.map(item => (
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

// const nearYouData = [
// 	{
// 		id: '1',
// 		name: 'Shangri-La Grocery',
// 		image: require('../../../../../assets/images/shop1.png'),
// 		rating: 4.5,
// 		reviews: 120,
// 		distance: '0.5 km',
// 		estimatedTime: '15 min',
// 		categories: [
// 			{ id: '1', name: 'All' },
// 			{ id: '2', name: 'Herbs' },
// 			{ id: '3', name: 'Spices' },
// 			{ id: '4', name: 'Apples' },
// 			{ id: '5', name: 'Bananas' },
// 			{ id: '6', name: 'Vegetables' },
// 			{ id: '7', name: 'Dairy' },
// 			{ id: '8', name: 'Meat' },
// 		],
// 	},
// 	{
// 		id: '2',
// 		name: 'Market Fresh',
// 		image: require('../../../../../assets/images/shop2.png'),
// 		rating: 4.2,
// 		reviews: 95,
// 		distance: '1.2 km',
// 		estimatedTime: '20 min',
// 		categories: [
// 			{ id: '1', name: 'All' },
// 			{ id: '2', name: 'Herbs' },
// 			{ id: '3', name: 'Spices' },
// 			{ id: '4', name: 'Apples' },
// 			{ id: '5', name: 'Bananas' },
// 			{ id: '6', name: 'Vegetables' },
// 			{ id: '7', name: 'Dairy' },
// 			{ id: '8', name: 'Meat' },
// 		],
// 	},
// 	{
// 		id: '3',
// 		name: 'Green Valley Store',
// 		image: require('../../../../../assets/images/shop3.png'),
// 		rating: 4.5,
// 		reviews: 120,
// 		distance: '0.5 km',
// 		estimatedTime: '15 min',
// 		categories: [
// 			{ id: '1', name: 'All' },
// 			{ id: '2', name: 'Herbs' },
// 			{ id: '3', name: 'Spices' },
// 			{ id: '4', name: 'Apples' },
// 			{ id: '5', name: 'Bananas' },
// 			{ id: '6', name: 'Vegetables' },
// 			{ id: '7', name: 'Dairy' },
// 			{ id: '8', name: 'Meat' },
// 		],
// 	},
// ];

const recentlyPurchased = [
	{
		id: '1',
		name: 'Bananas',
		image: require('../../../../../assets/images/banana.png'),
		amount: '3 kg',
		offer: true,
		previousPrice: 100,
		price: 80,
	},
	{
		id: '2',
		name: 'Apples',
		image: require('../../../../../assets/images/apples.png'),
		amount: '1 kg',
		offer: false,
		previousPrice: 0,
		price: 150,
	},
	{
		id: '3',
		name: 'Carrots',
		image: require('../../../../../assets/images/carrot.png'),
		amount: '2 kg',
		offer: true,
		previousPrice: 90,
		price: 70,
	},
	{
		id: '4',
		name: 'Broccoli',
		image: require('../../../../../assets/images/brocolli.png'),
		amount: '1 kg',
		offer: false,
		previousPrice: 0,
		price: 120,
	},
];

const categories = [
	{ id: '1', name: 'All' },
	{ id: '2', name: 'Healthy' },
	{ id: '3', name: 'Fast Food' },
	{ id: '4', name: 'Vegan' },
	{ id: '5', name: 'Non Veg' },
];

const popularCategories = [
	{
		id: '1',
		name: 'Fresh',
		icon: require('../../../../../assets/images/shopCat1.png'),
	},
	{
		id: '2',
		name: 'Snacks',
		icon: require('../../../../../assets/images/shopCat2.png'),
	},
	{
		id: '3',
		name: 'Beverages',
		icon: require('../../../../../assets/images/shopCat3.png'),
	},
	{
		id: '4',
		name: 'Fresh',
		icon: require('../../../../../assets/images/shopCat1.png'),
	},
	{
		id: '5',
		name: 'Snacks',
		icon: require('../../../../../assets/images/shopCat2.png'),
	},
	{
		id: '6',
		name: 'Beverages',
		icon: require('../../../../../assets/images/shopCat3.png'),
	},
];
