import {
	iconAdd,
	iconCartBLue,
	iconHalfStar,
	iconLike,
	iconLiked,
	iconRemove,
	iconStar,
} from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router/build/hooks';
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

export default function PharmacyItem() {
	const { id } = useLocalSearchParams(); // Extract the `id` parameter
	const product = data.find(item => item.id === id);
	const screenWidth = Dimensions.get('window').width;
	const [liked, setLiked] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0); // Track the active slide index
	const [quantity, setQuantity] = useState(0);
	const router = useRouter();

	return (
		<View style={tw`flex flex-1`}>
			<ScrollView style={tw`flex-1 w-full bg-white`}>
				<View
					style={tw`flex flex-col items-center justify-center w-full pb-20`}
				>
					<View style={tw`flex w-full`}>
						<Carousel
							width={screenWidth}
							height={280}
							data={product ? product.image : []}
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
							{product?.image.map((_, index) => (
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
										{product?.name}
									</Text>
									<Text style={tw`text-lg font-manropeBold`}>
										₱ {product?.price}
									</Text>
								</View>
								<View
									style={tw`flex flex-row w-27 bg-lightGray rounded-full items-center justify-between`}
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
									{product?.rating}
								</Text>
								<View style={tw`flex flex-row gap-1`}>
									{Array.from({
										length: Math.floor(product?.rating ?? 0),
									}).map((_, i) => (
										<SvgXml key={i} xml={iconStar} />
									))}
									{(product?.rating ?? 0) % 1 > 0 && (
										<SvgXml xml={iconHalfStar} />
									)}
								</View>
								<Text style={tw`text-xs font-manropeRegular text-gray`}>
									{Math.floor((product?.reviews ?? 0) / 10) * 10} + Reviews
								</Text>
							</View>
						</View>
						<View style={tw`w-full h-0 border-b border-lightGray`} />
						<View style={tw`flex flex-col items-start justify-start w-full`}>
							<Text style={tw`text-base font-manropeSemiBold`}>About</Text>
							<Text style={tw`text-sm text-gray font-manropeRegular`}>
								{product?.description}
							</Text>
						</View>
						<View style={tw`w-full h-0 border-b border-lightGray`} />
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
								{everyDayEssentials.map(item => (
									<TouchableOpacity
										key={item.id}
										style={tw`flex flex-col w-40 bg-white rounded-xl shadow-sm`}
										onPress={() =>
											router.push(
												`/(tabs)/home/shopping/shopping-item/${item.id}`
											)
										}
									>
										<Image
											source={item.image}
											style={tw`w-full h-24 rounded-t-xl`}
											contentFit="cover"
										/>
										<View style={tw`flex flex-col p-2 gap-1`}>
											<View
												style={tw`flex flex-row items-center justify-between`}
											>
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
											<View
												style={tw`flex flex-row items-end justify-start gap-1`}
											>
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
						</View>
					</View>
				</View>
			</ScrollView>
			<View
				style={tw`flex flex-row w-full items-start justify-between bg-white absolute bottom-0 gap-2 px-4 pt-2`}
			>
				<TouchableOpacity
					style={tw`flex items-center justify-center bg-blue p-3 rounded-full flex-1`}
					onPress={() => router.navigate('/(tabs)/cart')}
				>
					<Text style={tw`text-white font-manropeSemiBold`}>Buy Now</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`flex flex-row items-center justify-center bg-white border border-blue p-3 rounded-full flex-1 gap-2`}
					onPress={() => router.navigate('/(tabs)/cart')}
				>
					<SvgXml xml={iconCartBLue} />
					<Text style={tw`text-blue font-manropeSemiBold`}>Add to Cart</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const data = [
	{
		id: '1',
		name: 'Paracetamol',
		image: [
			require('../../../../../../../assets/images/Paracetamol.jpg'),
			require('../../../../../../../assets/images/ibuprofen.jpeg'),
			require('../../../../../../../assets/images/vitaminC.jpg'),
			require('../../../../../../../assets/images/coughSyrup.jpg'),
		],
		rating: 4.5,
		reviews: 120,
		price: '150',
		description:
			'Paracetamol is a common pain reliever and fever reducer used to treat various conditions such as headaches, muscle aches, arthritis, backaches, toothaches, colds, and fevers.',
	},
	{
		id: '2',
		name: 'Ibuprofen',
		image: [
			require('../../../../../../../assets/images/Paracetamol.jpg'),
			require('../../../../../../../assets/images/ibuprofen.jpeg'),
			require('../../../../../../../assets/images/vitaminC.jpg'),
			require('../../../../../../../assets/images/coughSyrup.jpg'),
		],
		rating: 4.2,
		reviews: 95,
		price: '200',
		description:
			'Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) that helps reduce inflammation, pain, and fever. It is commonly used for conditions such as arthritis, menstrual cramps, and minor injuries.',
	},
	{
		id: '3',
		name: 'Vitamin C',
		image: [
			require('../../../../../../../assets/images/Paracetamol.jpg'),
			require('../../../../../../../assets/images/ibuprofen.jpeg'),
			require('../../../../../../../assets/images/vitaminC.jpg'),
			require('../../../../../../../assets/images/coughSyrup.jpg'),
		],
		rating: 4.8,
		reviews: 150,
		price: '300',
		description:
			'Vitamin C is an essential nutrient that supports the immune system, promotes healthy skin, and aids in the absorption of iron from plant-based foods. It is commonly taken as a dietary supplement.',
	},
	{
		id: '4',
		name: 'Cough Syrup',
		image: [
			require('../../../../../../../assets/images/Paracetamol.jpg'),
			require('../../../../../../../assets/images/ibuprofen.jpeg'),
			require('../../../../../../../assets/images/vitaminC.jpg'),
			require('../../../../../../../assets/images/coughSyrup.jpg'),
		],
		rating: 4.3,
		reviews: 80,
		price: '250',
		description:
			'Cough syrup is used to relieve coughing and soothe irritated throats. It may contain ingredients that suppress coughs or help loosen mucus in the airways.',
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
		image: require('../../../../../../../assets/images/Paracetamol.jpg'),
	},
	{
		id: '2',
		name: 'Ibuprofen 400mg',
		amount: '20 tablets',
		price: 60,
		previousPrice: 80,
		offer: true,
		image: require('../../../../../../../assets/images/ibuprofen.jpeg'),
	},
	{
		id: '3',
		name: 'Vitamin C 1000mg',
		amount: '30 tablets',
		price: 120,
		previousPrice: 150,
		offer: true,
		image: require('../../../../../../../assets/images/vitaminC.jpg'),
	},
	{
		id: '4',
		name: 'Cough Syrup 100ml',
		amount: '100 ml',
		price: 80,
		previousPrice: 0,
		offer: false,
		image: require('../../../../../../../assets/images/coughSyrup.jpg'),
	},
];
