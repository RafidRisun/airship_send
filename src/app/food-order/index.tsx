import { iconAdd, iconLocation, iconSearch, iconTime } from '@/assets/icons';
import PageWrapper from '@/src/components/PageWrapper';
import NearYou from '@/src/components/ui/FoodOrder/NearYou';
import Header from '@/src/components/ui/Header';
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

export default function Index() {
	const router = useRouter();
	const [liked, setLiked] = React.useState(false);

	return (
		<PageWrapper>
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
					style={tw`flex flex-row w-full h-11/12 items-start justify-center p-4 gap-2 bg-[#FA7C0A] rounded-xl`}
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
						source={require('../../../assets/images/Food_delivery_banner.png')}
						style={tw`w-1/2 h-full`}
						contentFit="contain"
					/>
				</View>
				<View
					style={tw`flex flex-row items-center px-4 w-11/12 h-12 bg-white rounded-lg absolute bottom-0 shadow-md`}
				>
					<TextInput
						placeholder="Search for food"
						style={tw`flex-1 font-manropeRegular text-sm`}
					/>
					<SvgXml xml={iconSearch} />
				</View>
			</View>
			<Header title="Popular Categories" seeAll={false} />
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={tw`w-full`}
				contentContainerStyle={tw`flex flex-row items-center justify-start gap-4`}
			>
				{popularCategoriesData.map(category => (
					<View
						key={category.id}
						style={tw`flex flex-col w-15 items-center justify-center gap-2`}
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
			<Header title="Near You" seeAll />
			<View style={tw`flex flex-col w-full px-3 gap-4`}>
				{nearYouData.slice(0, 2).map(restaurant => (
					<NearYou key={restaurant.id} {...restaurant} />
				))}
			</View>
			<Header title="Popular Categories" seeAll={false} />
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={tw`w-full`}
				contentContainerStyle={tw`flex flex-row items-center justify-start gap-4`}
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
				contentContainerStyle={tw`flex flex-row items-center justify-start gap-4 pb-5`}
			>
				{forYouData.map(food => (
					<TouchableOpacity
						key={food.id}
						style={tw`flex flex-col w-40 bg-white rounded-xl shadow-sm`}
					>
						<Image
							source={food.image}
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
										{food.name}
									</Text>
								</View>
								<TouchableOpacity>
									<SvgXml xml={iconAdd} />
								</TouchableOpacity>
							</View>
							<View style={tw`flex flex-row items-center justify-start gap-2`}>
								<SvgXml xml={iconTime} />
								<Text style={tw`text-xs font-manropeRegular text-gray`}>
									{food.time}
								</Text>
							</View>
							<View style={tw`flex flex-row items-end justify-start gap-1`}>
								{food.offer && (
									<Text
										style={tw`text-xs font-manropeRegular text-gray line-through`}
									>
										₱ {food.previousPrice}
									</Text>
								)}
								<Text style={tw`text-sm font-manropeBold text-blue`}>
									₱ {food.price}
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
	{ id: '1', name: 'Pizza', icon: require('../../../assets/images/pizza.png') },
	{
		id: '2',
		name: 'Burger',
		icon: require('../../../assets/images/burger.png'),
	},
	{
		id: '3',
		name: 'Noodles',
		icon: require('../../../assets/images/noodles.png'),
	},
	{
		id: '4',
		name: 'Ice Cream',
		icon: require('../../../assets/images/ice_cream.png'),
	},
	{ id: '5', name: 'Cake', icon: require('../../../assets/images/cake.png') },
	{
		id: '6',
		name: 'Fried Rice',
		icon: require('../../../assets/images/fried_rice.png'),
	},
	{ id: '7', name: 'Pizza', icon: require('../../../assets/images/pizza.png') },
	{
		id: '8',
		name: 'Burger',
		icon: require('../../../assets/images/burger.png'),
	},
	{
		id: '9',
		name: 'Noodles',
		icon: require('../../../assets/images/noodles.png'),
	},
	{
		id: '10',
		name: 'Ice Cream',
		icon: require('../../../assets/images/ice_cream.png'),
	},
	{ id: '11', name: 'Cake', icon: require('../../../assets/images/cake.png') },
	{
		id: '12',
		name: 'Fried Rice',
		icon: require('../../../assets/images/fried_rice.png'),
	},
];

const nearYouData = [
	{
		id: '1',
		name: 'Cafe Ilang Ilang',
		image: require('../../../assets/images/resturant1.png'),
		rating: 4.5,
		reviews: 120,
		distance: '0.5 km',
		estimatedTime: '15 min',
	},
	{
		id: '2',
		name: 'Pancake House',
		image: require('../../../assets/images/resturant2.png'),
		rating: 4.2,
		reviews: 95,
		distance: '1.2 km',
		estimatedTime: '20 min',
	},
	{
		id: '3',
		name: 'Jollibee',
		image: require('../../../assets/images/resturant1.png'),
		rating: 4.5,
		reviews: 120,
		distance: '0.5 km',
		estimatedTime: '15 min',
	},
];

const popularCategories = [
	{
		id: '1',
		name: 'Italian',
		icon: require('../../../assets/images/italian.png'),
	},
	{
		id: '2',
		name: 'Fast Food',
		icon: require('../../../assets/images/fastfood.png'),
	},
	{ id: '3', name: 'Asian', icon: require('../../../assets/images/asian.png') },
	{
		id: '4',
		name: 'Sea Food',
		icon: require('../../../assets/images/seafood.png'),
	},
	{ id: '5', name: 'Vegan', icon: require('../../../assets/images/vegan.png') },
];

const forYouData = [
	{
		id: '1',
		name: 'Cheese Burger',
		image: require('../../../assets/images/food1.png'),
		time: '25 min',
		offer: true,
		previousPrice: 250,
		price: 200,
	},
	{
		id: '2',
		name: 'Pepperoni Pizza',
		image: require('../../../assets/images/food2.png'),
		time: '30 min',
		offer: false,
		previousPrice: 300,
		price: 250,
	},
	{
		id: '3',
		name: 'Vegan Salad',
		image: require('../../../assets/images/food3.png'),
		time: '20 min',
		offer: true,
		previousPrice: 150,
		price: 120,
	},
];
