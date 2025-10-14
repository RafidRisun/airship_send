import { iconArrow } from '@/assets/icons';
import BecauseYouBought from '@/src/components/ui/Home/BecauseYouBought';
import CarouselRN from '@/src/components/ui/Home/CarouselRN';
import Categories from '@/src/components/ui/Home/Categories';
import FeaturedRestaurants from '@/src/components/ui/Home/FeaturedRestaurants';
import ProfileAndLocation from '@/src/components/ui/Home/ProfileAndLocation';
import SearchBar from '@/src/components/ui/Home/SearchBar';
import Services from '@/src/components/ui/Home/Services';
import ShopsNearYou from '@/src/components/ui/Home/ShopsNearYou';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	Keyboard,
	ScrollView,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
//import { View, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

export default function Index() {
	return (
		<SafeAreaView style={tw`flex flex-1 bg-white`}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<TouchableWithoutFeedback
					onPress={() => {
						Keyboard.dismiss();
					}}
				>
					<View style={tw`flex flex-col w-full flex-1 bg-white gap-5 p-4`}>
						<StatusBar style="dark" />

						<ProfileAndLocation />
						<SearchBar />
						{/* <Carousel /> */}
						<CarouselRN />
						<Services />
						<Categories />
						<FeaturedRestaurants />
						<BecauseYouBought />
						<ShopsNearYou />
					</View>
				</TouchableWithoutFeedback>
			</ScrollView>
			{currentDelivery && (
				<View style={tw`flex px-4 bg-white`}>
					<View
						style={tw`flex flex-row items-center justify-between p-3 gap-3 bg-white shadow-md rounded-xl`}
					>
						<Image
							source={currentDelivery.image}
							style={tw`w-12 aspect-square rounded-full`}
						/>
						<View style={tw`flex flex-col flex-1 items-start justify-center`}>
							<Text style={tw`font-manropeSemiBold text-base`}>
								{currentDelivery.restaurant}
							</Text>
							<Text style={tw`font-manropeSemiBold text-sm text-green-500`}>
								{currentDelivery.status} <SvgXml xml={iconArrow} />
							</Text>
						</View>
						<View
							style={tw`flex flex-col items-center justify-center py-1 px-4 bg-blue rounded-lg`}
						>
							<Text style={tw`font-manropeSemiBold text-sm text-white`}>
								Arriving in
							</Text>
							<Text style={tw`font-manropeSemiBold text-sm text-white`}>
								{currentDelivery.arrivingIn}
							</Text>
						</View>
					</View>
				</View>
			)}
		</SafeAreaView>
	);
}

const currentDelivery = {
	id: '1',
	restaurant: 'Maa er Doa Restaurant',
	image: require('../../../assets/images/food.png'),
	arrivingIn: '23 mins',
	status: 'Your order is on the way',
};
