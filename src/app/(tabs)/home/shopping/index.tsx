import { iconLocation, iconSearch } from '@/assets/icons';
import PageWrapper from '@/src/components/PageWrapper';
import Header from '@/src/components/ui/Header';
import FeaturedRestaurantCard from '@/src/components/ui/Home/FeaturedRestaurantCard';
import PopularShops from '@/src/components/ui/Shopping/PopularShops';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Index() {
	const router = useRouter();

	return (
		<PageWrapper>
			<StatusBar style="dark" />
			<View style={tw`flex flex-row w-full items-center justify-start gap-2`}>
				<TouchableOpacity
					style={tw`flex items-center justify-center p-3 aspect-square rounded-full bg-blue shadow-md`}
				>
					<SvgXml xml={iconLocation} />
				</TouchableOpacity>
				<View style={tw`flex flex-col items-start justify-center gap-1`}>
					<Text style={tw`font-manropeSemiBold text-sm`}>Abhi S.</Text>
					<Text style={tw`font-manropeRegular text-xs text-gray`}>
						Paco, Manilla
					</Text>
				</View>
			</View>
			<View style={tw`flex flex-col w-full h-48  items-center justify-start`}>
				<View
					style={tw`flex flex-row w-full h-11/12 items-start justify-center p-4 gap-2 bg-[#05C26A] rounded-xl`}
				>
					<Text
						style={tw`text-base font-manropeRegular text-white flex-1 px-2`}
					>
						Upto{`\n`}
						<Text style={tw`font-manropeBold text-4xl`}>30% Off </Text>
						{`\n`}
						Enjoy our offer of the day
					</Text>
					<Image
						source={require('../../../../../assets/images/shoppingBanner.png')}
						style={tw`w-1/2 h-full`}
						contentFit="contain"
					/>
				</View>
				<TouchableOpacity
					style={tw`flex flex-row items-center justify-between px-4 w-11/12 h-12 bg-white rounded-lg absolute bottom-0 shadow-md`}
					onPress={() => {
						router.push('/(tabs)/home/shopping/searchShoppingItem');
					}}
				>
					<Text style={tw`font-manropeRegular text-sm text-gray`}>
						Search for groceries
					</Text>
					<SvgXml xml={iconSearch} />
				</TouchableOpacity>
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
							//onPress={}
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
			<Header title="Popular Shops" seeAll />
			<View style={tw`flex flex-col w-full px-3 gap-4`}>
				{popularShopsData.slice(0, 2).map(shop => (
					<PopularShops key={shop.id} {...shop} />
				))}
			</View>
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
			<Header title="Featured Shops" seeAll />
			<View style={tw`flex flex-row w-full items-center justify-between gap-2`}>
				<FeaturedRestaurantCard
					name={featuredShops[0].name}
					image={featuredShops[0].image}
					rating={featuredShops[0].rating}
					cuisine={featuredShops[0].cuisine}
					deliveryTime={featuredShops[0].deliveryTime}
					distance={featuredShops[0].distance}
				/>
				<View style={tw`h-35 w-0 border-l border-lightGray m-1`} />
				<FeaturedRestaurantCard
					name={featuredShops[1].name}
					image={featuredShops[1].image}
					rating={featuredShops[1].rating}
					cuisine={featuredShops[1].cuisine}
					deliveryTime={featuredShops[1].deliveryTime}
					distance={featuredShops[1].distance}
				/>
			</View>
		</PageWrapper>
	);
}

const popularCategoriesData = [
	{
		id: '1',
		name: 'Groceries',
		icon: require('../../../../../assets/images/groceries.png'),
	},
	{
		id: '2',
		name: 'Traditional Market',
		icon: require('../../../../../assets/images/traditional_market.png'),
	},
	{
		id: '3',
		name: 'Pharmacy',
		icon: require('../../../../../assets/images/pharmacy.png'),
	},
	{
		id: '4',
		name: 'Retail Shop',
		icon: require('../../../../../assets/images/retail_shop.png'),
	},
];

const popularShopsData = [
	{
		id: '1',
		name: 'Shangri-La Grocery',
		image: require('../../../../../assets/images/shop1.png'),
		rating: 4.5,
		reviews: 120,
		distance: '0.5 km',
		estimatedTime: '15 min',
	},
	{
		id: '2',
		name: 'Market Fresh',
		image: require('../../../../../assets/images/shop2.png'),
		rating: 4.2,
		reviews: 95,
		distance: '1.2 km',
		estimatedTime: '20 min',
	},
	{
		id: '3',
		name: 'Green Valley Store',
		image: require('../../../../../assets/images/resturant1.png'),
		rating: 4.5,
		reviews: 120,
		distance: '0.5 km',
		estimatedTime: '15 min',
	},
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

const featuredShops = [
	{
		id: '1',
		name: 'El Poco Cantina',
		image: require('../../../../../assets/images/shop3.png'),
		rating: 5.0,
		cuisine: 'Seafood, Philippine',
		deliveryTime: '30 mins',
		distance: '1 km',
	},
	{
		id: '2',
		name: 'Maa er doa Restaurant',
		image: require('../../../../../assets/images/shop4.png'),
		rating: 4.5,
		cuisine: 'Italian, Pizza',
		deliveryTime: '25 mins',
		distance: '2 km',
	},
];
